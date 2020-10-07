import React from "react";
import "./App.scss";
import InventoryList from "./Components/InventoryList/InventoryList";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <InventoryList />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
