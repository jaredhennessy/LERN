import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import FileUpload from "../../components/FileUpload";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import CourseCard from "../../components/CourseCard";

export default function EditProfile() {
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

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>My Profile</h1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h2>Profile Details</h2>
          <img
            src={process.env.PUBLIC_URL + "/logo192.png"}
            alt="profile-pic"
            style={{ backgroundColor: "black" }}
          ></img>
          <FileUpload />
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2>Username: {user.id}</h2>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <h2>My Courses</h2>
          <span>
            <Button variant="contained" color="primary" href="/teach">
              New Course
            </Button>
          </span>
        </Grid>
        <Grid item xs={12} container>
          {/* <h2>No results</h2> */}
          <CourseCard
            title={"LERN HTML"}
            description={"Description"}
            image={"http://www.fillmurray.com/200/200"}
            category={"Web Development"}
            instructor={user.id}
            dateCreated={"Today"}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <h2>Courses I'm Taking</h2>
          <span>
            <Button variant="contained" color="primary" href="/categories">
              Browse
            </Button>
          </span>
        </Grid>
        <Grid item xs={12} container>
          {/* UPDATE TO MAP COURSE CARDS WITH AXIOS RESPONSE */}
          {courses.userCourses.length ? (
            <Grid item xs={12} sm={12}>
              <h2>No results</h2>
            </Grid>
          ) : (
            <>
              <Grid item xs={12} sm={3}>
                <CourseCard
                  title={"LERN HTML"}
                  description={"Description"}
                  image={"http://www.fillmurray.com/200/250"}
                  category={"Web Development"}
                  instructor={user.id}
                  dateCreated={"Today"}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <CourseCard
                  title={"LERN CSS"}
                  description={"Description"}
                  image={"http://www.fillmurray.com/225/225"}
                  category={"Web Development"}
                  instructor={user.id}
                  dateCreated={"Today"}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <CourseCard
                  title={"LERN JS"}
                  description={"Description"}
                  image={"http://www.fillmurray.com/300/300"}
                  category={"Web Development"}
                  instructor={user.id}
                  dateCreated={"Today"}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
