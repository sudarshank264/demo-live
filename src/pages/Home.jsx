import { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { MarqueeSection } from "../components/sections/MarqueeSection";
import { TopStoriesSection } from "../components/sections/TopStoriesSection";
import { TheSkoraSoftWaySection } from "../components/sections/TheSkoraSoftWaySection";
import { ProjectExecutionSection } from "../components/sections/ProjectExecutionSection";
import { GovernanceSection } from "../components/sections/GovernanceSection";
import { ClientExperienceSection } from "../components/sections/ClientExperienceSection";
import { TrustSection } from "../components/sections/TrustSection";
import { BuildTeamSection } from "../components/sections/BuildTeamSection";
import { IndustriesSection } from "../components/sections/IndustriesSection";
import { NextGenSection } from "../components/sections/NextGenSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/layout/Footer";

export function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} />

      <HeroSection scrollTo={scrollTo} />
      <TopStoriesSection />
      <ServicesSection />
      <MarqueeSection />


      <TheSkoraSoftWaySection />
      <ProjectExecutionSection />
      <GovernanceSection />
      <ClientExperienceSection />
      <TrustSection />
      <BuildTeamSection />
      <IndustriesSection />
      <NextGenSection scrollTo={scrollTo} />
      <ContactSection />

      <Footer />
    </>
  );
}
