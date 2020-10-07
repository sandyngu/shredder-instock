import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Header />
      <Switch>
        <div>Hello World</div>
      </Switch>
    </Router>
  );
 };
};

export default App;
