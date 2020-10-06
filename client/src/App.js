import React from "react";
import "./App.css";
import InventoryList from "./Components/InventoryList/InventoryList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InventoryList />
      </div>
    );
  }
}

export default App;
