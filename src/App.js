import React from 'react';
import { Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import "./App.css";

import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Page404 from "./components/page404/Page404";
import Jeopardy from "./components/jeopardy";

function App() {
  return (
    <Router>

      <div className="App">

        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="james" />}

          />


          <Route
            exact
            path="/welcome/:name"
            render={(props) => <Welcome {...props} name={props.match.params.name} />}
          />


          <Route
            exact
            path="/clock"
            component={Clock}
          />

          <Route
            exact
            path="/contact"
            component={Contact}
          />

          <Route
            exact
            path="/jeopardy"
            component={Jeopardy}
          />

          <Route
            component={Page404}
          />

        </Switch>

      </div>
    </Router>
  );


}

export default App;
