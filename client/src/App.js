import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddItem from './components/AddItem/AddItem';


class App extends React.Component {
  render() {
  return (
    <Router>
      <Header />
      <AddItem />
      <Switch>
        <div>Happy Wednesday</div>
      </Switch>
    </Router>
  );
 };
};

export default App;
