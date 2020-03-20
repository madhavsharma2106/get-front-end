import React from "react";
import Header from "../../features/Header/Header";
import Button, { ButtonVariant } from "../../atoms/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.scss";
import Text, { TextVariant } from "../../atoms/Text/Text";

function LandingPage() {
  return (
    <>
      <Header />
      <div className="hero-text-area">
        <div className="text-area">
          <div className="wrapper">
            <div>
              <h1>Become a Front End Champ</h1>
              <Text variant={TextVariant.latoLight}>
                Your one-stop to learn all things Front End. <br />
                Gain in-depth knowledge on modern frameworks.
              </Text>
            </div>
            <div className="cta">
              <Button variant={ButtonVariant.contained}>View Courses</Button>
              <Button variant={ButtonVariant.text}>
                Login &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>
        </div>
        <img
          src={require("../../../assets/hero-landing.svg")}
          alt="Hero Text"
        />
      </div>
    </>
  );
}

export default LandingPage;
