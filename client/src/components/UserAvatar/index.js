import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import UserContext from "../../UserContext/UserContext";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function UserAvatar() {
  const { userData } = useContext(UserContext);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={userData.user.toUpperCase()} src={"/api/files/" + userData.userIMG} className={classes.large} />
      {/* <Avatar alt={name} src={image} className={classes.large} /> */}
    </div>
  )
}

