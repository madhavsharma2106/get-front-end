import React from "react";
import "./styles.scss";
import Button, { ButtonVariant } from "../../atoms/Button/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <img
        className="logo"
        src={require("../../../assets/Logo-800-800.png")}
        alt="Logo"
      />
      <div className="nav-items">
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/login"}>Login</Link>
        <Button variant={ButtonVariant.outlined}>Sign Up</Button>
      </div>
    </nav>
  );
}

export default Header;
