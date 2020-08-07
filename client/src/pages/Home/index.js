import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <div>
      <h1>Welcome to LERN!</h1>
      <h2>Our highest priority is simple, open-source, education.</h2>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Button color="primary" href="/courses">
            Browse Courses
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button color="primary" href="/register">
            Create an Account
          </Button>
        </Grid>
      </Grid>
      <br />
      <img
        alt="Education is the most powerful weapon we can use to change the world. -Nelson Mandela"
        src={require("../../images/home.jpg")}
      />
    </div>
  );
}

export default Home;
