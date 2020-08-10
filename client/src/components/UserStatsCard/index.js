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
          Courses Completed <strong>{completed}</strong>
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Courses Taught <strong>{teachingCoursesLength}</strong>
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Total Enrolled Courses <strong>{enrolled}</strong>
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Current Enrolled Courses <strong>{inProgress}</strong>
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Course Completion <strong>{percentComplete}%</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}