import Image from "next/image";
import Hero from "../../components/Hero";
import WhatIDo from "../../components/WhatIDo";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import About from "../../components/About";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIDo />
      <Projects />
      <Skills />
      <About />
      <Footer /> 
    </div>
  );
}
