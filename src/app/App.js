import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Page from "./layout/Page";
import Home from "./containers/Home";
import Table from "./containers/UsersTable";
import Details from "./containers/UserDetails";

const App = () => (
  <Page>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/users" component={Table} exact />
        <Route path="/users/:id" component={Details} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Page>
);

export default App;