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
};

export const Alignment = {
  left: "left",
  right: "right",
  center: "center",
};

export const DisplayVariant = {
  inline: "inline",
};

function Text({ variant = TextVariant.regular, children, display, alginment }) {
  const classes = classNames([
    `text-${variant}`,
    alginment && `text-${alginment}`,
    display && `text-${display}`,
  ]);

  return <p className={classes}>{children}</p>;
}

export default Text;
