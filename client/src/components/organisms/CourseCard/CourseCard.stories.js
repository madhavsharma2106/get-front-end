import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import CourseCard from "./CourseCard";

export default {
  component: CourseCard,
  title: "Organisms/CourseCard",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false, source: true },
  },
};

export const Sample = () => {
  return <CourseCard />;
};
