import React from "react";
import Person from "./person/person";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const filterByAge = ({ age }, op) => {
  const opMap = {
    "10-15": age >= 10 && age <= 15,
    "15-25": age > 15 && age <= 25,
    "all Years": age > 0 && age < 100,
    "over 30": age >= 30
  };
  return opMap[op];
};
const filterByIsActive = ({ isActive }, op) => {
  return isActive === op;
};

const Persons = props => {
  const personsFilter = props.persons.filter(element => {
    return (
      filterByAge(element, props.ageFilter) &&
      filterByIsActive(element, props.isActive)
    );
  });
  const customerSelectHandler = id => {
    props.history.push({ pathname: "/persons/" + id });
  };
  let out = props.filter ? personsFilter : props.persons;
  const personsList = out.map(element => (
    <Person
      key={element.index}
      Name={element.name}
      description={element.about}
      email={element.email}
      phone={element.phone}
      age={element.age}
      click={() => customerSelectHandler(element.index)}
    />
  ));
  console.log(props);
  return <div>{personsList}</div>;
};
const mapStateToProps = state => {
  return {
    filter: state.filter.filter,
    persons: state.persons.data,
    ageFilter: state.filter.age,
    isActive: state.filter.isActive
  };
};

export default withRouter(connect(mapStateToProps)(Persons));
