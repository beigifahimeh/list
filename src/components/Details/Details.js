import React from "react";
import classes from "./Details.module.css";
import { connect } from "react-redux";
import Button from "../UI/Button/Button";

const Details = props => {
  let person = props.persons.find(
    element => element.index === Number(props.match.params.id)
  );

  const clickHandler = () => {
    props.history.push({ pathname: "/list" });
  };
  return (
    <ul className={classes.ul}>
      <li>
        <h3>{person.name}</h3>
        <p>
          <strong>phone :</strong> {person.phone}
        </p>
        <p>
          <strong>email :</strong> {person.email}
        </p>
        <p>
          <strong>company :</strong> {person.company}
        </p>
        <p>
          <strong>address :</strong> {person.address}
        </p>
        <p>
          <strong>registered :</strong> {person.registered}
        </p>
        <Button Name="back to last page" clicked={clickHandler} />
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    persons: state.persons.data
  };
};

export default connect(mapStateToProps)(Details);
