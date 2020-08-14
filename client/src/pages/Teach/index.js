import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

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

function Teach() {
  const classes = useStyles();

  return (
    <div>
      <br />
      <h1>Ready to give to your community?</h1>

      <p className={classes.text}>
        In LERN, we believe in powerful education for all, no compromises, no
        fees…
      </p>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <br />
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/createCourseDisclaimer"
      >
        Ready to create a course?
      </Button>
      <br />
      <br />
    </div>
  );
}

export default Teach;
