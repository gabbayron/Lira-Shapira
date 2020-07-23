import React from 'react';
import './App.css';
import UserPage from './pages/UserPage';
import MakeTransaction from './pages/MakeTransaction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/makeTransaction">
          <MakeTransaction />
        </Route>
        <Route path="/">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
