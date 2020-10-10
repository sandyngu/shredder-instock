import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";
import WarehousesList from "./components/WarehousesList/WarehousesList";
// import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
// import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";
// import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
// import ItemDetails from "./components/ItemDetails/ItemDetails";
import AddItem from "./components/AddItem/AddItem";
<<<<<<< HEAD
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
// import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";
=======
import EditItem from "./components/EditItem/EditItem";
>>>>>>> development

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
          {/* <Route
            path="/warehouses/:id"
            component={() => {
              return <WarehouseInventory />;
            }}
<<<<<<< HEAD
          /> */}
          {/* <Route
            path="/warehouses/edit-warehouse"
=======
          />
          <Route
            path="/warehouses/add-warehouse"
>>>>>>> development
            component={() => {
              return <AddNewWarehouse />;
            }}
          /> */}
          <Route
            path="/warehouses/edit-warehouse"
            component={() => {
              return <EditWarehouse />;
            }}
          />
          {/* <Route
            path="/inventories/:id"
            component={() => {
              return <ItemDetails />;
            }}
          /> */}
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
        </Switch>
      </Router>
    );
  }
}

export default App;
