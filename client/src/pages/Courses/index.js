import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import CategorySelector from "../../components/CategorySelector";
// import Grow from "@material-ui/core/Grow";
import SearchBar from "../../components/SearchBar";
import Paginate from "../../components/Paginate";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Grow ref={ref} {...props} />;
// });

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(16);
  // const [loading, setLoading] = useState(false);

  useEffect(() => loadCourses(), []);

  const handleChange = (catId) => {
    if (catId === "all") {
      loadCourses();
    } else {
      loadCoursesByCategory(catId);
      console.log(catId);
    }
  };

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  //loads courses containing search
  useEffect(() => {
    setFilteredCourses(
      courses.filter(course => {
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

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  //Change page
  const paginator = (pageNumber) => setCurrentPage(pageNumber);
  // console.log(currentPage);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6}>
      <h1>Browse our Courses</h1>
      </Grid>
      <Grid item md={6}>
          <SearchBar handleInputChange={handleInputChange}
          />
        </Grid>
      </Grid>

      {/* <Grid container spacing={3}> */}
        {/* <Grid item md={6}>
          <SearchBar handleInputChange={handleInputChange}
          />
        </Grid> */}
        {/* <Grid item md={6}> */}
          <CategorySelector handleChange={handleChange} loadCourses={loadCourses} />
        {/* </Grid> */}
      {/* </Grid> */}
      <div>
        {currentCourses.length ? (
          <Grid container spacing={3}>
            {currentCourses.map(course => (
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
      <Paginate coursesPerPage={coursesPerPage} totalCourses={courses.length} paginator={paginator}/>
    </Container>
  );
}
