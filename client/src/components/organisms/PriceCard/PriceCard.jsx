import React from "react";
import "./PriceCard.scss";
import Card from "../../atoms/Card/Card";
import "./PriceCard.scss";
import Text, { TextVariant, DisplayVariant } from "../../atoms/Text/Text";
import Button, { ButtonVariant } from "../../atoms/Button/Button";

function PriceCard() {
  return (
    <Card className="price-card">
      <Text variant={TextVariant.title} display={DisplayVariant.noMargin}>
        Monthly
      </Text>
      <Text variant={TextVariant.regular} display={DisplayVariant.noMargin}>
        All Courses
      </Text>
      <Text variant={TextVariant.highlight}>INR 999/-</Text>
      <Button variant={ButtonVariant.contained}>Choose</Button>
      <Text variant={TextVariant.subText} display={DisplayVariant.noMargin}>
        30 Days money back gaurantee
      </Text>
    </Card>
  );
}

export default PriceCard;
