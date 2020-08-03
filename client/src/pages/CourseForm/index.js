import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {

  },
  text: {
    width: "60%",
    textAlign: "center",
    position: "relative",
    top: "0.8rem",
    left: "20%",
    right: "20%",
    // bottom: "4rem",
  },

}));


function Teach() {

  const classes = useStyles();

  return (
    <div>
      <br />
      <h1>Course Form</h1>

      <p className={classes.text}>
        In LERN, we believe in powerful education for all, no compromises, no fees…
      </p>
      {/* <br /> */}
      <p className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br />
      {/* <Button variant="contained" color="primary" type="submit" onClick={<}>I agree to the terms</Button> */}
      <br />
      {/* <Button variant="contained" color="primary" type="submit" onClick={<Home />}>I decline, take me back</Button> */}
      <br />

    </div>

  )
}

export default Teach;
