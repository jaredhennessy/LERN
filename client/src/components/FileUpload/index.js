import React, { Component } from "react";
import axios from "axios";

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      profileImg: ""
    };
  }

  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", this.state.profileImg);
    axios.post("http://localhost:3001/api/userTest", formData, {}).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input type="file" onChange={this.onFileChange} />
          </div>
          <div>
            <button type="submit">Upload</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FileUpload;
