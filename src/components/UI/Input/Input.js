import React from "react";
import classes from "./Input.module.css";

const Input = props => {
  let inputClasses = [classes.slider, classes.round];
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <div>
          <label>{props.name} </label>
          <label className={classes.switch}>
            <input onClick={props.changed} type="checkbox" />
            <span className={inputClasses.join(" ")} />
          </label>
        </div>
      );
      break;
    case "select":
      inputElement = (
        <select className={classes.customSelect} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      break;
  }
  return <div className={classes.div}>{inputElement}</div>;
};

export default Input;
