import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  title: {},
  text: {
    width: "60%",
    textAlign: "center",
    position: "relative",
    top: "0.8rem",
    left: "20%",
    right: "20%"
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div>
      <br />
      <h1>About LERN</h1>

      <p className={classes.text}>
        A group of Web Development students re thinked accesible education...
      </p>
      <p className={classes.text}>
        4 students out of the interest in getting a good grade in their final
        Web Development Bootcamp project, and of course, creating a web
        application that helps others gain access to free learning material,
        LERN was created. Here you can find free material to different areas of
        interest, from DIY to Economics.
      </p>
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
