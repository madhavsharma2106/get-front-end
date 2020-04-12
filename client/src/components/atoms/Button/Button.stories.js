import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { includeVariants } from "../../../utils";
import Button, { ButtonVariant } from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false, source: true },
  },
};

export const Sample = () => {
  const sample = text("Button", "Click here");
  const variant = select(
    "Variant",
    includeVariants(ButtonVariant),
    ButtonVariant.regular
  );

  return <Button variant={variant}>{sample}</Button>;
};
