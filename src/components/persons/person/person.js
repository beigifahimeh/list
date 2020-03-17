import React from "react";
import classes from "./person.module.css";
import Button from "../../UI/Button/Button";

const person = props => {
  return (
    <ul className={classes.ul}>
      <li>
        <h3>{props.Name}</h3>
        <p>
          <strong>phone :</strong> {props.phone}
        </p>
        <p>
          <strong>email :</strong> {props.email}
        </p>
      </li>
      <Button Name="click to visit more" clicked={props.click} />
    </ul>
  );
};
export default person;
