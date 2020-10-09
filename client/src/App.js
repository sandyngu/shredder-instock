import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import InventoryList from "./Components/InventoryList/InventoryList";
// import WarehousesList from "./components/WarehousesList/WarehousesList";
import AddItem from './components/AddItem/AddItem';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <AddItem />
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
        <Footer />
      </Router>
    );
  }
}

export default App;
