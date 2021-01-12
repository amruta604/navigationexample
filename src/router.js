import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Links from "./links";
import Mobile from "./pages/mobile";
import Laptop from "./pages/laptop";
import Hp from "./hp";
import Dell from "./dell";
import Apple from "./apple";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Links /></Route>
        <Route path="/Mobile"><Mobile /></Route>
        <Route path="/Laptop"><Laptop /></Route>
        <Route path="/Hp"><Hp /></Route>
        <Route path="/Dell"><Dell /></Route>
        <Route path="/Apple"><Apple /></Route>
      </Switch>
    </Router>
  );
}

export default Routes;