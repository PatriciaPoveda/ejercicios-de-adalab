import React from "react";
import Hija from "./Hija";

class Madre extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  pagarLaClase() {
    console.log("La madre pagó a la profesora");
  }
  render() {
    return (
      <div className="Madre">
        <p>
          {this.props.story1}
          <strong>
            (función <em>pagarLaClase</em> en Madre.js)
          </strong>
        </p>
        <p>
          {this.props.story2}
          <strong>
            (pasa la función <em>pagarClase</em> en Madre.js)
          </strong>
        </p>
        <Hija
          pagarClase={this.pagarLaClase}
          story3={this.props.story3}
          story4={this.props.story4}
          story5={this.props.story5}
          story6={this.props.story6}
        />
        {/* <p>{this.props.story8}</p> */}
      </div>
    );
  }
}

export default Madre;
