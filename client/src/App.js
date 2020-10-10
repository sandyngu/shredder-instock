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
// import AddItem from "./components/AddItem/AddItem";
// import EditItem from "./components/AddItem/EditItem";

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
        </Switch>
      </Router>
    );
  }
}

export default App;
