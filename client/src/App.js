import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventoryList from "./Components/InventoryList/InventoryList";
import WarehousesList from "./Components/WarehousesList/WarehousesList";


class App extends React.Component {
  render() {
    return (

      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <WarehousesList />;
            }}
          />
          <Route
            path="/warehouses"
            component={() => {
              return <WarehousesList />;
            }}
          />
          <Route
            path="/inventories"
            component={() => {
              return <InventoryList />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
