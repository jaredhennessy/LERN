import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext/UserContext";

function FileUpload() {
  // let userId;
  // const [userImg, setUserImg] = useState("");

  // const { userData } = useContext(UserContext);
  // if (userData._id) {
  //   userId = userData._id;
  // }
  // const submitFile = async e => {
  //   if (userId) {
  //     e.preventDefault();
  //     console.log(userId);
  //     console.log(userImg);
  //     axios
  //       .post("/api/files/upload", {
  //         username: "",
  //         image: userImg
  //       })
  //       .catch(err => console.log(err));
  //   }
  // };

  // const pickFile = e => {
  //   setUserImg({ userImg: e.target.files[0] });
  // };

  return (
    <div>
      <form
        // onSubmit={submitFile}
        action="/api/files/upload"
        method="POST"
        enctype="multipart/form-data"
      >
        <div>
          <input
            type="file"
            name="file"
            id="file"
            // onChange={pickFile}
          />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
}

export default FileUpload;
