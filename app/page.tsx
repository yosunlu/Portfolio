"use client";
import { useState, useEffect } from "react";
import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Contact from "@/components/contact";


export default function Home() {
  const [delayedSection, setDelayedSection] = useState(""); // Stores the section to display
  const [isVisible, setIsVisible] = useState(false); // Controls fade-in effect

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      // 1. Start fade-out effect
      setIsVisible(false);

      // 2. Wait for fade-out before updating the section
      setTimeout(() => {
        setDelayedSection(currentHash); // Change section AFTER fade-out
        setTimeout(() => setIsVisible(true), 50); // Trigger fade-in after section change
      }, 300); // Delay matches transition duration
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main>
      <div className="flex flex-row">
        {/* Header - Always present */}
        <div className="w-1/4 ml-20 2xl:ml-40">
          <Header />
        </div>

        {/* Content - Fades in and out smoothly */}
        <div
          className={`w-3/4 transition-opacity duration-700  ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {delayedSection === "#about" && <About />}
          {delayedSection === "#projects" && <Projects />}
          {delayedSection === "#contact" && <Contact />}
        </div>
      </div>
      
    </main>
  );
}
