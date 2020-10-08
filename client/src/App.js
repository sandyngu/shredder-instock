<<<<<<< HEAD
import React from 'react';
import './App.scss';
import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
=======
import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import InventoryList from "./components/InventoryList/InventoryList";
// import WarehousesList from "./components/WarehousesList/WarehousesList";
>>>>>>> development

class App extends React.Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route path='/warehouses/delete-warehouse' component={DeleteWarehouse}/>
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
 };
};

export default App;
