import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";

export default function Categories() {

const [courses, setCourses] = useState([])

useEffect(() =>
loadCourses()
, [])

    //loads all courses
    function loadCourses() {
        API.getCourses()
        .then(res => 
            setCourses(res.data)
          )
          .catch(err => console.log(err));
    };


  return (
    <Container>
      <h1>Categories</h1>

      <div>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Paper>
              <CourseCard {...courses}/>
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
          </Grid>
          <Grid item md={3}>
            <Paper>
              <CourseCard />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
