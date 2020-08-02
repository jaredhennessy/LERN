import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Teach from "./pages/Teach";
import Donate from "./pages/Donate";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Dashboard from "./pages/UserDashboard";
import Navbar from "./components/Navbar";
import Axios from "axios";
import Register from "./pages/Register";
import FileUpload from "./components/FileUpload";
import UserContext from "./UserContext/UserContext";
import PageFooter from "./components/PageFooter";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    _id: undefined
  });

  // On launch, check for a logged in user (authenticated token in localstorage)
  useEffect(() => {
    console.log("App useEffect")
    const checkLoggedIn = async () => {
      let tokenLocal = localStorage.getItem("auth-token");
      if (tokenLocal === null) {
        localStorage.setItem("auth-token", "");
        tokenLocal = "";
      }
      const tokenResponse = await Axios.post("/api/users/checkToken", null, {
        headers: { authorization: tokenLocal }
      });

      // If there is a logged in user, save the token and user in App state
      if (tokenResponse.data) {
        const userResponse = await Axios.get("/api/users", {
          headers: { authorization: "Bearer " + tokenLocal }
        });
        setUserData({
          token: tokenLocal,
          user: userResponse.data.username,
          _id: userResponse.data._id
        });
      }
    };
    checkLoggedIn();
  }, []);

  console.log("App render")

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/fileUpload" component={FileUpload} />
            <Route exact path="/about" component={About} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/teach/:id" component={Teach} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/editProfile/:id" component={EditProfile} />
            <Route exact path="/users/:id" component={Dashboard} />
          </Switch>
          <PageFooter />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
