import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WarehousesList from './components/WarehousesList/WarehousesList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={WarehousesList}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
