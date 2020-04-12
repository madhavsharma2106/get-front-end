import React from "react";
import classNames from "classnames";

import "./Text.scss";

export const TextVariant = {
  subHeadingText: "sub-heading-text",
  subText: "subtext",
  regular: "regular",
  sectionHeading: "section-heading",
  boldHeading: "bold-heading",
  title: "title",
  subTitle: "sub-title",
  highlight: "highlight",
};

export const Alignment = {
  left: "left",
  right: "right",
  center: "center",
};

export const DisplayVariant = {
  inline: "inline",
  noMargin: "no-margin",
};

function Text({
  variant = TextVariant.regular,
  children,
  display,
  alginment,
  style,
}) {
  const classes = classNames([
    `text-${variant}`,
    alginment && `text-${alginment}`,
    display && `text-${display}`,
  ]);

  return (
    <p style={style} className={classes}>
      {children}
    </p>
  );
}

export default Text;
