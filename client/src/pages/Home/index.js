import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FitnessCenterTwoToneIcon from "@material-ui/icons/FitnessCenterTwoTone";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import ColorLensTwoToneIcon from "@material-ui/icons/ColorLensTwoTone";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import HeroBrain from "../../images/brain2.png";
import HeroBooks from "../../images/Books.jpg";
import Collapse from "@material-ui/core/Collapse";


const useStyles = makeStyles(theme => ({
  topMarg: {
    marginTop: "1rem",
  },

  topMargTen: {
    marginTop: "10rem",
  },

  topMargFive: {
    marginTop: "5rem",
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
    backgroundImage: "url(" + HeroBrain + ")",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
  },

  // heroImageBooks: {
  //   backgroundImage: "url(" + HeroBooks + ")",
  //   backgroundColor: "#FFFFFF",
  //   height: "300px",
  //   backgroundPosition: "right",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   position: "relative",
  //   backgroundOpacity: 0.7,
  // },

  // heroTextBooks: {
  //   opacity: 1,
  // },

  largeButton: {
    height: "60px",
    width: "180px",
  },

  expandButton: {
    height: "60px",
  },

  boldFont: {
    fontWeight: "bold",
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
                {/* <Grid item lg={5}></Grid> */}
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item md={2} className={classes.topMargFive}>

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
                {/* <Grid item lg={3}></Grid> */}
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item md={5} className={classes.topMargTen}>
                  <Typography
                    className={classes.boldFont}
                    variant="h2"
                    color="primary"
                    align="left"
                  >
                    Our highest priority is simple, open-source education
                  </Typography>
                </Grid>
                {/* <Grid item lg={6}></Grid> */}
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item md={2} className={classes.topMargFive}>
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
                <Grid item lg={9} className={classes.topMargFive}></Grid>

                {/* </Grid>
          <Grid container spacing={3}> */}
                <Grid item xs={1}></Grid>
                <Grid item md={2} className={classes.topMargFive}>
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
                <Grid item lg={9} className={classes.topMargFive}></Grid>
              </Grid>
            </div>
          </Collapse>
        </div>
      </div>
      {/* <h1>Welcome to LERN!</h1>
      <h2>Our highest priority is simple, open-source, education.</h2> */}

      {/* 
      <Grid container spacing={3}>
        <Grid item md={6} className={classes.topMarg}>
          <Button color="primary" href="/courses">
            Browse Courses
          </Button>
        </Grid>
        <Grid item md={6} className={classes.topMarg}>
          <Button color="primary" href="/register">
            Start LERNing for Free
          </Button>
        </Grid>
      </Grid> */}

      {/* <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
<div className={classes.brainHolder}>


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
      

      {/* <polygon points="0,100 50,00, 100,100" className={classes.polygon} /> */}
      {/* <div>
        <Grid container spacing={3}>
          <Grid item md={2}></Grid>
          <Grid item md={2} className={classes.topMarg}>
            <Button
              color="primary"
              variant="contained"
              fullWidth={true}
              href="/courses"
              // size="large"
              className={classes.largeButtons}
            >
              Browse Courses
            </Button>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid item md={6}></Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={2}></Grid>
          <Grid item md={2} className={classes.topMarg}>
            <Button
              color="primary"
              variant="contained"
              fullWidth={true}
              href="/register"
              // size="large"
              className={classes.largeButtons}
            >
              Start LERNing
            </Button>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid item md={6} className={classes.topMarg}></Grid>
        </Grid>
      </div>
      </div> */}

      {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary"/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.brainTop}
        >
             <div className={classes.heroText}>
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
         
        </AccordionSummary>
        <AccordionDetails className={classes.brainLower}>

        <Grid container spacing={3}>
            <Grid item md={2}></Grid>
            <Grid item md={2} className={classes.topMarg}>
              <Button
                color="primary"
                variant="contained"
                fullWidth={true}
                href="/courses"
                // size="large"
                className={classes.largeButtons}
              >
                Browse Courses
              </Button>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item md={6}>
     
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={2}></Grid>
            <Grid item md={2} className={classes.topMarg}>
              <Button
                color="primary"
                variant="contained"
                fullWidth={true}
                href="/register"
                // size="large"
                className={classes.largeButtons}
              >
                Start LERNing
              </Button>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item md={6} className={classes.topMarg}></Grid>
          </Grid>


        </AccordionDetails>
      </Accordion> */}

      {/* <div className={ ? "show" : ""}>
        <div className={classes.heroText}>
          
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
                  {/* Our highest priority is simple, open-source, education. */}

      {/* // </div> */}

      {/* <div className={classes.heroImageBooks}>
        <div className={classes.heroTextBooks}>
          <div>
            <Grid container spacing={3}>
              <Grid item md={1}></Grid>
              <Grid item md={6}>
                <Typography
                  className={classes.boldFont}
                  variant="h2"
                  color="primary"
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
                <Typography variant="h4" color="primary" align="left">
                  Expand your mind
                  Our highest priority is simple, open-source, education.
                </Typography>
              </Grid>
              <Grid item md={5}></Grid>
            </Grid>
          </div>
          <Grid container spacing={3}>
            <Grid item md={2}></Grid>
            <Grid item md={2} className={classes.topMarg}>
              <Button
                color="primary"
                variant="contained"
                fullWidth={true}
                href="/courses"
                // size="large"
                className={classes.largeButtons}
              >
                Browse Courses
              </Button>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item md={6}>
              <Button color="primary" href="/register">
                Start LERNing for Free
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={2}></Grid>
            <Grid item md={2} className={classes.topMarg}>
              <Button
                color="primary"
                variant="contained"
                fullWidth={true}
                href="/register"
                // size="large"
                className={classes.largeButtons}
              >
                Start LERNing
              </Button>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item md={6} className={classes.topMarg}></Grid>
          </Grid>
        </div>
      </div> */}

      <Grid container spacing={3}>
        <Grid item md={2}></Grid>
        <Grid item md={2} className={classes.topMarg}>
          <ColorLensTwoToneIcon fontSize="large" color="primary" />
          <Typography variant="h5">LERN a new skill</Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
          <PublicTwoToneIcon fontSize="large" color="primary" />
          <Typography variant="h5">Share Your Knowledge</Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
          <FitnessCenterTwoToneIcon fontSize="large" color="primary" />
          <Typography variant="h5">Flex Your Brain</Typography>
        </Grid>
        <Grid item md={2} className={classes.topMarg}>
          <AllInclusiveIcon fontSize="large" color="primary" />
          <Typography variant="h5">Unlimited Learning Potential</Typography>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>

     <br />
      <img
        alt="Education is the most powerful weapon we can use to change the world. -Nelson Mandela"
        src={require("../../images/home.jpg")}
        width="full width"
      />
    </div>
  );
}
