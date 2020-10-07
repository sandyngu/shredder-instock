import React from "react";
import "./App.css";
import InventoryList from "./Components/InventoryList/InventoryList";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <InventoryList />
        </Router>
      </div>
    );
  }
}

export default App;
