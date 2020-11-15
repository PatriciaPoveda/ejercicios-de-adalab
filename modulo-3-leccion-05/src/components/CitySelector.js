import React from "react";

class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChangeCity = this.handlerChangeCity.bind(this);
  }
  handlerChangeCity(ev) {
    const text = ev.target.value;
    return alert(`Tu destino es viajar a: ${text}`);
  }
  render() {
    return (
      <form action="" method="POST">
        <label htmlfor="size">Selector de ciudades</label>
        <select id="size" name="size" onChange={this.handlerChangeCity}>
          <option value="Selecciona Ciudad">Selecciona Ciudad</option>
          <option value="Madrid">Madrid</option>
          <option value="Berlín">Berlín</option>
          <option value="Roma">Roma</option>
          <option value="Praga">Praga</option>
          <option value="París">París</option>
          <option value="Lisboa">Lisboa</option>
          <option value="Londres">Londres</option>
        </select>
      </form>
    );
  }
}

export default CitySelector;
