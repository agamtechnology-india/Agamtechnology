import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import StateDemo from "@/components/StateDemo";
import UserList from "@/components/UserList";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <UserList />
      <Contact />
      <Projects />
      <StateDemo />
      <Footer />
    </main>
  );
}