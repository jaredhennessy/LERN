import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../UserContext/UserContext";
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

function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    if (!password || !username) return alert("Missing required fields.");
    const userResponse = await API.userLogin(username, password).catch(err => alert(err.response.data));
    if (userResponse === undefined) return;
    setUserData({
      user: userResponse.data.username,
      token: userResponse.data.accessToken,
      _id: userResponse.data.userID,
      userIMG: userResponse.data.image,
      email: userResponse.data.email,
      dateCreated: userResponse.data.dateCreated,
    })
    localStorage.setItem("auth-token", userResponse.data.accessToken);
    localStorage.setItem("ref-token", userResponse.data.refreshToken);
    localStorage.setItem("user", userResponse.data.username);
    localStorage.setItem("userID", userResponse.data.userID);
    localStorage.setItem("userIMG", userResponse.data.userID);
    history.push("/users/" + userResponse.data.username);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={submitForm}>
        <TextField required variant="outlined" label="Username" id="outline-required" name="usernameInput" onChange={e => setUsername(e.target.value)} /><br />
        <TextField required type="password" variant="outlined" id="outlined-password-input" label="Password" autoComplete="current-password" name="passwordInput" onChange={e => setPassword(e.target.value)} /> <br />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
  )
}


export default Login;