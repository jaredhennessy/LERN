
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
// import axios from "axios";
import { makeStyles } from '@material-ui/core/styles'
// import { PromiseProvider } from "mongoose";

const useStyles = makeStyles(theme => ({
  autoMargin: {
    margin: "auto"
  },
}))

function PictureUpload({ onChange, name }) {
  const classes = useStyles();
  // const [file, setFile] = useState(null)
  // const [pictureFileName, setPictureFileName] = useState(false);

  // useEffect(() => {
  //   async function postAndUpdate() {

  //     // Post form to database, response returns the filename
  //     let formData = new FormData();
  //     formData.append("file", file);
  //     const fileUpload = await axios({
  //       method: 'post',
  //       url: "/api/files/upload",
  //       data: formData,
  //       headers: { 'content-type': `multipart/form-data` }
  //     });
  //     setPictureFileName(fileUpload.data.file.filename)
  //   };
  //   // console.log("USEEFFECT PictureUpload TRIED")
  //   if (!(file === null)) {
  //     console.log("executing postAndUpdate of PictureUp");
  //     postAndUpdate();
  //   }
  // }, [file]);



  // useEffect(() => {

  //   function passPicture() {
  //     passThePicture(pictureFileName);
  //     console.log("PASS THE PICTURE", pictureFileName);
  //   }

  //   if (!(pictureFileName === false)) {
  //     // console.log("pictureFileName=", pictureFileName);
  //     passPicture();
  //     setPictureFileName(false);
  //     setFile(null);
  //   }

  //   // console.log("USEEFFECT PassPicture TRIED")

  // }, [pictureFileName, passThePicture])


  // console.log(pictureFileName);
  // console.log(file);

  return (

    <div >
      <div>
        <input
          // key={Key}
          style={{ display: "none" }}
          type="file"
          name={name}
          id={name}
          // onChange={e => { console.log("onChange SetFile exec:", e.target.files[0]); setFile(e.target.files[0]) }}
          onChange={onChange}
        />

        <InputLabel
          htmlFor={name}>
          <br />
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