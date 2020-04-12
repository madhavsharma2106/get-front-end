import React from "react";
import "./TextInput.scss";

function TextInput({ placeholder, onChange }) {
  return (
    <input
      className="text-input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextInput;
