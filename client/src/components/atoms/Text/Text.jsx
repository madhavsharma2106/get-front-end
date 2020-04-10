import React from "react";
import classNames from "classnames";

import "./Text.scss";

export const TextVariant = {
  subHeadingText: "sub-heading-text",
  subText: "subtext",
  regular: "regular",
  sectionHeading: "section-heading",
  boldHeading: "bold-heading"
};

export const Alignment = {
  left: "left",
  right: "right",
  center: "center"
};

function Text({ variant, children, alginment = Alignment.left }) {
  const classes = classNames([`text-${variant}`, `text-${alginment}`]);

  return <p className={classes}>{children}</p>;
}

export default Text;
