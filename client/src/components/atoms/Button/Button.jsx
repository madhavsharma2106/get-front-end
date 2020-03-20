import React from "react";
import classNames from "classnames";

import "./Button.scss";

export const ButtonVariant = {
  contained: "contained",
  text: "text",
  outlined: "outlined"
};

const Button = props => {
  const { variant = ButtonVariant.contained, onClick } = props;

  const classes = classNames([`btn-${variant}`, "btn"]);

  return (
    <button onClick={onClick} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
