"use client";
import React, { useState, useEffect } from 'react';
import { Loader2, Save, Github } from 'lucide-react';

export default function AdminPage() {
  const [token, setToken] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [currentVersion, setCurrentVersion] = useState<'neuromarketing' | 'original' | 'unknown'>('unknown');
  const [fileSha, setFileSha] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [logs, setLogs] = useState<string[]>([]);

  const REPO_OWNER = 'Imenloader';
  const REPO_NAME = 'landingpage';
  const FILE_PATH = 'src/app/page.tsx';

  const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

  useEffect(() => {
    const savedToken = localStorage.getItem('github_admin_token');
    if (savedToken) setToken(savedToken);
  }, []);

  const fetchCurrentState = async (githubToken: string) => {
    try {
      setStatus('loading');
      addLog('Fetching current page.tsx from GitHub...');
      
      const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!res.ok) throw new Error(`GitHub API Error: ${res.statusText}`);

      const data = await res.json();
      setFileSha(data.sha);
      
      // Decode Base64 (handling utf-8 properly)
      const decodedContent = decodeURIComponent(escape(atob(data.content)));
      setFileContent(decodedContent);

      if (decodedContent.includes('const USE_NEUROMARKETING_HERO = true;')) {
        setCurrentVersion('neuromarketing');
        addLog('Current live version: Neuromarketing');
      } else if (decodedContent.includes('const USE_NEUROMARKETING_HERO = false;')) {
        setCurrentVersion('original');
        addLog('Current live version: Original');
      } else {
        addLog('Could not detect the A/B switch in the file.');
      }
      
      setStatus('idle');
    } catch (err: any) {
      addLog(`Error: ${err.message}`);
      setStatus('error');
    }
  };

  const handleConnect = () => {
    if (!token) return alert('Please enter a GitHub token');
    localStorage.setItem('github_admin_token', token);
    fetchCurrentState(token);
  };

  const toggleVersion = async () => {
    if (!fileSha || !fileContent) return;
    
    const targetVersion = currentVersion === 'neuromarketing' ? 'original' : 'neuromarketing';
    const confirmMsg = `Are you sure you want to switch the live site to the ${targetVersion.toUpperCase()} version? This will push a commit to GitHub and trigger a Vercel deployment.`;
    
    if (!window.confirm(confirmMsg)) return;

    try {
      setStatus('loading');
      addLog(`Preparing to switch to ${targetVersion}...`);

      // Replace the exact boolean string
      let newContent = fileContent;
      if (targetVersion === 'neuromarketing') {
        newContent = newContent.replace('const USE_NEUROMARKETING_HERO = false;', 'const USE_NEUROMARKETING_HERO = true;');
      } else {
        newContent = newContent.replace('const USE_NEUROMARKETING_HERO = true;', 'const USE_NEUROMARKETING_HERO = false;');
      }

      // Encode back to Base64 (handling utf-8 properly)
      const encodedContent = btoa(unescape(encodeURIComponent(newContent)));

      addLog('Pushing commit to GitHub API...');
      
      const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `chore(ab-test): toggle hero version to ${targetVersion} via admin panel`,
          content: encodedContent,
          sha: fileSha
        })
      });

      if (!res.ok) throw new Error(`Failed to push commit: ${res.statusText}`);

      addLog('✅ Success! Commit pushed to GitHub. Vercel is now deploying the changes.');
      setCurrentVersion(targetVersion);
      setStatus('success');
      
      // Re-fetch to get new SHA
      setTimeout(() => fetchCurrentState(token), 3000);

    } catch (err: any) {
      addLog(`Error: ${err.message}`);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-slate-800" dir="ltr">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-slate-900 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Github className="w-8 h-8" />
            <h1 className="text-3xl font-black">A/B Test Admin</h1>
          </div>
          <p className="text-slate-400">Manage live Vercel deployments directly via GitHub API</p>
        </div>

        <div className="p-8">
          {/* GitHub Auth Section */}
          <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <label className="block text-sm font-bold text-slate-700 mb-2">GitHub Personal Access Token (repo scope)</label>
            <div className="flex gap-2">
              <input 
                type="password" 
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="ghp_xxxxxxxxxxxx"
                className="flex-1 bg-white border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-mono"
              />
              <button 
                onClick={handleConnect}
                disabled={status === 'loading'}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-bold transition-all disabled:opacity-50"
              >
                Connect
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">Stored securely in your local browser only.</p>
          </div>

          {/* Toggle Control Section */}
          {currentVersion !== 'unknown' && (
            <div className="mb-8 text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl">
              <h2 className="text-xl font-bold text-slate-700 mb-6">Current Live Hero Version:</h2>
              
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className={`flex flex-col items-center gap-2 ${currentVersion === 'original' ? 'opacity-100 scale-110' : 'opacity-40 grayscale'}`}>
                  <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl">🧱</span>
                  </div>
                  <span className="font-bold text-slate-700">Original</span>
                </div>
                
                <div className="w-16 h-1 bg-slate-200 rounded-full relative">
                  <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-indigo-600 shadow-md transition-all duration-500 ${currentVersion === 'neuromarketing' ? 'left-full -translate-x-full' : 'left-0'}`} />
                </div>

                <div className={`flex flex-col items-center gap-2 ${currentVersion === 'neuromarketing' ? 'opacity-100 scale-110' : 'opacity-40 grayscale'}`}>
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <span className="font-bold text-emerald-700">Neuromarketing</span>
                </div>
              </div>

              <button
                onClick={toggleVersion}
                disabled={status === 'loading'}
                className="bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 flex items-center gap-2 mx-auto"
              >
                {status === 'loading' ? <Loader2 className="animate-spin" /> : <Save />}
                Toggle Live Version Now
              </button>
            </div>
          )}

          {/* Terminal Logs */}
          <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm h-48 overflow-y-auto">
            <div className="text-emerald-400 mb-2">$ Admin Terminal initialized...</div>
            {logs.map((log, i) => (
              <div key={i} className={log.includes('Error') ? 'text-red-400' : log.includes('Success') ? 'text-emerald-400' : 'text-slate-300'}>
                &gt; {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
