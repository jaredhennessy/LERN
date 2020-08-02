import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import UserAvatar from "../../components/UserAvatar";
import UserInfoCard from "../../components/UserInfoCard";
import Button from "@material-ui/core/Button";
import CourseCard from "../../components/CourseCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import API from "../../utils/API";
import UserContext from "../../UserContext/UserContext";


// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import FileUpload from "../../components/FileUpload";
// import Button from "@material-ui/core/Button";
// import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
// import CourseCard from "../../components/CourseCard";



export default function UserDashboard() {
  const { userData } = useContext(UserContext);
  // const [courses, setCourses] = useState([]);
  useEffect(() => loadCourses(), []);

  const user = useParams();
  const [courses, setCourses] = useState({
    userCourses: [],
  });

  useEffect(() => {
    const getUserCourses = async () => {
      let courseResponse = await Axios.get("/api/users/" + user.id);
      setCourses({ userCourses: courseResponse.data });
    };
    getUserCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadCourses() {
    API.getAllCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <UserAvatar />
          </Grid>
          <Grid item md={4}>
            <UserInfoCard />
          </Grid>
          <Grid item md={4}>
            <Box justify={"center"}>
            {/* <Button color="primary" variant="contained" href={"/editProfile/" + userData.user}>Edit Profile</Button> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <h2>Your Courses</h2>
        <span>
            <Button variant="contained" color="primary" href="/categories">
              Browse
            </Button>
          </span>
        {courses.length ? (
          <Grid container spacing={3}>
            {courses.map(course => (
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

      <Container>
        <h2>Courses You've Taught</h2>
        <Button variant="contained" color="primary" href="/teach">
              New Course
            </Button>
        {courses.length ? (
          <Grid container spacing={3}>
            {courses.map(course => (
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







// export default function EditProfile() {
//   const user = useParams();
//   const [courses, setCourses] = useState({
//     userCourses: [],
//   });

//   useEffect(() => {
//     const getUserCourses = async () => {
//       let courseResponse = await Axios.get("/api/users/" + user.id);
//       setCourses({ userCourses: courseResponse.data });
//     };
//     getUserCourses();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  // return (
  //   <div>
  //     <Grid container spacing={3}>
  //       <Grid item xs={12}>
  //         <h1>My Profile</h1>
  //       </Grid>
  //       <Grid item xs={12} sm={4}>
  //         <h2>Profile Details</h2>
  //         <img
  //           src={process.env.PUBLIC_URL + "/logo192.png"}
  //           alt="profile-pic"
  //           style={{ backgroundColor: "black" }}
  //         ></img>
  //         <FileUpload />
  //       </Grid>
  //       <Grid item xs={12} sm={8}>
  //         <h2>Username: {user.id}</h2>
  //       </Grid>
  //       <Grid item xs={12}>
  //         <Divider />
  //       </Grid>
  //       <Grid item xs={12}>
  //         <h2>My Courses</h2>
  //         <span>
  //           <Button variant="contained" color="primary" href="/teach">
  //             New Course
  //           </Button>
  //         </span>
  //       </Grid>
  //       <Grid item xs={12} container>
  //         {/* <h2>No results</h2> */}
  //         <CourseCard
  //           title={"LERN HTML"}
  //           description={"Description"}
  //           image={"http://www.fillmurray.com/200/200"}
  //           category={"Web Development"}
  //           instructor={user.id}
  //           dateCreated={"Today"}
  //         />
  //       </Grid>
  //       <Grid item xs={12}>
  //         <Divider />
  //       </Grid>
  //       <Grid item xs={12}>
  //         <h2>Courses I'm Taking</h2>
  //         <span>
  //           <Button variant="contained" color="primary" href="/categories">
  //             Browse
  //           </Button>
  //         </span>
  //       </Grid>
  //       <Grid item xs={12} container>
  //         {/* UPDATE TO MAP COURSE CARDS WITH AXIOS RESPONSE */}
  //         {courses.userCourses.length ? (
  //           <Grid item xs={12} sm={12}>
  //             <h2>No results</h2>
  //           </Grid>
  //         ) : (
  //           <>
  //             <Grid item xs={12} sm={3}>
  //               <CourseCard
  //                 title={"LERN HTML"}
  //                 description={"Description"}
  //                 image={"http://www.fillmurray.com/200/250"}
  //                 category={"Web Development"}
  //                 instructor={user.id}
  //                 dateCreated={"Today"}
  //               />
  //             </Grid>
  //             <Grid item xs={12} sm={3}>
  //               <CourseCard
  //                 title={"LERN CSS"}
  //                 description={"Description"}
  //                 image={"http://www.fillmurray.com/225/225"}
  //                 category={"Web Development"}
  //                 instructor={user.id}
  //                 dateCreated={"Today"}
  //               />
  //             </Grid>
  //             <Grid item xs={12} sm={3}>
  //               <CourseCard
  //                 title={"LERN JS"}
  //                 description={"Description"}
  //                 image={"http://www.fillmurray.com/300/300"}
  //                 category={"Web Development"}
  //                 instructor={user.id}
  //                 dateCreated={"Today"}
  //               />
  //             </Grid>
  //           </>
  //         )}
  //       </Grid>
  //     </Grid>
  //   </div>
  // );
// }