import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inventories from "./components/Inventories/Inventories";
import WarehousesList from "./components/WarehousesList/WarehousesList";
import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";

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
            exact
            path="/warehouses"
            component={() => {
              return <WarehousesList />;
            }}
          />
          <Route
            exact
            path="/inventories"
            render={(routerProps) => {
              return <Inventories {...routerProps} />;
            }}
          />
          <Route
            path="/inventories/:id"
            render={(routeProps) => {
              return <WarehouseInventory {...routeProps} />;
            }}
          />
          <Route
            path="/warehouses/:id"
            render={(routeProps) => {
              return <WarehouseInventory {...routeProps} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
