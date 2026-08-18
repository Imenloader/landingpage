import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import CourseModules from "@/components/CourseModules";
import InstructorBio from "@/components/InstructorBio";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <HeroSection />
      <ValueProposition />
      <CourseModules />
      <InstructorBio />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <EmailCapture />
      <Footer />
    </main>
  );
}
