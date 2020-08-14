import React from "react";

function PictureUpload({ onChange, name }) {
  return (
    <div>
      <div>
        <input
          accept="image/*"
          type="file"
          name={name}
          id={name}
          onChange={onChange}
        />
      </div>
      <br />
    </div>
  );
}

export default PictureUpload;
