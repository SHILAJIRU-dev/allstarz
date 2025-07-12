// ./app/page.js
import Hero from "@/components/Hero";
import ClassesSection from "@/components/ClassesSection";
import Testimonials from "@/components/Testimonials";
import Instructors from "@/components/Instructors";
import Sponsors from "@/components/Sponsors"; 
import CTASection from "@/components/CTASection";

export default function HomePage() {
  // Notice there is no Header, Footer, or <main> tag here.
  // It just returns the sections for the home page.
  return (
    <>
      <Hero />
      <ClassesSection />
      <Testimonials />
      <Instructors />
      <Sponsors />
      <CTASection />
    </>
  );
}