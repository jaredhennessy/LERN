import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ColorLensTwoToneIcon from '@material-ui/icons/ColorLensTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

  topMarg: {
    marginTop: "1rem",
  },

}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <h1>Welcome to LERN!</h1>
      <h2>Our highest priority is simple, open-source, education.</h2>
      <Grid container spacing={3}>
      <Grid item md={2}></Grid>
        <Grid item md={2} className={classes.topMarg}>
          <ColorLensTwoToneIcon fontSize="large" color="primary"/>
          <Typography variant="h5">
            LERN a new skill
          </Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
        <PublicTwoToneIcon fontSize="large" color="primary"/>
        <Typography variant="h5">
            Share Your Knowledge
          </Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
          <FitnessCenterTwoToneIcon fontSize="large" color="primary"/>
        <Typography variant="h5">
            Flex Your Brain
          </Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
          <AllInclusiveIcon  fontSize="large" color="primary"/>
        <Typography variant="h5">
            Unlimited Learning Potential
          </Typography>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item md={6} className={classes.topMarg}>
          <Button color="primary" href="/courses">
            Browse Courses
          </Button>
        </Grid>
        <Grid item md={6} className={classes.topMarg}>
          <Button color="primary" href="/register">
            Start LERNing for Free
          </Button>
        </Grid>
      </Grid>
      <br />
      <img
        alt="Education is the most powerful weapon we can use to change the world. -Nelson Mandela"
        src={require("../../images/home.jpg")}
        width="full width"
      />
    </div>
  );
}

export default Home;
