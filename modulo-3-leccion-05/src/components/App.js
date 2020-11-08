import React from "react";
import "./App.scss";
import CitySelector from "./CitySelector";
import OnionHater from "./OnionHater";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <OnionHater />
        <CitySelector />
      </div>
    );
  }
}

export default App;
