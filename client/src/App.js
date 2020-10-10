import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";
import WarehousesList from "./components/WarehousesList/WarehousesList";
import AddItem from "./components/AddItem/AddItem";

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
          <Route
            path="/inventories/additem"
            component={() => {
              return <AddItem/>;
            }}
            />
        </Switch>
      </Router>
    );
  }
}

export default App;
