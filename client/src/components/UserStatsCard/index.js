import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    borderRadius: 0,
    boxShadow: "none",
    alignItems: "left"
  },
  leftText: {
    textAlign: "left"
  }
});

export default function UserStatsCard({
  teachingCoursesLength,
  completed,
  enrolled,
  inProgress,
  percentComplete
}) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography className={classes.leftText} variant="h5">
          Courses Started <strong>{enrolled}</strong>
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Courses In Progress <strong>{inProgress}</strong>
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Courses Completed{" "}
          <strong>
            {completed} ({percentComplete}%)
          </strong>
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Courses Taught <strong>{teachingCoursesLength}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
