import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import UserAvatar from "../../components/UserAvatar";
import UserInfoCard from "../../components/UserInfoCard";
import UserStatsCard from "../../components/UserStatsCard";
import Button from "@material-ui/core/Button";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
    learned: [],
    completed: "",
    enrolled: "",
    inProgress: "",
    percentComplete: "",
  });
  const classes = useStyles();
  const [slide, setSlide] = useState(false);

  const slider = () => {
    setSlide((prev) => !prev);
  };

  useEffect(() => {
    const getCourses = async () => {
      let teachingCourses = await API.getUserTeachingCourses(userData._id);
      let learningCourses = await API.getUserLearningCourses(userData._id);
      let userCourseData = await API.getUserCourseInfo(userData._id);
      setTeachingCourses({
        teaching: teachingCourses.data,
        learning: learningCourses.data.incompleteCourses,
        learned: learningCourses.data.completeCourses,
        completed: userCourseData.data.coursesCompleted,
        enrolled: userCourseData.data.coursesEnrolled,
        inProgress: userCourseData.data.coursesInProgress,
        percentComplete: userCourseData.data.percentComplete,
      })
    }
    getCourses();
    slider();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Grid className={classes.topMarg} container spacing={3}>
        <Grid item md={4}>
          <UserAvatar user={userData.user} />
          <PictureUpload />
        </Grid>
        <Grid item md={4}>
          <UserInfoCard user={userData.user} />
        </Grid>
        <Grid item md={4}>
          <UserStatsCard
            teachingCoursesLength={userCourses.teaching.length}
            completed={userCourses.completed}
            enrolled={userCourses.enrolled}
            inProgress={userCourses.inProgress}
            percentComplete={userCourses.percentComplete}
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider className={classes.topMarg} />
      </Grid>

      <Container>
        <h2>LERNING</h2>
        <span>
          <Button variant="contained" color="primary" href="/courses">Browse</Button>
        </span>
        {userCourses.learning.length ? (
          <Grid className={classes.topMarg} container spacing={3}>
            {userCourses.learning.map(course => (
              <Grid item md={3} key={course.Course._id}>
                <Slide
                  direction="left"
                  in={slide}
                  style={{ transitionDelay: slide ? "250ms" : "500ms" }}
                >
                  <Paper>
                    <CourseCard
                      title={course.Course.title}
                      description={course.Course.description}
                      image={course.Course.image}
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
                You are not enrolled in any courses.
          </Typography>
              <Typography gutterBottom variant="h6" component="h4">
                Click Browse to view Courses
          </Typography>
            </div>
          )}
      </Container>

      <Grid item xs={12}>
        <Divider className={classes.topMarg} />
      </Grid>

      <Container>
        <h2>LERNED</h2>
        <span>
          <Button variant="contained" color="primary" href="/courses">Browse</Button>
        </span>
        {userCourses.learned.length ? (
          <Grid className={classes.topMarg} container spacing={3}>
            {userCourses.learned.map(course => (
              <Grid item md={3} key={course.Course._id}>
                <Slide
                  direction="left"
                  in={slide}
                  style={{ transitionDelay: slide ? "250ms" : "500ms" }}
                >
                  <Paper>
                    <CourseCard
                      title={course.Course.title}
                      description={course.Course.description}
                      image={course.Course.image}
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
                You have not completed in any courses.
          </Typography>
            </div>
          )}
      </Container>

      <Grid item xs={12}>
        <Divider className={classes.topMarg} />
      </Grid>

      <Container>
        <h2>TEACHING</h2>
        <Button variant="contained" color="primary" href={"/teach/" + userData.user}>
          New Course
            </Button>
        {userCourses.teaching.length ? (
          <Grid className={classes.topMarg} container spacing={3}>
            {userCourses.teaching.map(course => (
              <Grid item md={3} key={course._id}>
                <Slide
                  direction="left"
                  in={slide}
                  style={{ transitionDelay: slide ? "250ms" : "500ms" }}
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
                You have not taught any courses.
          </Typography>
              <Typography gutterBottom variant="h6" component="h4">
                Click New Course to teach a course.
          </Typography>
            </div>
          )}
      </Container>
    </Container>
  );
}


