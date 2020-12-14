import React from "react";
import "./App.scss";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handlerChange = this.handlerChange.bind(this);
  }
  handlerChange(ev) {
    const text = ev.target.value;
    const container = document.querySelector(".container");
    // if (text.includes("cebolla")) {
    //   return alert("ODIO LA CEBOLLA");
    // }
    if (text.includes("cebolla")) {
      this.forceUpdate();
      this.isHating = true;
      console.log(this.isHating);
      container.classList.add("color");
    } else {
      container.classList.remove("color");
      this.isHating = false;
      console.log(this.isHating);
    }
  }
  render() {
    return (
      <textarea
        className="container"
        rows="8"
        cols="80"
        onChange={this.handlerChange}
      ></textarea>
    );
  }
}

export default OnionHater;
