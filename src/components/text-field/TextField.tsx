import React from "react";
import "./TextField.css";

export const TextField: React.FC<{ id: string; labelText: string; type: "text" | "password" }> = (props) => {
  return (
    <div className="text-field">
      <input type={props.type} id={props.id} placeholder="Some placeholder" />
      <label htmlFor="textField">{props.labelText}</label>
    </div>
  );
};
