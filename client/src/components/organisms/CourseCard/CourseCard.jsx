import React from "react";
import Card from "../../atoms/Card/Card";
import "./CourseCard.scss";

function CourseCard() {
  return (
    <Card className="course-card">
      <img
        className="video-placeholder"
        src={require("../../../assets/video-placeholder.png")}
        alt="Video Placeholder"
      />
    </Card>
  );
}

export default CourseCard;
