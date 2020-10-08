import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddNewWarehouse from './components/AddNewWarehouse/AddNewWarehouse';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Header />
      <AddNewWarehouse />
      <Footer />
      <Switch>
        <div>Happy Wednesday</div>
      </Switch>
    </Router>
    );
  }
}

export default App;
