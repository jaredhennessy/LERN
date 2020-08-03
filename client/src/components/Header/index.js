import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import { positions } from '@material-ui/system';
import Avatar from '@material-ui/core/Avatar';
// import { urlencoded } from "body-parser";

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
        width: theme.spacing(7),
        height: theme.spacing(7),

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
        height: "100%"
    }
}));

function Header() {

    const classes = useStyles();

    return (
        <div className={classes.parent}>
            <img className={classes.banner} alt="banner" src={require("../../images/banner.jpg")} />
            <Avatar alt="Remy Sharp" className={classes.large, classes.avatar} src={require("../../images/1.jpg")} />
        </div>
    )
}

export default Header;