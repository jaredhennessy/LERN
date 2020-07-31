import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";

export default function Categories() {
  const [courses, setCourses] = useState([]);

  useEffect(() => loadCourses(), []);

  //loads all courses
  function loadCourses() {
    API.getCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <h1>Categories</h1>

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
