import React from "react";
import classNames from "classnames";

import "./Text.scss";

export const TextVariant = {
  latoLight: "lato-light"
};

function Text({ variant, children }) {
  const classes = classNames([`text-${variant}`]);

  return <p className={classes}>{children}</p>;
}

export default Text;
