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
        Go beyond your existing knowledge, push towards a brighter, empowered
        future, regardless of current finantial situation, this is where whe
        create a space for a safe and accessible learning opportunityby sharing
        what we know to others and getting the same in return, this community
        makes that a reality.
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
