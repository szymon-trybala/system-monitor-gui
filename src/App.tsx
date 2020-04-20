import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import InformationSystem from "./components/InformationSystem";
import NetworkAdapter from "./components/NetworkAdapter";
import InforamtionCpu from "./components/InformationCpu";
import InformationRam from "./components/InformationRam"
import InformationDisc from "./components/InformationDisc"
import InformationMonitor from "./components/InformationMonitor"
import Menu from './components/Menu';



const App = () => {
    return (
      <>
      <Menu />
        <div id="page-wrap">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/system" exact render={() => <InformationSystem></InformationSystem>} />
            <Route path="/network/adapter" render={() => <NetworkAdapter></NetworkAdapter>} />
            <Route path="/ram" render={() => <InformationRam></InformationRam>} />
            <Route path="/cpu" render={() => <InforamtionCpu></InforamtionCpu>} />
            <Route path="/disc" render={() => <InformationDisc></InformationDisc>} />
            <Route path="/monitor" render={() => <InformationMonitor></InformationMonitor>} />
          </Switch>
        </div>
        </>
   );
}

export default App;