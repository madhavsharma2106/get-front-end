import React from "react";

import { withInfo } from "@storybook/addon-info";
import Card from "./Card";
import { text } from "@storybook/addon-knobs";

export default {
  component: Text,
  title: "Atoms/Card",
  decorators: [withInfo],
  parameters: {
    info: {
      inline: true,
      header: false,
      source: true,
    },
  },
};

export const Sample = () => {
  const sample = text("text", "insert div or element");

  return (
    <Card>
      <div>{sample}</div>
    </Card>
  );
};
