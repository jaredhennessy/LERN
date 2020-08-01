import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
import API from "../../utils/API";
import CategorySelector from "../../components/CategorySelector";
import PageFooter from "../../components/PageFooter";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => loadCourses(), []);

  // const classes = useStyles();
  // const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    loadCoursesByCategory(e.target.value);
  };

  //loads all courses
  function loadCourses() {
    API.getAllCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  //loads courses of selected category
  function loadCoursesByCategory(category) {
    API.getCoursesByCategory(category)
    .then(res => setCourses(res.data))
      .catch(err => console.log(err));
      console.log(category);
  }

  return (
    <Container>
      <h1>Courses</h1>
      <div>
        {courses.length ? (
          <Grid container spacing={3}>
            {courses.map(course => (
              <Grid item md={3} key={course.id}>
                <CategorySelector handleChange={handleChange} category={course.category} />
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
      </div>
      {/* <PageFooter /> */}
    </Container>
  );
}