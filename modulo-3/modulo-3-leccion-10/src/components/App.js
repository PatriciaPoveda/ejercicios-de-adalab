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
      genderFilter: "",
      filterList: ProfilesFullList,
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(data) {
    console.log(data);
    const { id, value } = data;
    if (id === "name") {
      this.setState(
        {
          nameFilter: value,
        },
        () => {
          this.filterData();
        }
      );
    } else if (id === "gender") {
      this.setState(
        {
          genderFilter: value,
        },
        () => {
          this.filterData();
        }
      );
    }
  }
  filterData() {
    const filterNames = ProfilesFullList.filter((person) =>
      person.name.toUpperCase().includes(this.state.nameFilter.toUpperCase())
    ).filter(
      (person) =>
        this.state.genderFilter === "all" ||
        person.gender === this.state.genderFilter
    );
    this.setState({
      filterList: filterNames,
    });
  }
  render() {
    return (
      <div className="App">
        <Header number="3.10" lesson="Arquitectura" title="LinkedIn" />
        <main className="container">
          <Filters handleFilter={this.handleFilter} />
          <UserList list={this.state.filterList} />
        </main>
      </div>
    );
  }
}

export default App;
