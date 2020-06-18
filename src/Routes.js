import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Contents from "./pages/Contents/Contents";
import ForYou from "./pages/ForYou/ForYou";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/galleries/:id" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contents/:id" component={Contents} />
          <Route exact path="/for_you" component={ForYou} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
