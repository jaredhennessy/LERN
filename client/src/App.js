import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>LERN Temp Navbar</h1>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
