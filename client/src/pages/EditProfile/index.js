import React, { useContext } from "react";
import UserContext from "../../UserContext/UserContext";

function EditProfile() {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h1>My Profile</h1>
      <h2>{userData.user}</h2>
      <p>Under construction...</p>
    </div>
  )
}

export default EditProfile;
