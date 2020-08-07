import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import NewCourseCategorySelector from "../../components/NewCourseCategorySelector";
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
  const [newCourseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [courseContent, setCourseContent] = useState([{ page: "1", content: "" }])
  // const history = useHistory();

  const handleCoursePages = (e) => {

    console.log(e);
    switch (e) {
      case "add":
        const newPage = { page: `${courseContent.length + 1}`, content: "" }
        setCourseContent([...courseContent, newPage]);
        break;
      case "remove":
        console.log(courseContent);
        const newCourseContent = courseContent.pop();
        console.log(courseContent)
        setCourseContent([...courseContent]);

        break;
      default:
    };
  };
  console.log(courseContent);
  const handleCourseContentChange = (e) => {
    const { name, value } = e.target;
    const oldCourseContent = [...courseContent]
    const contentToAdd = [{ page: name, content: value }];
    const newCourseContent = oldCourseContent.map(obj => contentToAdd.find(o => o.page === obj.page) || obj);
    console.log(newCourseContent);
    setCourseContent(newCourseContent);
  };

  // const handleChange = e => {
  // console.log(e.target)
  // if (e.target.value !== "all") {
  // loadCourses();

  // } else {
  // loadCoursesByCategory(e.target.value);
  // }
  // };

  //loads all courses
  // function loadCourses() {
  //   API.getAllCourses()
  //     .then(res => setCourses(res.data))
  //     .catch(err => console.log(err));
  // }

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(e.target)
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
                <TextField required variant="outlined" margin="dense" label="Course name" id="outline-required" name="courseNameInput" onChange={e => setCourseName(e.target.value)} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <h5>Select the Category for this course:</h5>
              </Grid>
              <Grid item md={6}>
                <NewCourseCategorySelector handleChange={e => setCourseCategory(e.target.value)} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <h5>Select main course image</h5>
            <Button variant="contained" name="browseImage" color="primary" >Browse</Button>
          </Grid>

          <Grid item xs={6}>
            <h5>Course content</h5>
            <Grid container spacing={1}>

              {courseContent.map(pageContent => (
                <div>
                  <Grid item xs={12}>
                    <h5>Page {pageContent.page}</h5>
                    <TextareaAutosize required aria-label="minimum height" rowsMin={14} variant="outlined" placeholder="write your course here" name={pageContent.page}
                      onChange={handleCourseContentChange} />
                  </Grid>
                  <Grid item xs={12}>
                    <h5>Add additional material</h5>
                    <Button variant="contained" name="addMaterial" color="primary" >Browse</Button>
                    <br />
                    <h5>show list of uploaded files</h5>
                  </Grid>
                </div>
              ))}
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" onClick={e => { handleCoursePages("remove") }}  >Remove Page</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" onClick={e => { handleCoursePages("add") }}  >Add Page</Button>
                </Grid>
              </Grid>



            </Grid>
          </Grid>

          <Grid item xs={6}>
            <h5>Brief course description</h5>
            <TextareaAutosize required aria-label="minimum height" rowsMin={5} variant="outlined" placeholder="max 50 characters" name="Course Description" onChange={e => setCourseDescription(e.target.value)} />
          </Grid>


          <Grid item xs={6}>
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit" >Submit</Button>
          </Grid>
        </Grid>



      </form>



      <br />

      <br />

    </div >

  )
}

export default NewCourse;
