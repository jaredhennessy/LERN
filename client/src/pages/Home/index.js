import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FitnessCenterTwoToneIcon from "@material-ui/icons/FitnessCenterTwoTone";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import ColorLensTwoToneIcon from "@material-ui/icons/ColorLensTwoTone";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import HeroBrainFull from "../../images/brain_1280.png";
import HeroBrain1000 from "../../images/brain_1000.png";
import HeroBrain600 from "../../images/brain_600.png";
import HeroBrain400 from "../../images/brain_400.png";
import HeroBrain200 from "../../images/brain_200.png";
import HeroBrain100 from "../../images/brain_100.png";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles(theme => ({
  topMarg: {
    marginTop: "1rem",
  },

  topMargTentoFive: {
    marginTop: "10rem",
    [theme.breakpoints.down(500)]: {
      marginTop: "5rem",
    },
  },

  topMargFivetoThree: {
    marginTop: "5rem",
    [theme.breakpoints.down(500)]: {
      marginTop: "3rem",
    },
  },

  topMargFivetoOne: {
    marginTop: "5rem",
    [theme.breakpoints.down(500)]: {
      marginTop: "1rem",
    },
  },

  topMargThree: {
    marginTop: "3rem",
  },

  brainHolder: {
    height: 1000,
    backgroundImage: "linear-gradient(#707070, #404040, #101010)",
  },
  container: {
    width: "100%",
  },

  brain: {
    width: "100%",
    height: 1000,
    backgroundImage: "url(" + HeroBrainFull + ")",
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    marginTop: "3rem",
    backgroundSize: "auto",
    [theme.breakpoints.down(200)]: {
      backgroundImage: "url(" + HeroBrain100 + ")",
    },
    [theme.breakpoints.between(200, 400)]: {
      backgroundImage: "url(" + HeroBrain200 + ")",
    },
    [theme.breakpoints.between(400, "sm")]: {
      backgroundImage: "url(" + HeroBrain400 + ")",
    },
    [theme.breakpoints.between("sm", "md")]: {
      backgroundImage: "url(" + HeroBrain600 + ")",
    },
    [theme.breakpoints.between("md", "lg")]: {
      backgroundImage: "url(" + HeroBrain1000 + ")",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: "url(" + HeroBrainFull + ")",
    },
  },

  education: {

    [theme.breakpoints.down(200)]: {
      width: 100,
    },
    [theme.breakpoints.between(200, 400)]: {
      width: 200,
    },
    [theme.breakpoints.between(400, "sm")]: {
      width: 400,
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 600,
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: 1000,
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },

  largeButton: {
    height: "60px",
    width: "180px",
  },

  expandButton: {
    height: "60px",
  },

  boldFont: {
    fontWeight: "bold",
    [theme.breakpoints.down(320)]: {
      fontSize: 28,
    },
    [theme.breakpoints.between(320, 510)]: {
      fontSize: 36,
    },

  },
}));

export default function Home() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = e => {
    setChecked(prev => !prev);
  };

  return (
    <div>
      <div className={classes.brainHolder}>
        <div className={classes.container}>
          <Collapse in={checked} collapsedHeight={300}>
            <div className={classes.brain}>
              <Grid container spacing={3}>
                <Grid item md={1}></Grid>
                <Grid item md={6} className={classes.topMarg}>
                  <Typography
                    className={classes.boldFont}
                    variant="h2"
                    color="black"
                    align="left"
                  >
                    Welcome to LERN!
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item md={2} className={classes.topMargFivetoOne}>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth={true}
                    onClick={handleChange}
                    // size="large"
                    className={classes.expandButton}
                  >
                    Expand your Mind
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item md={5} className={classes.topMargTentoFive}>
                  <Typography
                    className={classes.boldFont}
                    variant="h2"
                    color="primary"
                    align="left"
                  >
                    Our highest priority is simple, open-source education
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item md={2} className={classes.topMargFivetoThree}>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth={true}
                    href="/courses"
                    className={classes.largeButton}
                  >
                    Browse Courses
                  </Button>
                </Grid>
                <Grid item lg={9} className={classes.topMargFivetoThree}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item md={2} className={classes.topMargFivetoThree}>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth={true}
                    href="/register"
                    // size="large"
                    className={classes.largeButton}
                  >
                    Start LERNing
                  </Button>
                </Grid>
                <Grid item lg={9} className={classes.topMargFivetoThree}></Grid>
              </Grid>
            </div>
          </Collapse>
        </div>
      </div>

      <Collapse in={checked} collapsedHeight={420}></Collapse>
      <div className={classes.brain}>
        <Grid container spacing={3}>
          <Grid item md={1}></Grid>
          <Grid item md={6}>
            <Typography
              className={classes.boldFont}
              variant="h2"
              color="secondary"
              align="left"
            >
              Welcome to LERN!
            </Typography>
          </Grid>
          <Grid item md={5}></Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item md={1}></Grid>
          <Grid item md={6}>
            <Typography variant="h4" color="secondary" align="left">
              Expand your mind
            </Typography>
          </Grid>
          <Grid item md={5}></Grid>
        </Grid>
      </div>

      <Grid container spacing={3}>
        <Grid item md={2}></Grid>
        <Grid item md={2} className={classes.topMarg}>
          <ColorLensTwoToneIcon fontSize="large" color="primary" />
          <Typography variant="h5">LERN a new skill</Typography>
          <Typography variant="p">
              Start a course and learn one page at a time.
            </Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
          <PublicTwoToneIcon fontSize="large" color="primary" />
          <Typography variant="h5">Share Your Knowledge</Typography>
          <Typography variant="p">
              Teach what you know to others.
            </Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
          <FitnessCenterTwoToneIcon fontSize="large" color="primary" />
          <Typography variant="h5">Flex Your Brain</Typography>
          <Typography variant="p">
              LERN a little more each day.
            </Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
          <AllInclusiveIcon fontSize="large" color="primary" />
          <Typography variant="h5">Unlimited Learning Potential</Typography>
          <Typography variant="p">
              Our course list is constantly growing.
            </Typography>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>

      <Grid container spacing={2} className={classes.topMarg}>
        <Grid item xs={12}>
          <img
            alt="Education is the most powerful weapon we can use to change the world. -Nelson Mandela"
            src={require("../../images/home.jpg")}
            className={classes.education}
          />
        </Grid>
      </Grid>
    </div>
  );
}
