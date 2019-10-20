import React, { Component } from "react";

import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
