import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
<<<<<<< HEAD
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
=======
import Footer from './components/Footer/Footer';
>>>>>>> development
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <EditWarehouse />
=======
      <Footer />
>>>>>>> development
      <Switch>
        <div>Happy Wednesday</div>
      </Switch>
    </Router>
  );
 };
};

export default App;
