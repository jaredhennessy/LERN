import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../../UserContext/UserContext";
import Moment from 'react-moment';

const useStyles = makeStyles({
  card: {
    borderRadius: 0,
    boxShadow: "none",
    alignItems: "left",
  },
});

export default function UserInfoCard() {
  const classes = useStyles();
  const { userData } = useContext(UserContext);

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Username: {userData.user}
        </Typography>
        <Typography variant="h5" component="h2">
          Email: {userData.email}
        </Typography>
        <Typography variant="h5" component="h2">
          LERNer since: <Moment format="DD/MMM/YYYY">{userData.dateCreated}</Moment>
        </Typography>
      </CardContent>
    </Card>
  );
}
