import React, { useState } from "react";
import Text, { TextVariant, Alignment } from "../../atoms/Text/Text";
import { useEffect } from "react";

function LanguagesSection() {
  const texts = ["Making Projects", "Visualising Code", "Learing Latest Tech"];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let c = counter;
      c === texts.length - 1 ? (c = 0) : c++;
      setCounter(c);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <div className="language-section">
      <Text alginment={Alignment.center} variant={TextVariant.sectionHeading}>
        Advance your career by <br />
        <span className="primary-blue">{texts[counter]}</span>
      </Text>

      <div className="languages">
        <img
          src={require("../../../assets/css-logo-colored.png")}
          alt={"CSS Logo"}
        />
        <img
          src={require("../../../assets/es-logo-colored.png")}
          alt={"ES Logo"}
        />
        <img
          src={require("../../../assets/react-logo-colored.png")}
          alt={"React Logo"}
        />
        <img
          src={require("../../../assets/html-logo-colored.png")}
          alt={"HTML Logo"}
        />
        <img
          src={require("../../../assets/js-logo-colored.png")}
          alt={"Javascript Logo"}
        />
      </div>
    </div>
  );
}

export default LanguagesSection;
