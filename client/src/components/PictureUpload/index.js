import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext/UserContext";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  autoMargin: {
    margin: "auto"
  },
}))

function PictureUpload() {
  const { userData } = useContext(UserContext);
  const [file, setFile] = useState(null);
  const classes = useStyles();

  async function postAndUpdate(event) {
    event.preventDefault();

    // Post form to database, response returns the filename
    let formData = new FormData();
    formData.append("file", file);
    const fileUpload = await axios({
      method: "post",
      url: "/api/files/upload",
      data: formData,
      headers: { "content-type": `multipart/form-data` },
    });

    // Update user profile with filename, then refresh page
    let fileName = fileUpload.data.file.filename;
    axios
      .put("/api/users/uploadPicture", {
        _id: userData._id,
        imageURL: fileName,
      })
      .then(() => {
        window.location.reload();
      });
  }

  return (
    <div>
      <form onSubmit={event => postAndUpdate(event)}>
        <div>
          <InputLabel htmlFor="file">
            <br />
            <input
              className={classes.autoMargin}
              accept="image/*"
              type="file"
              name="file"
              id="file"
              onChange={e => setFile(e.target.files[0])}
            />
          </InputLabel >
        </div>
        <br />
        <Button
          className={classes.autoMargin}
          variant="contained"
          color="primary"
          type="submit"
          value="Submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default PictureUpload;