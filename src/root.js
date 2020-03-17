import React from "react";
import { combineReducers, createStore } from "redux";
import filterReducer from "./store/reducers/filters";
import personsReducer from "./store/reducers/persons";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  persons: personsReducer,
  filter: filterReducer
});

const store = createStore(rootReducer);

const root = props => {
  return <Provider store={store}>{props.children}</Provider>;
};
export default root;
