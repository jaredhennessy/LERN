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

import React, { useState, } from "react";
import axios from "axios";


function PictureUpload() {

  const [file, setFile] = useState(null)

  async function postAndUpdate() {
    // event.preventDefault();

    // Post form to database, response returns the filename
    let formData = new FormData();
    formData.append("file", file);
    const fileUpload = await axios({
      method: 'post',
      url: "/api/files/upload",
      data: formData,
      headers: { 'content-type': `multipart/form-data` }
    });
    console.log(fileUpload);
    console.log(fileUpload.config.data.formData);
    // Update user profile with filename, then refresh page
    // let fileName = fileUpload.data.file.filename;
    // console.log(fileName);
  }

  return (
    <div>
      {/* <form onSubmit={event => postAndUpdate(event)}> */}
      <div>
        <label htmlFor="file">Choose File</label>
        <br />
        <input type="file" name="file" id="file" onChange={e => { setFile(e.target.files[0]); postAndUpdate(); }} />
      </div>
      {/* <input type="submit" value="Submit" /> */}
      {/* </form> */}
    </div>
  );
}

export default PictureUpload;