import React from "react";
import Relax from "./Relax";
// import { Route, Switch, Link } from "react-router-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    // guardamos el identificador del interval para limpiarlo en componentWillUnmount
    this.intervalId = setInterval(this.incrementCounter, 1000);
    // NOTA: guardamos el identificador en un atributo de la clase y
    // no en el estado ya que no queremos pintar el identificador en el DOM
  }
  componentWillUnmount() {
    // limpiamos el interval
    clearInterval(this.intervalId);
  }
  incrementCounter() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }
  render() {
    return (
      <div>
        Contador: {this.state.counter}
        {/* <Relax /> */}
        {/* <li>
          <Link to="./">Counter</Link>
        </li>
        <li>
          <Link to="./Relax">Relax</Link>
        </li>
        <Switch>
          <Route exact path="/" Component={Counter} />
          <Route path="/Relax" Component={Relax} />
        </Switch> */}
      </div>
    );
  }
}

export default Counter;
