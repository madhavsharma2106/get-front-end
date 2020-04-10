import React from "react";
import CourseCard from "../../organisms/CourseCard/CourseCard";
import Text, { Alignment, TextVariant } from "../../atoms/Text/Text";
import Button, { ButtonVariant } from "../../atoms/Button/Button";

function CoursesSection() {
  return (
    <div className="courses-section">
      <Text alginment={Alignment.center} variant={TextVariant.sectionHeading}>
        Courses
      </Text>
      <div className="courses">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <Button variant={ButtonVariant.contained}>Browse Courses</Button>
    </div>
  );
}

export default CoursesSection;
