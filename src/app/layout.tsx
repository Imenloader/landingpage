import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAP & DPL - السيستم الشامل لبناء مصدر دخل مستقر من البيت",
  description: "اكتشف الخلطة السرية (FAP + DPL) لبناء مصدر دخل مادي مستقر من البيت. سواء كفريلانسر بيقفل ديلات كبيرة، أو كصانع محتوى بيبيع منتجات رقمية وهو نايم. بدون أي خبرة تقنية سابقة.",
  openGraph: {
    title: "السيستم الشامل لبناء مصدر دخل مستقر من البيت | FAP & DPL",
    description: "ابدأ رحلتك في تعلم مهارات مطلوبة عالمياً من الصفر. بدون خبرة تقنية. تعلم إزاي تقفل ديلات وتبني منتجات رقمية.",
    type: "website",
    locale: "ar_EG",
    siteName: "FAP & DPL System",
  },
  twitter: {
    card: "summary_large_image",
    title: "السيستم الشامل لبناء مصدر دخل مستقر من البيت",
    description: "ابدأ رحلتك في تعلم مهارات مطلوبة عالمياً من الصفر. بدون خبرة تقنية.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-EG" dir="rtl">
      <head>
        {/* Facebook Pixel - Retargeting & Conversion Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID_HERE');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${cairo.variable} font-[family-name:var(--font-cairo)] min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
