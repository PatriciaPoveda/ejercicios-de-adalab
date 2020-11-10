import React from "react";
import Madre from "./Madre";

class Abuela extends React.Component {
  pagaLaClaseAbuela() {
    console.log("La abuela pagó a la profesora");
  }

  render() {
    return (
      <div className="App">
        {" "}
        <Madre
          story1={this.props.story1}
          story2={this.props.story2}
          story3={this.props.story3}
          story4={this.props.story4}
          story5={this.props.story5}
          story6={this.props.story6}
          pagaClaseAbuela={this.pagaLaClaseAbuela}
          // story8="La madre recibió esta información con mucha alegría"
        ></Madre>
        <p>
          {this.props.story7}
          <strong>
            (función <em>pagaLaClaseAbuela</em> en Abuela.js)
          </strong>
          <strong>
            (pasa la función <em>pagaClaseAbuela</em> en Abuela.js)
          </strong>
        </p>
        {/* <Madre story8="La madre recibió esta información con mucha alegría"></Madre> */}
      </div>
    );
  }
}

export default Abuela;
