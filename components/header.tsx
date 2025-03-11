"use client";
import React, { useState, useEffect } from "react";
import { links } from "@/lib/data";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(false); // Controls fade-in effect for nav

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      setActiveSection(currentHash);

      // Hide navigation when on a section page
      if (currentHash === "#about" || currentHash === "#projects" || currentHash === "#contact") {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true); // Ensure nav is shown when returning home
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initialize state on mount

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Fade in navigation on mount
  useEffect(() => {
    setTimeout(() => {
      setIsNavVisible(true);
    }, 300); // Delay to match the content fade-in
  }, []);

  return (
    <header
      className="flex-col fixed items-end pt-32"
      onMouseEnter={() => setIsNavVisible(true)}
      onMouseLeave={() => {
        if (activeSection === "#about" || activeSection === "#projects" || activeSection === "#contact") {
          setIsNavVisible(false);
        }
      }}
    >
      {/* Name Section - Always Visible */}
      <div className="flex flex-col items-end">
        <div className="font-NS font-extrabold text-4xl italic text-[#0000CD] leading-none 2xl:text-5xl">
          <a
            href={"/"}
            onClick={() => {
              setIsNavVisible(true); // Ensure header gradually fades in when returning home
            }}
          >
            YUSHAN LU
          </a>
        </div>
        <div className="font-NS font-bold text-2xl 2xl-text-3xl italic text-[#a7d12a] leading-none relative pt-3 2xl:pt-3">
          呂又山
        </div>
      </div>

      {/*  Navigation - Gradually appears on mount and when clicking name */}
      <nav
          className={`mt-24 flex flex-col items-end 
            space-y-8 2xl:space-y-16 transition-opacity duration-700 mb-24 ${
              isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          {links.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={() => setIsNavVisible(false)}
              className={`font-NS italic font-extrabold transition-colors duration-500 
                text-2xl 2xl:text-3xl
                ${activeSection === link.hash ? "text-[#a7d12a] underline" : "text-[#0000CD]"} 
                hover:text-[#a7d12a]`}
            >
              {link.name}
            </a>
          ))}
      </nav>

    </header>
  );
}
