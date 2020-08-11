import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import axios from "axios";

function FileUpload() {
  const [fileArray, setFileArray] = useState({
    fileList: []
  });

  useEffect(() => {
    const getImages = async () => {
      const fileApi = await axios.get("/api/files/");
      console.log(fileApi.data)
      setFileArray({ fileList: fileApi.data });
    };
    getImages();
    console.log(fileArray);
  }, [])

  return (
    <div>
      <form
        action="/api/files/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="file">Choose File</label>
          <br />
          <input type="file" name="file" id="file" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      {fileArray.fileList.map(files => (
        <div>
          <br />
          <img src={"api/files/" + files.filename}
            key={files._id}
            alt={files.type}
            width="50"
          /><span> Uploaded <Moment format="DD/MMM/YYYY" local>{files.uploadDate}</Moment></span>
        </div>
      ))}
    </div>
  );
}

export default FileUpload;