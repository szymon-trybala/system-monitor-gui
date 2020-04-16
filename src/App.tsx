import * as React from "react";
import { Component } from "react";
import { push as Menu } from "react-burger-menu";
import { NavLink, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import InformationSystem from "./components/InformationSystem";
import NetworkAdapter from "./components/NetworkAdapter";
import InforamtionCpu from "./components/InformationCpu";
import InformationRam from "./components/InformationRam"
import InformationDisc from "./components/InformationDisc"
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
          <NavLink to="/network/adapter" className="menu-item">
            Informacje o adapterze sieciowym
          </NavLink>
          <NavLink to="/ram" className="menu-item">
            Informacje o RAM
          </NavLink>
          <NavLink to="/cpu" className="menu-item">
            Informacje o CPU
          </NavLink>
          <NavLink to="/disc" className="menu-item">
            Informacje o dysku
          </NavLink>

        </Menu>

        <div id="page-wrap">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/system" exact render={() => <InformationSystem></InformationSystem>} />
            <Route path="/network/adapter" render={() => <NetworkAdapter></NetworkAdapter>} />
            <Route path="/ram" render={() => <InformationRam></InformationRam>} />
            <Route path="/cpu" render={() => <InforamtionCpu></InforamtionCpu>} />
            <Route path="/disc" render={() => <InformationDisc></InformationDisc>} />

          </Switch>
        </div>
      </>
    );
  }
}
