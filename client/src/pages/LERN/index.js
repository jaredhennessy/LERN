import React, { useEffect, useState, useContext } from "react";
import API from "../../utils/API";
import { useParams, Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import UserContext from "../../UserContext/UserContext";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
  topMarg: {
    marginTop: "1rem",
  },

}));

export default function LERN() {
  const [courseData, setCourseData] = useState();
  const { userData } = useContext(UserContext);
  let history = useHistory();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const unCheck = () => {
    setChecked((prev) => !prev);
  };

  // On mount, use the URL parameters to pull and render the course page the user is at
  let currentPage = useParams();
  useEffect(() => {
    const getCourse = async () => {
      let courseResponse = await API.getCoursePage(
        currentPage.course,
        currentPage.page
      );
      setCourseData(courseResponse.data[0]);
    };
    unCheck();
    getCourse();
    
  }, [currentPage.course, currentPage.page]);

  const nextPage = `/pages/c/${currentPage.course}/p/${
    parseInt(currentPage.page) + 1
  }`;
  const prevPage = `/pages/c/${currentPage.course}/p/${
    parseInt(currentPage.page) - 1
  }`;

  // Updates the pageNumber field in the courses array of the User model in the specified direction, or redirects to completed page
  async function updatePage(direction) {

    let courseDetails = await API.getCourse(courseData.course.id);
    let totalPages = courseDetails.data.totalPages;

    let updateResponse = await API.updateCoursePage(
      courseData.course.id,
      userData._id,
      direction,
      totalPages
    );
    if (updateResponse.data.msg === "complete")
      history.push(`/pages/c/${currentPage.course}/complete`);
  }

  return courseData !== undefined ? (
    <div>
      <Container className={classes.topMarg}>
        <Grid container spacing={3}>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
          <Slide
                  direction="left"
                  in={checked}
                  style={{ transitionDelay: checked ? "250ms" : "500ms" }}
                >
            <Card>
              <CardHeader title={courseData.title} />
              <CardActionArea>
                <CardMedia image={courseData.image} title={courseData.title} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  ></Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className=""
                  >
                    {courseData.text}
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  Additional Resources: <a href={courseData.link}>{courseData.link}</a>
                  </Typography> 
                  <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                       {courseData.course.title}
                      </Typography>
                  <br/>
                  <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Page {courseData.pageNumber}
                      </Typography>
              </CardActions>
            </Card>
            </Slide>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Container>

      <div>
        {currentPage.page === "1" ? (
          <Link to={nextPage}>
            
            <Button
              onClick={() => {updatePage("next"); unCheck();}}
            >
              <KeyboardArrowRightIcon color="primary" fontSize="large"/>
            </Button>
          </Link>
        ) : (
          <>  
            <Link to={prevPage}>
              <Button
                onClick={() => {updatePage("prev"); unCheck();}}
              >
                <KeyboardArrowLeftIcon color="primary" fontSize="large"/>
              </Button>
            </Link>
            <Link to={nextPage}>
              <Button
                onClick={() => {updatePage("next"); unCheck();}}
              >
                <KeyboardArrowRightIcon color="primary" fontSize="large"/>
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
}