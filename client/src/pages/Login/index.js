import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../UserContext/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    Axios.post("/api/users/login", {
      username: username,
      password: password
    })
      .then(res => {
        alert(`Welcome back ${res.data.username}`);
        setUserData({
          user: res.data.username,
          token: res.data.accessToken
        })
        localStorage.setItem("auth-token", res.data.accessToken);
        localStorage.setItem("ref-token", res.data.refreshToken);
        history.push("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="usernameInput">Username:</label><br />
        <input type="text" id="usernameInput" name="usernameInput" onChange={e => setUsername(e.target.value)}/><br />
        <label htmlFor="passwordInput">Password</label><br />
        <input type="text" id="passwordInput" name="passwordInput" type="password" onChange={e => setPassword(e.target.value)}/> <br />
        <input type="submit" />
      </form>
    </div>
  )
}


export default Login;