import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import NewCourseCategorySelector from "../../components/NewCourseCategorySelector";
import PictureUpload from "../../components/NewCoursePictureUpload";
import UserContext from "../../UserContext/UserContext";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  courseDescription: {
    width: "80%"
  },
  pageButton: {
    margin: "20px"
  },
  autoMargin: {
    margin: "auto"
  }
}));

function NewCourse() {
  const classes = useStyles();
  const { userData } = useContext(UserContext);
  const [newCourseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState("image");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseContent, setCourseContent] = useState([
    {
      pageNumber: 1,
      title: "pageTitle",
      image: "image",
      text: "text",
      link: "link.com",
      course: ""
    }
  ]);
  const history = useHistory();

  const handleCoursePages = e => {
    console.log(e);
    switch (e) {
      case "add":
        const newPage = {
          pageNumber: courseContent.length + 1,
          title: "pageTitle",
          image: "image",
          text: "text",
          link: "link.com",
          course: ""
        };
        setCourseContent([...courseContent, newPage]);
        break;
      case "remove":
        if (courseContent.length > 1) {
          // const newCourseContent = courseContent.pop();
          setCourseContent([...courseContent]);
        }
        break;
      default:
    }
  };

  const handleCourseContentChange = (e, page) => {
    const { name, value } = e.target;
    console.log(name, page, value);
    const oldCourseContent = [...courseContent];
    console.log(oldCourseContent);
    oldCourseContent[page - 1][name] = value;
    setCourseContent(oldCourseContent);
  };

  const PictureUploadHandling = async (e, identifier) => {
    const file = e.target.files[0];
    console.log("file", file);

    // Post form to database, response returns the filename
    let formData = new FormData();
    formData.append("file", file);
    let fileUpload = await Axios({
      method: "post",
      url: "/api/files/upload",
      data: formData,
      headers: { "content-type": `multipart/form-data` }
    });
    console.log(
      "AXIOS response: ",
      fileUpload,
      "AND the file name is: ",
      fileUpload.data.file.filename
    );
    console.log("IDENTIFIER: ", identifier);

    if (identifier === "course-image") {
      console.log("course-image");
      setCourseImage(fileUpload.data.file.filename);
    } else {
      console.log("Number!", identifier);
      const d = {
        target: { name: "image", value: fileUpload.data.file.filename }
      };
      handleCourseContentChange(d, identifier);
    }
  };

  const submitForm = async e => {
    e.preventDefault();
    const user = userData._id;

    // Validate required fields
    if (!newCourseName) {
      return alert("Missing Course Name");
    } else if (!courseDescription) {
      return alert("Missing Course Description");
    } else if (!courseImage) {
      return alert("Missing Course Image");
    } else if (!courseCategory) {
      return alert("Missing Course Category");
    }

    const newCourse = {
      title: newCourseName,
      description: courseDescription,
      image: courseImage,
      category: courseCategory,
      instructor: user
    };

    console.log(newCourse);

    const registerCourseResponse = await Axios.post(
      "/api/courses/",
      newCourse
    ).catch(err => alert(err.response.data));

    if (registerCourseResponse.status === 200) {
      const courseId = registerCourseResponse.data.insertedId;

      for (let i = 0; i < courseContent.length; i++) {
        courseContent[i].course = courseId;
      }
      console.log(courseContent);
      const registerPagesResponse = await Axios.post(
        "api/pages/multi",
        courseContent
      ).catch(err => alert(err.response.data));

      if (registerPagesResponse.status === 200) {
        alert(`Successfully created course ${newCourseName}.`);

        history.push(`/users/${userData.user}`);
      } else {
        alert(`There was an error creating your course`);
      }

      console.log(
        "Response from posts:",
        registerCourseResponse,
        registerPagesResponse
      );
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>New Course</h1>
        </Grid>
        <form
          noValidate
          className={classes.root}
          autoComplete="off"
          onSubmit={submitForm}
        >
          <Grid item xs={12}>
            <h5>Course name:</h5>
            <TextField
              required
              variant="outlined"
              margin="dense"
              label="Course name"
              id="outline-required"
              name="courseNameInput"
              onChange={e => setCourseName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <h5>Select the Category for this course:</h5>
            <NewCourseCategorySelector
              handleChange={e => setCourseCategory(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <h5>Brief course description</h5>
            <TextareaAutosize
              required
              aria-label="minimum height"
              rowsMin={5}
              variant="outlined"
              placeholder="max 50 characters"
              name="Course Description"
              onChange={e => setCourseDescription(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <h5>Select main course image</h5>
            <PictureUpload
              key="course-image"
              name="course-image"
              onChange={e => {
                console.log("course-image", e.target.files[0].name);
                PictureUploadHandling(e, "course-image");
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <h5>Course content</h5>

            {courseContent.map(pageContent => (
              <div key={pageContent.pageNumber} className={classes.root}>
                <Grid item xs={12}>
                  <h4>Page {pageContent.pageNumber}</h4>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    variant="outlined"
                    margin="dense"
                    label="Page name"
                    id="outline-required"
                    name="title"
                    onChange={e =>
                      handleCourseContentChange(e, pageContent.pageNumber)
                    }
                  />
                </Grid>

                <br />
                <Grid item xs={12}>
                  <TextareaAutosize
                    className={classes.courseDescription}
                    required
                    aria-label="minimum height"
                    rowsMin={1}
                    variant="outlined"
                    placeholder="Links to add"
                    name="link"
                    onChange={e =>
                      handleCourseContentChange(e, pageContent.pageNumber)
                    }
                  />
                </Grid>

                <br />
                <Grid item xs={12}>
                  <TextareaAutosize
                    className={classes.courseDescription}
                    required
                    aria-label="minimum height"
                    rowsMin={20}
                    variant="outlined"
                    placeholder="write your course here"
                    name="text"
                    onChange={e =>
                      handleCourseContentChange(e, pageContent.pageNumber)
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <h5 style={{}}>Add an Image to this page</h5>
                  <PictureUpload
                    key={String(pageContent.pageNumber)}
                    name={String(pageContent.pageNumber)}
                    onChange={e => {
                      PictureUploadHandling(e, pageContent.pageNumber);
                    }}
                  />
                </Grid>

                <br />
                <br />
              </div>
            ))}

            <Grid item xs={12}>
              <Button
                className={classes.pageButton}
                variant="contained"
                color="primary"
                aria-label="remove page"
                component="span"
                onClick={e => {
                  handleCoursePages("remove");
                }}
              >
                <RemoveIcon /> Page
              </Button>
              <Button
                className={classes.pageButton}
                variant="contained"
                color="primary"
                aria-label="add page"
                component="span"
                onClick={e => {
                  handleCoursePages("add");
                }}
              >
                <AddIcon /> Page
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </form>
        <br />
        <br />
      </Grid>
    </div>
  );
}

export default NewCourse;
