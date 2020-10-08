import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Header />
      <EditWarehouse />
      <Footer />
      <Switch>
        <div>Happy Wednesday</div>
      </Switch>
    </Router>
  );
 };
};

export default App;
