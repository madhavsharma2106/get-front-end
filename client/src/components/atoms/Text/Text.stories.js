import React from "react";
import Text, { TextVariant, Alignment, DisplayVariant } from "./Text";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { includeVariants } from "../../../utils";

export default {
  component: Text,
  title: "Atoms/Text",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false, source: true },
  },
};

export const Sample = () => {
  const sample = text("text", "Sample Text");
  const variant = select(
    "Variant",
    includeVariants(TextVariant),
    TextVariant.regular
  );

  const alginment = select(
    "Alignment",
    includeVariants(Alignment),
    Alignment.left
  );

  const display = select("Display", includeVariants(DisplayVariant));

  return (
    <Text variant={variant} alginment={alginment} display={display}>
      {sample}
    </Text>
  );
};
