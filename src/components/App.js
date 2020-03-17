import React from "react";
import "./App.css";
import Layout from "./layout/layout";
import Details from "./Details/Details";
import { Route, Switch } from "react-router-dom";

const App = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path={"/persons/:id"} component={Details} />
      </Switch>
    </div>
  );
};

export default App;
