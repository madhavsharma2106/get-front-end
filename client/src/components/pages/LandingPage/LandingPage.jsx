import React from "react";
import Header from "../../features/Header/Header";
import HeroSection from "./HeroSection";
import LanguagesSection from "./LanguagesSection";
import CoursesSection from "./CoursesSection";
import PricesSection from "./PricesSection";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <LanguagesSection />
      <CoursesSection />
      <PricesSection />
    </>
  );
}

export default LandingPage;
