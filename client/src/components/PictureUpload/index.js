import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext/UserContext";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  autoMargin: {
    margin: "auto",
  },

  inputfile: {
    width: "0.1px",
    height: "0.1px",
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: -1,
    fontSize: "1.25em",
    fontWeight: 700,
    color: "white",
    backgroundColor: "black",
    display: "inline-block",
    cursor: "pointer",
  },

//   label: {
//     fontSize: "1.25em",
//     fontWeight: 700,
//     color: "white",
//     backgroundColor: "black",
//     display: "inline-block",
//     cursor: "pointer",
//     // pointerEvents: "none",
// },

}));



function PictureUpload() {
  const { userData } = useContext(UserContext);
  const [file, setFile] = useState(null);

  const classes = useStyles();

  async function postAndUpdate(event) {
    event.preventDefault();

    // Post form to database, response returns the filename
    let formData = new FormData();

    formData.append("file", file);
    console.log(file);
    console.log(formData);
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
        // window.location.reload();
      });
      
  }

  return (

    //original
    <div>
      <form onSubmit={event => postAndUpdate(event)}>
        <div>
          <label data-button className={classes.inputfile} htmlFor="file">Choose File</label>
          <br />
          <input className="MuiButton-label MuiButton-containedPrimary MuiButton-root MuiButtonBase-root" type="file" name="file" id="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <input className="MuiButton-label MuiButton-containedPrimary MuiButton-root MuiButtonBase-root" type="submit" value="Submit" />
      </form>
    </div>

    //  buttons only
    // <div>
    //   <form onSubmit={event => postAndUpdate(event)}>
    //     <div>
    //       <InputLabel htmlFor="file">
    //         <br />
    //         <input
    //           style={{ display: "none" }}
    //           type="file"
    //           name="file"
    //           id="file"
    //           onChange={e => setFile(e.target.files[0])}
    //         />
    //         <span></span>
    //         <Button
    //           className={classes.autoMargin}
    //           color="primary"
    //           size="small"
    //           component="span"
    //           aria-label="add"
    //           variant="contained"
    //         >
    //           <AddIcon /> Upload photo
    //         </Button>
    //       </InputLabel >
    //     </div>
    //     <br />
    //     <Button
    //       className={classes.autoMargin}
    //       variant="contained"
    //       color="secondary"
    //       type="submit"
    //       value="Submit"
    //     >
    //       Submit
    //     </Button>
    //   </form>
    // </div>
  );
}

export default PictureUpload;
