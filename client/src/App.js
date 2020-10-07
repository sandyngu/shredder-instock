import React from 'react';
import './App.scss';
import DeleteItem from '../src/components/DeleteItem/DeleteItem';
import Header from '../src/components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <DeleteItem />
        </Router>
      </div>
    );
  };
};

export default App;
