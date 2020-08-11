import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { positions } from '@material-ui/system';
import Avatar from "@material-ui/core/Avatar";
import UserContext from "../../UserContext/UserContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  banner: {
    width: "inherit",
    height: "inherit",
    zIndex: 0,
    position: "relative",
  },
  avatar: {
    position: "absolute",
    right: "1em",
    top: "1rem",
    zIndex: 1,
    [theme.breakpoints.down(200)]: {
      width: theme.spacing(1),
      height: theme.spacing(1),
    },
    [theme.breakpoints.between(200, 400)]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    [theme.breakpoints.between(400, "sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
    [theme.breakpoints.between("lg", "xl")]: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    [theme.breakpoints.up("xl")]: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  },
  logo: {
    position: "absolute",
    zIndex: 1,
    [theme.breakpoints.down(200)]: {
      height: "1rem",
      left: "1rem",
      top: "0.2rem",
    },
    [theme.breakpoints.between(200, 400)]: {
      height: "1rem",
      left: "1rem",
      top: "1rem",
    },
    [theme.breakpoints.between(400, "sm")]: {
      height: "2rem",
      left: "2rem",
      top: "2rem",
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: "5rem",
      left: "4rem",
      top: "2rem",
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: "7rem",
      left: "5rem",
      top: "3rem",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      height: "8rem",
      left: "5rem",
      top: "4rem",
    },
    [theme.breakpoints.up("xl")]: {
      height: "10rem",
      left: "6rem",
      top: "5rem",
    },
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
          className={classes.avatar}
          src={"/api/files/" + userData.userIMG}
          href={"/users/" + userData.user}
        />
      </a>
      <img
        alt="LERN logo"
        src={require("../../images/LERN_Blue.png")}
        className={classes.logo}
      ></img>
    </div>
  );
}

export default Header;
