import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import Container from "@material-ui/core/Container";
import UserContext from "../../UserContext/UserContext";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
      justify: "space-between",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { userData } = useContext(UserContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (

    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  // Array to store mobile menu items, will be rendered by .map
  const menuItems = [
    {
      ariaLabel: "donate",
      icon: <MonetizationOnIcon/>,
      pLabel: "Donate",
      link: "/donate"
    },
    {
      ariaLabel: "home",
      icon: <HomeIcon/>,
      pLabel: "Home",
      link: "/"
    },
    {
      ariaLabel: "courses",
      icon: <CategoryIcon href="/courses"/>,
      pLabel: "Courses",
      link: "/courses"
    },
    {
      ariaLabel: "teach",
      icon: <CreateIcon href="/teach"/>,
      pLabel: "Teach!",
      link: "/teach"
    },
    {
      ariaLabel: "about",
      icon: <InfoIcon href="/about"/>,
      pLabel: "About LERN",
      link: "/about"
    }]

  // Mobile menu additions if logged IN
  const loggedInMenu = [
    {
      ariaLabel: "profile",
      icon: <AccountCircleIcon/>,
      pLabel: "Profile",
      link: "/users/" + userData.user
    },
    {
      ariaLabel: "logout",
      icon: <ExitToAppIcon/>,
      pLabel: "Logout",
      link: "/logout"
    }
  ]

  // Mobile menu additions if logged OUT
  const loggedOutMenu = [
    {
      ariaLabel: "register",
      icon: <PersonAddIcon/>,
      pLabel: "Register",
      link: "/register"
    },
    {
      ariaLabel: "login",
      icon: <LockOpenIcon/>,
      pLabel: "Login",
      link: "/login"
    }
  ]


  return (
    <div className={classes.grow}>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button color="inherit" href="/donate">Donate</Button>
              <Button color="inherit" href="/">Home</Button>
              <Button color="inherit" href="/courses">Courses</Button>
              <Button color="inherit" href="/teach">Teach!</Button>
              <Button color="inherit" href="/about">About LERN</Button>
              {userData.user ? (
                <>
                  <Button color="inherit" href={"/users/" + userData.user}>Profile</Button>
                  <Button color="inherit" href="/logout">Logout</Button>
                </>
              ) : (
                  <>
                    <Button color="inherit" href="/register">Register</Button>
                    <Button color="inherit" href="/login">Login</Button>
                  </>
                )}

            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Container>
      {/* renderMobileMenu */}
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {menuItems.map(item => (
          <MenuItem key={item.pLabel} component={Link} to={item.link} >
            <IconButton aria-label={item.ariaLabel} color="inherit">
              <Badge color="secondary">
                {item.icon}
              </Badge>
            </IconButton>
            <p>{item.pLabel}</p>
          </MenuItem>
        ))}
        {userData.user ? (loggedInMenu.map(item => (
          <MenuItem key={item.pLabel} component={Link} to={item.link}>
            <IconButton aria-label={item.ariaLabel} color="inherit">
              <Badge color="secondary">
                {item.icon}
              </Badge>
            </IconButton>
            <p>{item.pLabel}</p>
          </MenuItem>
        ))) : (loggedOutMenu.map(item => (
          <MenuItem key={item.pLabel} component={Link} to={item.link} >
            <IconButton aria-label={item.ariaLabel} color="inherit">
              <Badge color="secondary">
                {item.icon}
              </Badge>
            </IconButton>
            <p>{item.pLabel}</p>
          </MenuItem>
        )))}
      </Menu>
      {renderMenu}
    </div>
  );
}
