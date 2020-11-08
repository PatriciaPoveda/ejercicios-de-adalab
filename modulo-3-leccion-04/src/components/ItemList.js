import React from "react";

class ItemList extends React.Component {
  render() {
    let html = [];
    for (let i = 0; i < this.props.arrayIt.length; i++) {
      html.push(<li key={i}>{this.props.arrayIt[i].name}</li>);
    }
    return html;
  }
}
export default ItemList;
