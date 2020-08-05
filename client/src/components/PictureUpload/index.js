import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext/UserContext";

function PictureUpload() {
  const { userData } = useContext(UserContext);
  const [file, setFile] = useState(null)

  async function postAndUpdate(event) {
    event.preventDefault();

    // Post form to database, response returns the filename
    let formData = new FormData();
    formData.append("file", file);
    const fileUpload = await axios({
      method: 'post',
      url: "/api/files/upload",
      data: formData,
      headers: { 'content-type': `multipart/form-data` }
    });

    // Update user profile with filename, then refresh page
    let fileName = fileUpload.data.file.filename;
    axios.put("/api/users/uploadPicture", {
      _id: userData._id,
      imageURL: fileName
    }).then(() => {
      window.location.reload();
    })
  }

  return (
    <div>
      <form onSubmit={event => postAndUpdate(event)}>
        <div>
          <label htmlFor="file">Choose File</label>
          <br />
          <input type="file" name="file" id="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default PictureUpload;