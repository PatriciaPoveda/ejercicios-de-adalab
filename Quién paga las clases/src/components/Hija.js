import React from "react";
import "./App.scss";

class Hija extends React.Component {
  constructor(porps) {
    super(porps);
    this.llamarAMama = this.llamarAMama.bind(this);
    this.state = {
      styling: "hidden",
    };
  }
  llamarAMama() {
    this.props.pagarClase();

    this.setState({
      styling: "show",
    });
  }
  render() {
    return (
      <>
        <p>
          {this.props.story3}
          <strong>
            (recoge la función <em>pagarClase</em> en las props del constructor
            en Hija.js)
          </strong>
          {this.props.story4}
          {this.props.story5}
        </p>

        <button onClick={this.llamarAMama}>Dar la clase</button>
        <div className={`${this.state.styling}`}>
          <p>
            <strong>
              (evento: al hacer click en botón llama a la función{" "}
              <em>llamarAMama</em> en Hija.js)
            </strong>
          </p>
          <p>
            {this.props.story6}{" "}
            <strong>
              (llama a la función <em>pagarClase</em> en Madre.js)
            </strong>
          </p>
          <p>Y ahora mira la consola</p>
        </div>
      </>
    );
  }
}
export default Hija;
