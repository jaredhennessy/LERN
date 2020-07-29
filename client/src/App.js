import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Teach from "./pages/Teach";
import Donate from "./pages/Donate";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/UserDashboard";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/categories" component={Categories} />
        {/* <Route exact path="/teach" component={Teach} /> */}
        {/* <Route exact path="/donate" component={Donate} /> */}
        {/* <Route exact path="/editprofile" component={EditProfile} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/registration" component={Registration} /> */}
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </Router>
    );
  }
}

export default App;
