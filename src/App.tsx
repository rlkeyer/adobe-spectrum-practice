import { Provider, defaultTheme } from "@adobe/react-spectrum";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sandbox } from "./Sandbox";

export const App = () => {
  return (
    <Provider theme={defaultTheme}>
      <Router>
        <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/users">
            <div>users</div>
          </Route>
          <Route path="/">
            <Sandbox />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
