import React from "react";

// import './';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state = {
      name: "Psicosis",
      description: "",
    };
  }
  handleChange(event) {
    this.setState({
      name: event.currentTarget.value,
    });
  }
  handleChange2(event) {
    this.setState({
      description: event.currentTarget.value,
    });
  }

  render() {
    console.log(this.state.description);
    return (
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="text">Descripción</label>
        <textarea
          id="text"
          type="text"
          value={this.state.description}
          onChange={this.handleChange2}
        ></textarea>
        <select>
          <option value="Elige idioma">Elige idioma</option>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
      </form>
    );
  }
}
export default Form;
