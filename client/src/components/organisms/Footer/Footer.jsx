import React from "react";
import "./Footer.scss";
import Text, { TextVariant } from "../../atoms/Text/Text";
function Footer() {
  return (
    <div className="footer">
      <Text variant={TextVariant.title} style={{ color: "white" }}>
        Get Front End Ltd.
      </Text>
      <Text variant={TextVariant.title} style={{ color: "white" }}>
        contact@getfrontend.com
      </Text>
    </div>
  );
}

export default Footer;
