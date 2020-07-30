import React, { Component } from "react";
import axios from "axios";
import { FormGroup } from "@material-ui/core";

class UserTest extends Component {
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
        <h2>Create User / Upload File Test</h2>
        <div>
          <form>
            <h3>React File Upload</h3>
            <label for="email">Email:</label>
            <br />
            <input id="email" type="text" />
            <br />
            <label for="username">Username:</label>
            <br />
            <input id="username" type="text" />
            <br />
            <label for="password">Password:</label>
            <br />
            <input id="password" type="text" />
            <br />
            <label for="userImg">Avatar:</label>
            <br />
            <input id="userImg" type="file" onChange={this.onFileChange} />
            <br />
            <button type="submit">Create Test User</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserTest;
