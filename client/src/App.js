import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import EditWarehouse from './components/editWarehouse/EditWarehouse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Header />
      <EditWarehouse />
      <Switch>
        <div>Hello World</div>
      </Switch>
    </Router>
  );
 };
};

export default App;
