import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Screens from "../screens";
import NotFound from "../screens/Error/NotFound";
let history = createBrowserHistory();
const Routes = () => {
  return (
    <Router history={history}>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Screens} />
          <Route
            render={() => {
              return <NotFound />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
