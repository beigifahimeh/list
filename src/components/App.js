import React from "react";
import "./App.css";
import Layout from "./layout/layout";
import Details from "./Details/Details";
import { Route, Switch } from "react-router-dom";

const App = props => {
  return (
    <div>
      <Switch>
        <Route path="/list" exact component={Layout} />
        <Route path={"/list/:id"} component={Details} />
      </Switch>
    </div>
  );
};

export default App;
