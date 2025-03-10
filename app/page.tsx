"use client";
import { useState, useEffect } from "react";
import Container from "@/components/container";
import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [delayedSection, setDelayedSection] = useState(""); // Stores the section to display
  const [isVisible, setIsVisible] = useState(false); // Controls fade-in effect

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      setActiveSection(currentHash);

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
      <Container>
        {/* Header - Always present */}
        <div className="flex-shrink-0 w-1/4">
          <Header />
        </div>

        {/* Content - Fades in and out smoothly */}
        <div
          className={`w-3/4 flex-grow transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {delayedSection === "#about" && <About />}
          {delayedSection === "#projects" && <Projects />}
          {delayedSection === "#contact" && <Contact />}
        </div>
        
      </Container>
      
    </main>
  );
}
