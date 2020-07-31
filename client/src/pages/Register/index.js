import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";


function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();

    // Validate required fields, password length, passwords match
    if (!email || !password || !passwordCheck || !username) return alert("Missing required fields.");
    if (password !== passwordCheck) return alert("Passwords do not match.");
    if (password.length < 6) return alert("Password needs to be at least 6 characters.");

    const newUser = { username, email, password, passwordCheck };
    const registerResponse = await Axios.post("/api/users/register", newUser).catch(err => alert(err.response.data));
    if (registerResponse) {
      alert(`Successfully registered ${username}, please log in.`)
      history.push("/login");
    }
  }

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="usernameInput">Username:</label><br />
        <input type="text" id="usernameInput" name="usernameInput" onChange={e => setUsername(e.target.value)}/><br />
        <label htmlFor="emailInput">Email</label><br />
        <input type="text" id="emailInput" name="emailInput" onChange={e => setEmail(e.target.value)}/> <br />
        <label htmlFor="passwordInput">Password</label><br />
        <input id="passwordInput" name="passwordInput" type="password" onChange={e => setPassword(e.target.value)}/> <br />
        <label htmlFor="passwordCheckInput">Verify Password</label><br />
        <input id="passwordCheckInput" name="passwordCheckInput" type="password" onChange={e => setPasswordCheck(e.target.value)}/> <br />
        <input type="submit" />
      </form>
    </div>
  )
}


export default Register;