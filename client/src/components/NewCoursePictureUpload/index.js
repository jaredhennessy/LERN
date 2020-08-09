// import React, { useState } from "react";
// import axios from "axios";

// function PictureUpload() {
//   const [file, setFile] = useState(null);
//   // const [pictureFileName, setPictureFileName] = useState(null);

//   async function postAndUpdate(event) {
//     event.preventDefault();

//     // Post form to database, response returns the filename
//     let formData = new FormData();
//     formData.append("file", file);

//     const fileUpload = await axios({
//       method: 'post',
//       url: "/api/files/upload",
//       data: formData,
//       headers: { 'content-type': `multipart/form-data` }
//     });
//     let fileName = fileUpload.data.file.filename;

//     // setPictureFileName(fileUpload.data.file.filename)
//   }

//   return (
//     <div>
//       <form onSubmit={event => postAndUpdate(event)}>
//         <div>
//           <label htmlFor="file">Choose File</label>
//           <br />
//           <input type="file" name="file" id="file" onChange={e => { setFile(e.target.files[0]) }} />
//         </div>
//         <input type="submit" value="Submitt" />
//       </form>
//     </div>
//   );
// }

// export default PictureUpload();

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import InputLabel from "@material-ui/core/InputLabel";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles'
import { PromiseProvider } from "mongoose";

const useStyles = makeStyles(theme => ({
  autoMargin: {
    margin: "auto"
  },
}))

function PictureUpload(props) {
  const classes = useStyles();
  const [file, setFile] = useState(null)
  const [pictureFileName, setPictureFileName] = useState(false);

  useEffect(() => {
    async function postAndUpdate() {

      // Post form to database, response returns the filename
      let formData = new FormData();
      formData.append("file", file);
      const fileUpload = await axios({
        method: 'post',
        url: "/api/files/upload",
        data: formData,
        headers: { 'content-type': `multipart/form-data` }
      });
      setPictureFileName(fileUpload.data.file.filename)
      // pictureFileName = fileUpload.data.file.filename;
    };
    if (file != null) {
      console.log("executing postAndUpdate");
      postAndUpdate();
    }
  }, [file]);

  useEffect(() => {
    function passPicture() {
      props.passThePicture(pictureFileName);
      console.log("PASSTHE PICTURE", pictureFileName);
    }
    if (!(pictureFileName === false)) {
      console.log("pictureFileName=(has to be ! False)", pictureFileName);
      passPicture();
      setPictureFileName(false);
      setFile(null);
    }
    console.log("USEEFFECT TRIED")
  }, [pictureFileName])

  console.log(pictureFileName);
  console.log(file);
  return (

    <div>
      <div>
        <InputLabel
          htmlFor="file">
          <br />
          <input
            key={props.key}
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
            onChange={e => { console.log("onChange SetFile exec:", e.target.files[0]); setFile(e.target.files[0]) }}
          />
          <span></span>
          <Button
            className={classes.autoMargin}
            color="primary"
            size="small"
            component="span"
            aria-label="add"
            variant="contained"
          >
            <AddIcon /> Upload photo
            </Button>
        </InputLabel >
      </div>
      <br />
    </div>
  );
}

export default PictureUpload;