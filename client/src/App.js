import React from 'react';
import './App.scss';
import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={DeleteWarehouse}/>
      </Switch>
    </Router>
  );
 };
};

export default App;
