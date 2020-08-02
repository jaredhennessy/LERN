import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import CategorySelector from "../../components/CategorySelector";
import Grow from '@material-ui/core/Grow';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => loadCourses(), []);

  // const [categories, setCategories] = useState([]);
  // useEffect(() => loadCategories(), []);


  // const classes = useStyles();
  // const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    // loadCoursesByCategory(e.target.value);
  };

  //loads all courses
  function loadCourses() {
    API.getAllCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  //loads all categories
  // function loadCategories() {
  //   API.getAllCategories()
  //   .then(res => setCategories(res.data))
  //   .catch(err => console.log(err));
  // }

  //loads courses of selected category
  // function loadCoursesByCategory(category) {
  //   API.getCoursesByCategory(category)
  //   .then(res => setCourses(res.data))
  //     .catch(err => console.log(err));
  //     console.log(category);
  // }

  //Need to populate category selector with category.category
  //Then set value equal to category.id.$oid?
  //Then getCourses by category using the category id




  return (
    <Container>
      <h1>Courses</h1>
      <CategorySelector handleChange={handleChange} 
      // categories={categories}
      />
      <div>
        {courses.length ? (
          <Grid container spacing={3}>
            {courses.map(course => (
              <Grid item md={3} key={course.id}>
                
                <Paper TransitionComponent={Transition}>
                 
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
      </div>

    </Container>
  );
}