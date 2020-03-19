import React from "react";
import classNames from "classnames";

import "./styles.scss";

export const ButtonVariant = {
  contained: "contained",
  text: "text",
  outlined: "outlined"
};

const Button = props => {
  const { variant, onClick } = props;

  const classes = classNames([`btn-${variant}`, "btn"]);

  return (
    <button onClick={onClick} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
