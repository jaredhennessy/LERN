import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import UserAvatar from "../../components/UserAvatar";
import UserInfoCard from "../../components/UserInfoCard";
import Button from "@material-ui/core/Button";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import UserContext from "../../UserContext/UserContext";

export default function UserDashboard() {
  const { userData } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => loadCourses(), []);

  function loadCourses() {
    API.getAllCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <UserAvatar />
          </Grid>
          <Grid item md={4}>
            <UserInfoCard />
          </Grid>
          <Grid item md={4}>
            <Button href={"/editProfile/" + userData.user}>Edit Profile</Button>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <h2>Your Courses</h2>
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
      </Container>

      <Container>
        <h2>Courses You've Taught</h2>
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
      </Container>
    </Container>
  );
}
