import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Books from './Components/Books';
import Checkout from './Components/Checkout';
import ProtectedRoute from './Components/routing/ProtectedRoute';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Books} />
          <ProtectedRoute exact path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
