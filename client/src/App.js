import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inventories from "./components/Inventories/Inventories";
import WarehousesList from "./components/WarehousesList/WarehousesList";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import AddItem from "./components/AddItem/AddItem";
import EditItem from "./components/EditItem/EditItem";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
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
            exact path="/inventories/edititem/:id/:warehouseName"
            render={(routeProps) => {
              return <EditItem {...routeProps}/>;
            }}
          />
          <Route
            path="/warehouses/add-warehouse"
            component={() => {
              return <AddNewWarehouse />;
            }}
          />
          <Route
            path="/warehouses/edit-warehouse"
            component={() => {
              return <EditWarehouse />;
            }}
          />
          <Route
            path="/inventories/:id/:warehouseName"
            render={(routeProps) => {
              return <ItemDetails {...routeProps}/>;
            }}
          />
          <Route
            path="/inventories/add-item"
            component={() => {
              return <AddItem />;
            }}
          />
          <Route
            path="/inventories/edit-item"
            component={() => {
              return <EditItem />;
            }}
          />
          <Route

            path="/inventories/:id"

            // exact path="/inventories/:id/:warehouseName"

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
