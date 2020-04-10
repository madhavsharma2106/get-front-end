import React from "react";
import "./Card.scss";
import classNames from "classnames";

function Card({ children, className }) {
  const classes = classNames(["card", className]);

  return <div className={classes}>{children}</div>;
}

export default Card;
