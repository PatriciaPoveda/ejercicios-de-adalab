import React from "react";

class CitySelector extends React.Component {
  render() {
    return (
      <form action="" method="POST">
        <label htmlfor="size">Selector de ciudades</label>
        <select id="size" name="size">
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
