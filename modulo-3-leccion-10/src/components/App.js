import React from "react";
import "./App.scss";
import Filters from "./Filters";
import Header from "./Header";
import ProfilesFullList from "../data/profiles.json";
import UserList from "./UserList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: "",
      filterList: ProfilesFullList,
    };
  }
  render() {
    const handleFilter = (data) => {
      console.log(data);
      const { id, value } = data;
      if (id === "name") {
        this.setState({
          nameFilter: value,
        });
      }
      const filterNames = ProfilesFullList.filter((person) =>
        person.name.toUpperCase().includes(value.toUpperCase())
      );
      this.setState({
        filterList: filterNames,
      });
    };

    return (
      <div className="App">
        <Header number="3.10" lesson="Arquitectura" title="LinkedIn" />
        <main className="container">
          <Filters handleFilter={handleFilter} />
          <UserList list={this.state.filterList} />
        </main>
      </div>
    );
  }
}

export default App;
