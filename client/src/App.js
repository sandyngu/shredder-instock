import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventoryList from "./Components/InventoryList/InventoryList";
import WarehousesList from "./Components/WarehousesList/WarehousesList";
import AddNewWarehouse from "./Components/AddNewWarehouse/AddNewWarehouse";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <AddNewWarehouse />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <WarehousesList />;
            }}
          />
          <Route
            exact path="/warehouses"
            component={() => {
              return <WarehousesList />;
            }}
          />
          <Route
            exact path="/inventories"
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
