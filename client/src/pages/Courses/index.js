import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import API from "../../utils/API";

export default function Categories() {
  const [courses, setCourses] = useState([]);
  useEffect(() => loadCourses(), []);

  // const classes = useStyles();
  // const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    getCoursesByCategory(e.target.value);
  };

  //loads all courses
  function loadCourses() {
    API.getCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  function getCoursesByCategory(category) {
    API.getCourses(category)
    .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <h1>Courses</h1>
      <FormControl variant="filled" >
        <InputLabel id="demo-simple-select-filled-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={course.category}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="">Finance</MenuItem>
          <MenuItem value=":">Business</MenuItem>
          <MenuItem value="">Math</MenuItem>
          <MenuItem value="">Painting</MenuItem>
          <MenuItem value="">Pottery</MenuItem>
          <MenuItem value="">Fishing</MenuItem>
          <MenuItem value="">DIY</MenuItem>
          <MenuItem value="">Full-Stack Development</MenuItem>

        </Select>
      </FormControl>
      <div>
        {courses.length ? (
          <Grid container spacing={3}>
            {courses.map(course => (
              <Grid item md={3} key={course.id}>
                <Paper>
                  <CourseCard 
                  title={course.title} 
                  description={course.description}
                  image={course.image}
                  category={course.category}
                  instructor={course.instructor}
                  dateCreated={course.dateCreated}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <h3>No Results</h3>
        )}

        {/* <Grid item md={3}>
            <Paper>
              <CourseCard />
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              <CourseCard />
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              <CourseCard />
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              <CourseCard />
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              <CourseCard />
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              <CourseCard />
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              <CourseCard />
            </Paper>
          </Grid> */}
      </div>
    </Container>
  );
}