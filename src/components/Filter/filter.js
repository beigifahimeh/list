import React, { useState } from "react";
import { connect } from "react-redux";
import * as action from "../../store/actions/index";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./filter.module.css";

const Filter = props => {
  const [filterForm, setFilterFrom] = useState({
    ageFilter: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "all Years", displayValue: "all " },
          { value: "10-15", displayValue: "10-15" },
          { value: "15-25", displayValue: "15-25" },
          { value: "over 30", displayValue: "over 30" }
        ]
      },
      value: "all Years",
      label: "Age"
    },
    isActivated: {
      elementType: "input",
      elementConfig: {
        type: "checkbox"
      },
      value: false,
      label: "Active Person"
    }
  });
  const inputChangedHandler = (event, inputIdentifier) => {
    const updateFilterForm = { ...filterForm };
    const updateFilterElement = { ...filterForm[inputIdentifier] };
    if (updateFilterElement.elementConfig.type === "checkbox") {
      updateFilterElement.value = !updateFilterElement.value;
    } else {
      updateFilterElement.value = event.target.value;
    }
    updateFilterForm[inputIdentifier] = updateFilterElement;
    setFilterFrom(updateFilterForm);
  };
  const submitHandler = event => {
    event.preventDefault();
    const newFilter = {
      age: filterForm.ageFilter.value,
      isActivated: filterForm.isActivated.value
    };
    props.submitFilter(newFilter);
  };
  const filterElementArray = [];
  for (let key in filterForm) {
    filterElementArray.push({
      id: key,
      config: filterForm[key]
    });
  }
  let form = (
    <form className={classes.form} onSubmit={submitHandler}>
      {filterElementArray.map(element => (
        <Input
          label={element.id}
          name={element.config.label}
          key={element.id}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          changed={event => inputChangedHandler(event, element.id)}
        ></Input>
      ))}
      <Button clicked={submitHandler} Name="Filter"></Button>
    </form>
  );
  return <div>{form}</div>;
};
const mapDispatchToProps = dispatch => {
  return {
    submitFilter: value => dispatch(action.submitFilter(value))
  };
};

export default connect(null, mapDispatchToProps)(Filter);
