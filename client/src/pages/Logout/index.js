import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from '../../UserContext/UserContext';

function Logout() {
  const { setUserData } = useContext(UserContext);

  let history = useHistory();

  // Remove refresh token from database and localstorage
  function logout() {
    Axios.delete("/api/users/logout")
      .then(
        setUserData({
          token: undefined,
          user: undefined,
        })
      )
      .catch(err => console.log(err.response.data));
    localStorage.setItem("auth-token", "");
    localStorage.setItem("ref-token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("userID", "");
    localStorage.setItem("userIMG", "");
    history.push("/");
  }

  useEffect(() => {
    logout();
  }, []);

  return (
    <h2>Logging out...</h2>
  )

}

export default Logout;