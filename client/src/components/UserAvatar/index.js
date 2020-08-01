import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function UserAvatar() {

    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Avatar alt="" src="/static/images/avatar/1.jpg" className={classes.large} />
        {/* <Avatar alt={name} src={image} className={classes.large} /> */}
      </div>
    )
  }
  
