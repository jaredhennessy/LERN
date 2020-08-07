import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { positions } from '@material-ui/system';
import Avatar from "@material-ui/core/Avatar";
// import { urlencoded } from "body-parser";
import UserContext from "../../UserContext/UserContext";

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: "flex",
  //   "& > *": {
  //     margin: theme.spacing(1),
  //   },
  // },
  // small: {
  //   width: theme.spacing(3),
  //   height: theme.spacing(3),
  // },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  banner: {
    width: "inherit",
    height: "inherit",
    zIndex: 0,
  },
  avatar: {
    position: "fixed",
    right: "0.8rem",
    top: "0.8rem",
    zIndex: 1,
  },
  parent: {
    width: "100%",
    height: "100%",
    marginBottom: -5,
    paddingBottom: 0,
  },
}));

function Header() {
  const { userData } = useContext(UserContext);

  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <img
        className={classes.banner}
        alt="banner"
        src={require("../../images/banner.jpg")}
      />
      <a href={"/users/" + userData.user}>
        <Avatar
          alt={userData.user}
          className={[classes.large, classes.avatar]}
          src={"/api/files/" + userData.userIMG}
          href={"/users/" + userData.user}
        />
      </a>
    </div>
  );
}

export default Header;