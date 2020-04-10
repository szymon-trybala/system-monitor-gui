import * as React from "react";
import { Component } from "react";
import { push as Menu } from "react-burger-menu";
import { NavLink, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import "./styles/burger-menu.css";

export default class App extends Component {
  public render() {
    return (
      <>
        <Menu pageWrapId={"page-wrap"} outerContainerId={"app"}>
          <NavLink to="/" className="menu-item">
            Strona powitalna
          </NavLink>
          <NavLink to="/system" className="menu-item">
            Informacje o systemie
          </NavLink>
        </Menu>

        <div id="page-wrap">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/system" exact render={() => <p>Nie masz systemu biedaku</p>} />
          </Switch>
        </div>
      </>
    );
  }
}
