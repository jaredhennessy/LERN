import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/categories">
          <Categories/>
        </Route>
        <Route exact path="/teach/:id">
          <Teach/>
        </Route>
        <Route exact path="/donate">
          <Donate/>
        </Route>
        <Route exact path="/editprofile/:id">
          <EditProfile/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Registration/>
        </Route>
        <Route exact path="/dashboard/:id">
          <Dashboard/>
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
