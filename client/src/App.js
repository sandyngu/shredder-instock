import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import InventoryList from "./components/InventoryList/InventoryList";
// import WarehousesList from "./components/WarehousesList/WarehousesList";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        {/* <Switch>
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
          /> */}
        <div>Happy Wednesday</div>
        {/* </Switch> */}
      </Router>
    );
  }
}

export default App;
