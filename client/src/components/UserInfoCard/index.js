import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../../UserContext/UserContext";
import Moment from "react-moment";

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

export default function UserInfoCard() {
  const classes = useStyles();
  const { userData } = useContext(UserContext);

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography className={classes.leftText} variant="h2">
          {userData.user}
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          {userData.email}
        </Typography>
        <Typography className={classes.leftText} variant="h5">
          LERNer since{" "}
          <Moment format="DD/MMM/YYYY" local>
            {userData.dateCreated}
          </Moment>
        </Typography>
      </CardContent>
    </Card>
  );
}
