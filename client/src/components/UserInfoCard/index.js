import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import UserDashboard from "../../pages/UserDashboard";

const useStyles = makeStyles({
  card: {
    borderRadius: 0,
    boxShadow: "none",
    alignItems: "left",
  },
});

export default function UserInfoCard() {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Username: 
        </Typography>
        <Typography variant="h5" component="h2">
          Email
        </Typography>
        <Typography variant="h5" component="h2">
          LERNer since:
        </Typography>
      </CardContent>
    </Card>
  );
}
