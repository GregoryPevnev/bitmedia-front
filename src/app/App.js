import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import Statistic from "./containers/Statistic";
import Details from "./containers/Details";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Statistic} exact />
      <Route path="/users/:id" component={Details} exact />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;