import React from "react";
import CourseCard from "../../organisms/CourseCard/CourseCard";
import Text, { Alignment, TextVariant } from "../../atoms/Text/Text";

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
    </div>
  );
}

export default CoursesSection;
