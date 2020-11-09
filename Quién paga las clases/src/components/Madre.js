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
          story3='Y la hija le contestó: "Gracias por decírmelo, mama". '
          story4=' "Te avisaré cuando haya dado la clase para que pagues a la profesora". '
          story5="Entonces, una vez que dió la clase la hija,"
          story6="llamó a su madre y le recordó que tenía que pagar la clase."
        />
        <p>{this.props.story7}</p>
      </div>
    );
  }
}

export default Madre;
