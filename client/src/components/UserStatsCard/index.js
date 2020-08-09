import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../../UserContext/UserContext";
// import Moment from 'react-moment';
// import theme from "../../theme"

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

export default function UserStatsCard({learningCoursesLength, teachingCoursesLength}) {
  const classes = useStyles();
  const { userData } = useContext(UserContext);

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography className={classes.leftText} variant="h5">
          Courses Completed
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Courses Taught {teachingCoursesLength}
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          Current Enrolled Courses {learningCoursesLength}
        </Typography>
      </CardContent>
    </Card>
  );
}