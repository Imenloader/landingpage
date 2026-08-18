import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import IdentitySelector from "@/components/IdentitySelector";
import ValueProposition from "@/components/ValueProposition";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import VSLSection from "@/components/VSLSection";
import FuturePacing from "@/components/FuturePacing";
import CourseBundleMockup from "@/components/CourseBundleMockup";
import CourseModules from "@/components/CourseModules";
import InstructorBio from "@/components/InstructorBio";
import Testimonials from "@/components/Testimonials";
import RawProofWall from "@/components/RawProofWall";
import ValueStack from "@/components/ValueStack";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full" dir="rtl">
      <HeroSection />
      <TrustBar />
      <IdentitySelector />
      <ValueProposition />
      <BeforeAfterSection />
      <VSLSection />
      <FuturePacing />
      <CourseBundleMockup />
      <CourseModules />
      <InstructorBio />
      <Testimonials />
      <RawProofWall />
      <ValueStack />
      <PricingSection />
      <FAQSection />
      <EmailCapture />
      <Footer />
    </main>
  );
}
