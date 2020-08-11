import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import UserContext from '../../UserContext/UserContext';

function Logout() {
  const { setUserData } = useContext(UserContext);

  let history = useHistory();

  // Remove refresh token from database and localstorage
  function logout() {
    API.userLogout().catch(err => console.log(err.response.data));
    setUserData({
      token: undefined,
      user: undefined,
    })
    localStorage.setItem("auth-token", "");
    localStorage.setItem("ref-token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("userID", "");
    localStorage.setItem("userIMG", "");
    history.push("/");
  }

  useEffect(() => {
    logout();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h2>Logging out...</h2>
  )

}

export default Logout;