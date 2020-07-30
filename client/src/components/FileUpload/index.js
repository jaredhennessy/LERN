import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext/UserContext";

function FileUpload() {
  let userId;
  const [userImg, setUserImg] = useState("");

  const { userData } = useContext(UserContext);
  if (userData._id) {
    userId = userData._id;
  }
  const submitFile = async e => {
    if (userId) {
      e.preventDefault();
      console.log(userId);
      console.log(userImg);
      axios
        .put("/api/users/fileUpload", {
          username: "",
          image: userImg
        })
        .catch(err => console.log(err));
    }
  };

  const pickFile = e => {
    setUserImg({ userImg: e.target.files[0] });
  };

  // onSubmit(e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   const formData = new FormData();
  //   formData.append("profileImg", this.state.profileImg);
  //   console.log(formData);
  //   axios.post("http://localhost:3001/api/userTest", formData, {}).then(res => {
  //     console.log(res);
  //   });
  // });

  // constructor(props) {
  //   super(props);

  //   this.onFileChange = this.onFileChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);

  //   this.state = {
  //     userImg: ""
  //   };
  // }

  return (
    <div>
      <form onSubmit={submitFile}>
        <div>
          <input type="file" onChange={pickFile} />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
}

export default FileUpload;
