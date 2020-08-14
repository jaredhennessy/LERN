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
        A group of Web Development students rethought accesible education...
      </p>
      <p className={classes.text}>
        LERN was created by four students intersetd in a good grade on their
        final Web Development Bootcamp project and, of course, creating a web
        application that helps others gain access to free learning material.
        Here you can not only find find free material to educate you in
        different subjects, from DIY to Nature to Finance, you can create your
        own course without any web development experience.
      </p>
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
