import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }
  handlerChange(ev) {
    const text = ev.target.value;
    if (text.includes("cebolla")) {
      return alert("ODIO LA CEBOLLA");
    }
  }
  render() {
    return (
      <textarea rows="8" cols="80" onChange={this.handlerChange}></textarea>
    );
  }
}

export default OnionHater;
