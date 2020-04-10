import React from "react";
import Header from "../../features/Header/Header";
import HeroSection from "./HeroSection";
import LanguagesSection from "./LanguagesSection";
import CoursesSection from "./CoursesSection";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <LanguagesSection />
      <CoursesSection />
    </>
  );
}

export default LandingPage;
