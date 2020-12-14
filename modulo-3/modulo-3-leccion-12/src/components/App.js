import React from "react";
import "./App.scss";
import { Route, Switch, Link } from "react-router-dom";
import Counter from "./Counter";
import Relax from "./Relax";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        {/* <Relax /> */}
        <li>
          <Link to="/counter" target="_blank">
            Counter
          </Link>
        </li>
        <li>
          <Link to="/relax">Relax</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route path="/relax" component={Relax} />
        </Switch>
      </div>
    );
  }
}

export default App;
