import React from "react";
import "./App.scss";
import Madre from "./Madre";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Madre
          story1='Estando por la mañana una madre haciendo sus cosas, de repente se dijo a
          si misma "ostras, esta tarde viene la profesora particular de mi hija
          y tengo que pagarla" '
          story2='Así que llamó a su hija y le dijo: "Te aviso de que esta tarde viene tu
          profesora y tengo que pagar la clase" '
        ></Madre>
      </div>
    );
  }
}

export default App;
