import React from "react";
import PropTypes from "prop-types";

class ItemList extends React.Component {
  render() {
    return (
      <section>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
      </section>
    );
  }
}
ItemList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
ItemList.defaultProps = {
  description: "no hay descripción",
};
export default ItemList;
