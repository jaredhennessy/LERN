import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Register() {
  const classes = useStyles();
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
    const registerResponse = await API.registerUser(newUser).catch(err => alert(err.response.data));
    if (registerResponse) {
      alert(`Successfully registered ${username}, please log in.`)
      history.push("/login");
    }
  }

  return (
    <div>
      <h1>Registration Page</h1>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={submitForm}>
        <TextField required variant="outlined" label="Username" id="outline-required" name="usernameInput" onChange={e => setUsername(e.target.value)} /><br />
        <TextField required variant="outlined" label="Email" id="outline-required" name="usernameInput" onChange={e => setEmail(e.target.value)} /><br />
        <TextField required type="password" variant="outlined" id="outlined-password-input" label="Password" autoComplete="current-password" name="passwordInput" onChange={e => setPassword(e.target.value)} /><br />
        <TextField required type="password" variant="outlined" id="outlined-password-input" label="Verify Password" autoComplete="current-password" name="passwordInput" onChange={e => setPasswordCheck(e.target.value)} /><br />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
  )
}


export default Register;