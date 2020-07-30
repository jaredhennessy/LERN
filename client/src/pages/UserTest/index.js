// import React, { useState } from "react";
// import axios from "axios";

function UserTest() {
  // constructor(props) {
  //   super(props);
  //   this.onTextChange = this.onTextChange.bind(this);
  //   this.onFileChange = this.onFileChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  // const [newUserState, setNewUserState] = useState({
  //   username: "",
  //   password: "",
  //   email: "",
  //   profileImg: ""
  // });
  // onTextChange(e => {
  //   setNewUserState({ [e.target.id]: e.target.value });
  //   console.log(this.state);
  // });
  // onFileChange(e => {
  //   setNewUserState({ profileImg: e.target.files[0] });
  // });
  // onSubmit(e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   const formData = new FormData();
  //   formData.append("profileImg", this.state.profileImg);
  //   console.log(formData);
  //   axios.post("http://localhost:3001/api/userTest", formData, {}).then(res => {
  //     console.log(res);
  //   });
  // });
  // return (
  //   <div>
  //     <h2>Create User / Upload File Test</h2>
  //     <div>
  //       <form>
  //         <h3>React File Upload</h3>
  //         <label htmlFor="email">Email:</label>
  //         <br />
  //         <input id="email" type="text" onChange={this.onTextChange} />
  //         <br />
  //         <label htmlFor="username">Username:</label>
  //         <br />
  //         <input id="username" type="text" onChange={this.onTextChange} />
  //         <br />
  //         <label htmlFor="password">Password:</label>
  //         <br />
  //         <input id="password" type="text" onChange={this.onTextChange} />
  //         <br />
  //         <label htmlFor="userImg">Avatar:</label>
  //         <br />
  //         <input id="userImg" type="file" onChange={this.onFileChange} />
  //         <br />
  //         <button type="submit">Create Test User</button>
  //       </form>
  //     </div>
  //   </div>
  // );
}

export default UserTest;
