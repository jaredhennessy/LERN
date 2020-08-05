import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import CategorySelector from "../../components/CategorySelector";
import Grow from "@material-ui/core/Grow";
import SearchBar from "../../components/SearchBar";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Grow ref={ref} {...props} />;
// });

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([])
  useEffect(() => loadCourses(), []);

  const handleChange = e => {
    if (e.target.value === "all") {
      loadCourses();
    } else {
    loadCoursesByCategory(e.target.value);
  }
  };

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  //loads courses containing search
  useEffect(() => {
    setFilteredCourses(
      courses.filter( course => {
      return course.title.toLowerCase().includes(search.toLowerCase())
    })
    )
  }, [search, courses])

  //loads all courses
  function loadCourses() {
    API.getAllCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  //loads courses of selected category
  function loadCoursesByCategory(categoryId) {
    API.getCoursesByCategory(categoryId)
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
    console.log(categoryId);
  }

  return (
    <Container>
      <h1>Courses</h1>

      <Grid container spacing={3}>
        <Grid item md={6}>
          <SearchBar handleInputChange={handleInputChange}
          />
        </Grid>
        <Grid item md={6}>
          <CategorySelector handleChange={handleChange} loadCourses={loadCourses}/>
        </Grid>
      </Grid>
      <div>
        {filteredCourses.length ? (
          <Grid container spacing={3}>
            {filteredCourses.map(course => (
              <Grid item md={3} key={course.id}>
                <Paper 
                // TransitionComponent={Transition}
                >
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
              </Grid>
            ))}
          </Grid>
        ) : (
          <h3>No Results</h3>
        )}
      </div>
    </Container>
  );
}
