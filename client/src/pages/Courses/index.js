import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import CategorySelector from "../../components/CategorySelector";
import Slide from "@material-ui/core/Slide";
import SearchBar from "../../components/SearchBar";
import ArrowButtons from "../../components/ArrowButtons";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  topMarg: {
    marginTop: "1rem",
  },
  topMargBig: {
    marginTop: "2rem",
  },
}));

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(8);
  const classes = useStyles();
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("left");
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  //loads all courses on page load
  useEffect(() => loadCourses(), []);

  //loads all courses
  function loadCourses() {
    API.getAllCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  //loads courses by category when category button clicked
  const handleChange = catId => {
    if (catId === "all") {
      loadCourses();
    } else {
      loadCoursesByCategory(catId);
      console.log(catId);
    }
    arrowClick("right");
  };

  //loads courses of selected category
  function loadCoursesByCategory(categoryId) {
    API.getCoursesByCategory(categoryId)
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
    console.log(categoryId);
  }

  //searches course names by search bar
  const handleInputChange = e => {
    //loads all courses (resets category selection)
    loadCourses();
    setSearch(e.target.value);
    arrowClick("right");
  };

  //loads courses containing search
  useEffect(() => {
    setFilteredCourses(
      courses.filter(course => {
        return course.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, courses]);

  // Sets the currentPage and slide direction depending on which arrow is clicked
  const arrowClick = direction => {
    const oppDirection = direction === "left" ? "right" : "left";
    //if on last page, go back to page 1 if right arrow clicked
    indexOfLastCourse > courses.length
      ? setCurrentPage(1)
      : setCurrentPage(
          direction === "left" ? currentPage - 1 : currentPage + 1
        );

    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6} className={classes.topMarg}>
          <h1>Browse our Courses</h1>
        </Grid>
        <Grid item md={6} className={classes.topMargBig}>
          <SearchBar handleInputChange={handleInputChange} />
        </Grid>
      </Grid>

      <CategorySelector handleChange={handleChange} loadCourses={loadCourses} />

      <div>
        {currentCourses.length ? (
          <Grid container spacing={3}>
            {currentCourses.map(course => (
              <Grid item md={3} key={course.id}>
                <Slide direction={slideDirection} in={slideIn}>
                  <Paper>
                    <CourseCard
                      title={course.title}
                      description={course.description}
                      image={course.image}
                      category={course.category.category}
                      instructor={course.instructor.username}
                      dateCreated={course.dateCreated}
                      courseID={course.id}
                    />
                  </Paper>
                </Slide>
              </Grid>
            ))}
            <Grid container spacing={3}>
              <Grid item md={4}></Grid>
              <Grid item md={4}>
                <ArrowButtons
                  coursesPerPage={coursesPerPage}
                  totalCourses={courses.length}
                  arrowClick={arrowClick}
                />
                </Grid>
                <Grid item md={4}></Grid>
              </Grid>
            </Grid>
        ) : (
          <div >
            <Typography gutterBottom variant="h5" component="h3">
              No Results
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              Would you like to add a new course?
            </Typography>
            <Button color="primary" href="/teach">
              Teach a Course
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
