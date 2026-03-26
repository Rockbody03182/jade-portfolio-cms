"use client";

import { useState } from "react";
import Aside from "@/components/public/aside";

export default function PublicShell() {
  const [activeSection, setActiveSection] = useState("home");
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <>
      <Aside
        activeSection={activeSection}
        onNavClick={handleNavClick}
        isAsideOpen={isAsideOpen}
        onToggle={toggleAside}
      />

      <main className="main-content">
        <section
          id="home"
          className={activeSection === "home" ? "section active" : "section"}
        >
          Home
        </section>

        <section
          id="about"
          className={activeSection === "about" ? "section active" : "section"}
        >
          About
        </section>

        <section
          id="service"
          className={activeSection === "service" ? "section active" : "section"}
        >
          Service
        </section>

        <section
          id="portfolio"
          className={activeSection === "portfolio" ? "section active" : "section"}
        >
          Portfolio
        </section>

        <section
          id="project"
          className={activeSection === "project" ? "section active" : "section"}
        >
          Project
        </section>

        <section
          id="contact"
          className={activeSection === "contact" ? "section active" : "section"}
        >
          Contact
        </section>
      </main>
    </>
  );
}