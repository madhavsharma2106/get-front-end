import React from "react";
import Text, { TextVariant } from "../../atoms/Text/Text";
import Button, { ButtonVariant } from "../../atoms/Button/Button";
import TextInput from "../../molecules/TextInput/TextInput";

function MailList() {
  return (
    <div className="footer-section">
      <Text variant={TextVariant.regular}>
        Get Access to an exclusive weekly email about all things Front End
      </Text>
      <div>
        <TextInput placeholder="yourname@gmail.com" />
        <Button variant={ButtonVariant.outlined}>Subscribe</Button>
      </div>
    </div>
  );
}

export default MailList;
