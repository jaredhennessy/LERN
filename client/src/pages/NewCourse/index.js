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

  // const fufu = null;

  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const { userData } = useContext(UserContext);
  const [newCourseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState("image");
  const [courseCategory, setCourseCategory] = useState("");
  // const [pageCount, setPageCount] = useState("");
  const [courseContent, setCourseContent] = useState([{ pageNumber: 1, title: "pageTitle", image: "image", text: "text", link: "link.com", course: "" }])
  // const history = useHistory();
  const handleCoursePages = (e) => {
    console.log(e);
    switch (e) {
      case "add":
        const newPage = { pageNumber: courseContent.length + 1, title: "pageTitle", image: "image", text: "text", link: "link.com", course: "" }
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


  const submitForm = async (e) => {
    e.preventDefault();
    const user = userData._id;

    // Validate required fields
    if (!newCourseName || !courseDescription || !courseImage || !courseCategory) return alert("Missing required fields.");



    const newCourse = { title: newCourseName, description: courseDescription, image: courseImage, category: courseCategory, instructor: user };

    console.log(newCourse);

    const registerCourseResponse = await Axios.post("/api/courses/", newCourse).catch(err => alert(err.response.data));


    if (registerCourseResponse.status === 200) {

      const courseId = registerCourseResponse.data.insertedId
      // const allPages = [];

      for (let i = 0; i < courseContent.length; i++) {
        courseContent[i].course = courseId;
      }

      // const allPages = courseContent.map(page => (
      //   page = [...page, (page.course = courseId)]));

      console.log(courseContent);
      const registerPagesResponse = await Axios.post("api/pages/multi", courseContent).catch(err => alert(err.response.data));

      if (registerPagesResponse.status === 200) {
        alert(`Successfully created course ${newCourseName}.`);
      } else {
        alert(`There was an error creating your course`);
      }

      console.log("Response from posts:", registerCourseResponse, registerPagesResponse);
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
            <PictureUpload key="" passThePicture={picture => { console.log("PICTURE UPLOAD FROM NEWCOURSE"); setCourseImage(picture) }} />
          </Grid>

          <Grid item xs={6}>
            <h5>Course content</h5>
            <Grid container spacing={1}>




              {courseContent.map(pageContent => (
                <div key={pageContent.pageNumber}>
                  <Grid item xs={12}>
                    <h5>Page {pageContent.pageNumber}</h5>
                    <TextField required variant="outlined" margin="dense" label="Course name" id="outline-required" name="title" onChange={e => handleCourseContentChange(e, pageContent.pageNumber)} />
                    <TextareaAutosize required aria-label="minimum height" rowsMin={14} variant="outlined" placeholder="write your course here" name="text"
                      onChange={e => handleCourseContentChange(e, pageContent.pageNumber)} />
                  </Grid>
                  <Grid item xs={12}>
                    <h5>Add an Image to this page</h5>
                    <PictureUpload key={pageContent.pageNumber} passThePicture={picture => { console.log("PICTURE UPLOAD FROM NEWCOURSE"); const e = { target: { name: "image", value: picture } }; handleCourseContentChange(e, pageContent.pageNumber) }} />
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
