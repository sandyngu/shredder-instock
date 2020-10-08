import React from "react";
import "./App.scss";
import InventoryList from "./components/InventoryList/InventoryList";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";

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
