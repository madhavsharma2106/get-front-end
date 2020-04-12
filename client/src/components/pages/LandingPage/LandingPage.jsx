import React from "react";
import Header from "../../organisms/Header/Header";
import HeroSection from "./HeroSection";
import LanguagesSection from "./LanguagesSection";
import CoursesSection from "./CoursesSection";
import PricesSection from "./PricesSection";
import Footer from "../../organisms/Footer/Footer";
import MailList from "./MailList";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <LanguagesSection />
      <CoursesSection />
      <PricesSection />
      <MailList />
      <Footer />
    </>
  );
}

export default LandingPage;
