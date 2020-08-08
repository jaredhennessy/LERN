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
import PictureUpload from "../../components/PictureUpload";
import Divider from "@material-ui/core/Divider";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

  topMarg: {
    marginTop: "1rem",
  },

}));




export default function UserDashboard() {
  const { userData } = useContext(UserContext);
  const [userCourses, setTeachingCourses] = useState({
    teaching: [],
    learning: []
  });
  const classes = useStyles();

  useEffect(() => {
    const getCourses = async () => {
      let teachingCourses = await API.getUserTeachingCourses(userData._id);
      let learningCourses = await API.getUserLearningCourses(userData._id);
      setTeachingCourses({
        teaching: teachingCourses.data,
        learning: learningCourses.data.courses
      })
    }
      getCourses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {/* <Container> */}
        <Grid className={classes.topMarg} container spacing={3}>
          <Grid item md={4}>
            <UserAvatar user={userData.user} />
            <PictureUpload />
          </Grid>
          <Grid item md={6}>
            <UserInfoCard user={userData.user} />
          </Grid>
          <Grid item md={2}>
            <Box justify={"center"}>
              {/* <Button color="primary" variant="contained" href={"/editProfile/" + userData.user}>Edit Profile</Button> */}
            </Box>
          </Grid>
        </Grid>
      {/* </Container> */}

      <Grid item xs={12}>
        <Divider className={classes.topMarg} />
      </Grid>

      <Container>
        <h2>LERNING</h2>
        <span>
          <Button variant="contained" color="primary" href="/courses">Browse</Button>
        </span>
        {userCourses.learning.length ? (
          <Grid  className={classes.topMarg} container spacing={3}>
            {userCourses.learning.map(course => (
              <Grid item md={3} key={course.Course._id}>
                <Paper>
                  <CourseCard
                    title={course.Course.title}
                    description={course.Course.description}
                    image={course.image}
                    category={course.Course.category.category}
                    instructor={course.Course.instructor.username}
                    dateCreated={course.Course.dateCreated}
                    courseID={course.Course._id}
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
        <Divider className={classes.topMarg}/>
      </Grid>

      <Container>
        <h2>TEACHING</h2>
        <Button variant="contained" color="primary" href={"/teach/" + userData.user}>
          New Course
            </Button>
        {userCourses.teaching.length ? (
          <Grid  className={classes.topMarg} container spacing={3}>
            {userCourses.teaching.map(course => (
              <Grid item md={3} key={course._id}>
                <Paper>
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    category={course.category.category}
                    instructor={course.instructor.username}
                    dateCreated={course.dateCreated}
                    courseID={course._id}
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


