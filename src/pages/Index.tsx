import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Dillon & Bird Partners | Strategic Growth Advisory Across the GCC</title>
        <meta 
          name="description" 
          content="Partner with Dillon & Bird for strategic growth, business consulting, and hands-on execution across the GCC. Expert advisory for founders and family enterprises." 
        />
        <meta name="keywords" content="GCC business consulting, UAE advisory, strategic growth, corporate advisory, Oman business services" />
        <link rel="canonical" href="https://dillonbird.com" />
      </Helmet>
      
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Leadership />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
