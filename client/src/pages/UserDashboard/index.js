import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import UserAvatar from "../../components/UserAvatar";
import UserInfoCard from "../../components/UserInfoCard";
import Button from "@material-ui/core/Button";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import UserContext from "../../UserContext/UserContext";
import FileUpload from "../../components/FileUpload";
import Divider from "@material-ui/core/Divider";
import API from "../../utils/API";

export default function UserDashboard() {
  const { userData } = useContext(UserContext);
  const [teachingCourses, setTeachingCourses] = useState([]);
  const [learningCourses, setLearningCourses] = useState([]);

  useEffect(() => {
    API.getUserTeachingCourses(userData._id)
      .then(res => setTeachingCourses(res.data))
      .catch(err => console.log(err));
    API.getUserLearningCourses(userData.user)
      .then(res => setLearningCourses(res.data))
      .catch(err => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <UserAvatar user={userData.user} />
            <FileUpload />
          </Grid>
          <Grid item md={4}>
            <UserInfoCard user={userData.user} />
          </Grid>
          <Grid item md={4}>
            <Box justify={"center"}>
              <Button color="primary" variant="contained" href={"/editProfile/" + userData.user}>Edit Profile</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Container>
        <h2>LERNING</h2>
        <span>
          <Button variant="contained" color="primary" href="/courses">
            Browse
            </Button>
        </span>
        {learningCourses.length ? (
          <Grid container spacing={3}>
            {learningCourses.map(course => (
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

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Container>
        <h2>TEACHING</h2>
        <Button variant="contained" color="primary" href={"/teach/" + userData.user}>
          New Course
            </Button>
        {teachingCourses.length ? (
          <Grid container spacing={3}>
            {teachingCourses.map(course => (
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


