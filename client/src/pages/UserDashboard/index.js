import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import UserAvatar from "../../components/UserAvatar";
import UserInfoCard from "../../components/UserInfoCard";
import UserStatsCard from "../../components/UserStatsCard";
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
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({

  topMarg: {
    marginTop: "1rem",
  },

}));




export default function UserDashboard() {
  const { userData } = useContext(UserContext);
  const [userCourses, setTeachingCourses] = useState({
    teaching: [],
    learning: [],
    // completed: []
  });
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const unCheck = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    const getCourses = async () => {
      let teachingCourses = await API.getUserTeachingCourses(userData._id);
      console.log("teaching", teachingCourses)
      let learningCourses = await API.getUserLearningCourses(userData._id);
      console.log("learning", learningCourses)
      // let completedCourses = await API.getUserCompletedCourses(userData._id);
      // console.log("complete", completedCourses)
      setTeachingCourses({
        teaching: teachingCourses.data,
        learning: learningCourses.data.courses,
        // completed: completedCourses.data.courses,
      })
    }
      getCourses();
      unCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("teachLen", userCourses.teaching.length);
  console.log("learnLen", userCourses.learning.length);
  // console.log("completeLen", userCourses.completed.length);

  return (
    <Container>
      {/* <Container> */}
        <Grid className={classes.topMarg} container spacing={3}>
          <Grid item md={4}>
            <UserAvatar user={userData.user} />
            <PictureUpload />
          </Grid>
          <Grid item md={4}>
            <UserInfoCard user={userData.user} />
          </Grid>
          <Grid item md={4}>
            <UserStatsCard  learningCoursesLength={userCourses.learning.length} teachingCoursesLength={userCourses.teaching.length}/>
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
                <Slide
                  direction="left"
                  in={checked}
                  style={{ transitionDelay: checked ? "250ms" : "500ms" }}
                >
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
                </Slide>
              </Grid>
            ))}
          </Grid>
        ) : (
          <div >
          <Typography gutterBottom variant="h5" component="h3">
            You have not enrolled in any courses
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            Click Browse to view Courses
          </Typography>
        </div>
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
                <Slide
                  direction="left"
                  in={checked}
                  style={{ transitionDelay: checked ? "250ms" : "500ms" }}
                >
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
                </Slide>
              </Grid>
            ))}
          </Grid>
        ) : (
          <div >
          <Typography gutterBottom variant="h5" component="h3">
            You have not taught any courses
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            Click New Course to teach a course
          </Typography>
        </div>
          )}
      </Container>
    </Container>
  );
}


