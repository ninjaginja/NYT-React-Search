import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";


const App = () => (
  <Router>
    <div>
      <Jumbotron>
        <h1>NYT Articles Search</h1>
      </Jumbotron>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);


export default App;
