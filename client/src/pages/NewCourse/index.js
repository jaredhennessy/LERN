import React, { useEffect, useState, useContext } from "react";
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
import PictureUpload from "../../components/NewCoursePictureUpload";
import UserContext from "../../UserContext/UserContext";


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
  const { userData } = useContext(UserContext);
  const [newCourseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState("image");
  const [courseCategory, setCourseCategory] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [courseContent, setCourseContent] = useState([{ pageNumber: 1, title: "title", image: "", text: "", link: "", course: "" }])
  // const history = useHistory();
  const handleCoursePages = (e) => {

    console.log(e);
    switch (e) {
      case "add":
        const newPage = { pageNumber: courseContent.length + 1, title: "pageTitle", image: "", text: "text", link: "link.com", course: "" }
        setCourseContent([...courseContent, newPage]);
        break;
      case "remove":
        const newCourseContent = courseContent.pop();
        setCourseContent([...courseContent]);
        break;
      default:
    };
  };

  const handleCourseContentChange = (e, page) => {
    const { name, value } = e.target;
    console.log(name, page, value)
    const oldCourseContent = [...courseContent]
    console.log(oldCourseContent)
    oldCourseContent[page - 1][name] = value
    setCourseContent(oldCourseContent);
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
    const user = userData._id;

    // Validate required fields
    if (!newCourseName || !courseDescription || !courseImage || !courseCategory) return alert("Missing required fields.");



    const newCourse = { title: newCourseName, description: courseDescription, image: courseImage, category: courseCategory, instructor: user };

    console.log(newCourse);
    const allPages = courseContent;

    const registerCourseResponse = await Axios.post("/api/courses/", newCourse).catch(err => alert(err.response.data));
    if (registerCourseResponse) {
      const courseId = registerCourseResponse.data.insertedId
      console.log(courseId);
      // const allPages = { pageNumber: , title: , image: , text: , link: , course: courseId }
      const registerPagesResponse = await Axios.post("api/multi", allPages).catch(err => alert(err.response.data));
      console.log("Response from posts:", registerCourseResponse, registerPagesResponse);
    }

    if (registerCourseResponse) {
      alert(`Successfully created course ${newCourseName}.`)
      // history.push("/login");
    }

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
                    <h5>Page {pageContent.pageNumber}</h5>
                    <TextField required variant="outlined" margin="dense" label="Course name" id="outline-required" name="title" onChange={e => handleCourseContentChange(e, pageContent.pageNumber)} />
                    <TextareaAutosize required aria-label="minimum height" rowsMin={14} variant="outlined" placeholder="write your course here" name="text"
                      onChange={e => handleCourseContentChange(e, pageContent.pageNumber)} />
                  </Grid>
                  <Grid item xs={12}>
                    <h5>Add an Image to this page</h5>
                    <PictureUpload />
                    <br />
                    <h5>show list of uploaded files </h5>
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
