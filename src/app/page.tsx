import HeroSection from "@/components/HeroSection";
import VSLSection from "@/components/VSLSection";
import IdentitySelector from "@/components/IdentitySelector";
import ValueProposition from "@/components/ValueProposition";
import FuturePacing from "@/components/FuturePacing";
import CourseModules from "@/components/CourseModules";
import InstructorBio from "@/components/InstructorBio";
import RawProofWall from "@/components/RawProofWall";
import ValueStack from "@/components/ValueStack";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <HeroSection />
      <VSLSection />
      <IdentitySelector />
      <ValueProposition />
      <FuturePacing />
      <CourseModules />
      <InstructorBio />
      <RawProofWall />
      <ValueStack />
      <PricingSection />
      <FAQSection />
      <EmailCapture />
      <Footer />
    </main>
  );
}
