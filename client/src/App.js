import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";
import WarehousesList from "./components/WarehousesList/WarehousesList";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";
// import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddItem from "./components/AddItem/AddItem";
import EditItem from "./components/EditItem/EditItem";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Inventories from './components/Inventories/Inventories';

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
          {/* <Route
            exact path="/inventories"
            component={() => {
              return <InventoryList />;
            }}
          /> */}
          <Route
            exact path="/inventories"
            component={() => {
              return <Inventories />;
            }}
          />
          <Route
            exact path="/inventories/:id/:warehouseName"
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
          {/* <Route
            path="/warehouses/edit-warehouse"
            component={() => {
              return <EditWarehouse />;
            }}
          /> */}
          <Route
            exact path='/warehouses/:id'
            render={(routeProps) => {
              return <WarehouseInventory {...routeProps} />;
            }} 
          />
          <Route
            exact path='/inventories/:id'
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
