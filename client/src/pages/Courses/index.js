import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import CategorySelector from "../../components/CategorySelector";
import Slide from "@material-ui/core/Slide";
import SearchBar from "../../components/SearchBar";
import Paginate from "../../components/Paginate";
import { makeStyles } from "@material-ui/core/styles";

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
  const [coursesPerPage] = useState(16);
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => loadCourses(), []);

  const handleChange = catId => {
    unCheck();
    if (catId === "all") {
      loadCourses();
    } else {
      loadCoursesByCategory(catId);
      console.log(catId);
    }
  };

  const unCheck = () => {
    setChecked((prev) => !prev);
  };


  const handleInputChange = e => {
    setSearch(e.target.value);
    unCheck();
  };

  //loads courses containing search
  useEffect(() => {
    setFilteredCourses(
      courses.filter(course => {
        return course.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, courses]);

  //loads all courses
  function loadCourses() {
    API.getAllCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
      unCheck();
  }

  //loads courses of selected category
  function loadCoursesByCategory(categoryId) {
    API.getCoursesByCategory(categoryId)
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
    console.log(categoryId);
    unCheck();
  }

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  //Change page
  const paginator = pageNumber => setCurrentPage(pageNumber);
  // console.log(currentPage);

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
                      courseID={course.id}
                    />
                  </Paper>
                </Slide>
              </Grid>
            ))}
          </Grid>
        ) : (
          <h3>No Results</h3>
        )}
      </div>
      <Paginate
        coursesPerPage={coursesPerPage}
        totalCourses={courses.length}
        paginator={paginator}
      />
    </Container>
  );
}
