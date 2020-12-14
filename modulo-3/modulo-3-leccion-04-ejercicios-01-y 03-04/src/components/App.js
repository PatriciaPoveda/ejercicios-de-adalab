import React from "react";
import "./App.scss";
import ItemList from "./ItemList";
const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    // description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
];
class App extends React.Component {
  render() {
    const filterPrice = arrayOfItems.filter((array) => {
      return array.price < 10;
    });
    const htmlCode = filterPrice.map((array, i) => {
      return (
        <li className="App" key={i}>
          <ItemList
            name={array.name}
            description={array.description}
            price={array.price}
          />
        </li>
      );
    });
    return <ul>{htmlCode}</ul>;
  }
}

export default App;
