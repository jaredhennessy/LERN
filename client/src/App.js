import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FileUpload from "./components/FileUpload";
import UserContext from "./UserContext/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  // On launch, check for a logged in user (authenticated token in localstorage)
  useEffect(() => {
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
          user: userResponse.data
        });
      }
    };
    checkLoggedIn();
  }, []);

  // Remove refresh token from database and
  function logout() {
    Axios.delete("/api/logout")
      .then(
        setUserData({
          token: undefined,
          user: undefined
        })
      )
      .catch(err => console.log(err));
    localStorage.setItem("auth-token", "");
    localStorage.setItem("ref-token", "");
  }

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <div className="App">
          <h1>LERN Temp Navbar</h1>
          {userData.user ? (
            <>
              <a href="/fileUpload">File Upload</a>
              <br />
              <a href="/" onClick={logout}>
                Log Out
              </a>
            </>
          ) : (
            <>
              <a href="/login">Login</a>
              <br />
              <a href="/register">Register</a>
              <br />
            </>
          )}

          <Switch>
            <Route exact path="/">
              <h1>Homepage</h1>
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/fileUpload" component={FileUpload} />
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
