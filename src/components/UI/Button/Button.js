import React from "react";
import classes from "./Button.module.css";

const Button = props => (
  <button onClick={props.clicked} className={classes.button}>
    {props.Name}
  </button>
);
export default Button;
