import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import UserContext from "../../UserContext/UserContext";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: "auto",
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function UserAvatar() {
  const { userData } = useContext(UserContext);
  const [grow, setGrow] = useState(true);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grow in={grow} {...(grow ? { timeout: 1000 } : {})}>
        <Avatar
          alt={userData.user.toUpperCase()}
          src={"/api/files/" + userData.userIMG}
          className={classes.large}
        />
      </Grow>
    </div>
  );
}
