import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WarehousesList from './components/WarehousesList/WarehousesList';
import './App.scss';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/warehouses' exact component={WarehousesList}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
 };
};

export default App;
