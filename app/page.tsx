import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20 text-white">
      <StructuredData />
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <Contact />
      <Projects />
      <Footer />
    </main>
  );
}