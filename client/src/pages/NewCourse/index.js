import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CategorySelector from "../../components/CategorySelector";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   title: {

//   },
//   text: {
//     width: "60%",
//     textAlign: "center",
//     position: "relative",
//     top: "0.8rem",
//     left: "20%",
//     right: "20%",
//     // bottom: "4rem",
//   },

// }));


function NewCourse() {

  const classes = useStyles();

  const [courses, setCourses] = useState([]);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");
  // const history = useHistory();

  const handleChange = e => {
    if (e.target.value === "all") {
      loadCourses();
    } else {
      // loadCoursesByCategory(e.target.value);
    }
  };

  //loads all courses
  function loadCourses() {
    API.getAllCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  const submitForm = async (e) => {
    e.preventDefault();

    // Validate required fields, password length, passwords match
    // if (!email || !password || !passwordCheck || !username) return alert("Missing required fields.");
    // if (password.length < 6) return alert("Password needs to be at least 6 characters.");

    // const newCourse = { username, email, password, passwordCheck };
    // const registerResponse = await Axios.post("/api/users/register", newUser).catch(err => alert(err.response.data));
    // if (registerResponse) {
    //   alert(`Successfully registered ${username}, please log in.`)
    //   history.push("/login");
    // }
  }

  return (
    <div>
      <h1>New Course</h1>
      <form noValidate className={classes.root} autoComplete="off" onSubmit={submitForm}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={0}>
              <Grid item xs={4} >
                <h5>Course name:</h5>
              </Grid>
              <Grid item xs={8}>
                <TextField required variant="outlined" margin="dense" label="Course name" id="outline-required" name="courseNameInput" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <h5>Select the Category for this course:</h5>
              </Grid>
              <Grid item md={6}>
                <CategorySelector handleChange={handleChange} loadCourses={loadCourses} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <h5>Select main course image</h5>
            <Button variant="contained" name="browseImage" color="primary" type="submit" >Browse</Button>
          </Grid>

          <Grid item xs={6}>
            <h5>Course content</h5>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h5>Page 1</h5>
                <TextareaAutosize required aria-label="minimum height" rowsMin={14} variant="outlined" placeholder="write your course here" name="newCourseContent" />
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" type="submit" >Remove Page</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" type="submit" >Add Page</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <h5>Brief course description</h5>
            <TextareaAutosize required aria-label="minimum height" rowsMin={5} variant="outlined" placeholder="max 50 characters" name="Course Description" />
          </Grid>


          <Grid item xs={6}>
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit" >Submit</Button>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <h5>Add additional material</h5>
          <Button variant="contained" name="addMaterial" color="primary" type="submit" >Browse</Button>
          <br />
          <h5>show list of uploaded files</h5>
        </Grid>

      </form>



      <br />

      <br />

    </div >

  )
}

export default NewCourse;
