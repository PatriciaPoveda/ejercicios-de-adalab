import React from "react";
import "./App.scss";
import Madre from "./Madre";

class AppAbuela extends React.Component {
  render() {
    return (
      <div className="App">
        <Madre>
          Estando una mañana una madre haciendo sus cosas, de repente se dijo a
          si misma -Ostras, esta tarde viene la profesora particular de mi hija
          y tengo que pagarla (pagarLaClase)
        </Madre>
      </div>
    );
  }
}

export default AppAbuela;
