import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from './pages/UserPage';
import MakeTransaction from './pages/MakeTransaction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
