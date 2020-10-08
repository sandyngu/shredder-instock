import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import InventoryList from "./components/InventoryList/InventoryList";
// import WarehousesList from "./components/WarehousesList/WarehousesList";
import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';
import Header from "./components/Header/Header";
import './App.scss';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Header />
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
