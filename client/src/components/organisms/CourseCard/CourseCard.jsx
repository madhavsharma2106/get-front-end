import React from "react";
import Card from "../../atoms/Card/Card";
import "./CourseCard.scss";
import Text, { TextVariant, DisplayVariant } from "../../atoms/Text/Text";
import Button, { ButtonVariant } from "../../atoms/Button/Button";

function CourseCard() {
  return (
    <Card className="course-card">
      <img
        className="video-placeholder"
        src={require("../../../assets/video-placeholder.png")}
        alt="Video Placeholder"
      />
      <div className="text-area">
        <Text variant={TextVariant.title} display={DisplayVariant.inline}>
          Course Title
        </Text>
        <Text variant={TextVariant.subTitle}>Beginner</Text>
        <Text variant={TextVariant.regular}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum
          optio repellat corrupti perspiciatis neque explicabo facilis minima
          ipsum accusamus blanditiis est error ullam doloribus, cum totam
          molestiae excepturi. Hic.
        </Text>
        <Button variant={ButtonVariant.outlined}>Watch Course</Button>
      </div>
    </Card>
  );
}

export default CourseCard;
