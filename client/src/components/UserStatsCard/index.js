import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    borderRadius: 0,
    boxShadow: "none",
    alignItems: "left",
    // backgroundColor: theme.palette.primary.main,
  },
  leftText: {
    textAlign: "left"
  }
});

export default function UserStatsCard({ teachingCoursesLength, completed, enrolled, inProgress, percentComplete }) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography className={classes.leftText} variant="h5">
          Courses Completed {completed}
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Courses Taught {teachingCoursesLength}
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Total Enrolled Courses {enrolled}
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Current Enrolled Courses {inProgress}
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Course Completion Percentage {percentComplete}
        </Typography>
      </CardContent>
    </Card>
  );
}