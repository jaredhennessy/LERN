import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  iconLink: {
    margin: "5rem",
    color: "#F7F7F7",
  },
  accordion: {
    backgroundColor: "#F7F7F7",
  }

}));

export default function PageFooter() {
  const classes = useStyles();
  return (
    <footer>
      <Divider style={{ margin: "24px auto", width: "80%" }} />
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="LERN-team"
          id="LERN-team"
        >
          <Grid container justify={"center"} spacing={2}>
            <Grid item xs={12}>
              <Typography align={"center"}>© Copyright 2020 LERN</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align={"center"}>Meet the LERN Team</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant="h5" component="h3">
              Chris  
              <Link href="https://github.com/cbragg9"
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon className="iconLink" icon={faGithub}/>
              </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Typography variant="h5" component="h3">
              Jared
              <Link href="https://github.com/jaredhennessy"
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon className="iconLink" icon={faGithub}/>
              </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Typography variant="h5" component="h3">
              Christian
              <Link href="https://github.com/cristianmontenegrop"
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon className="iconLink" icon={faGithub}/>
              </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Typography variant="h5" component="h3">
              Dan
              <Link href="https://github.com/thedanitor"
              target="_blank"
              rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub}/>
              </Link>
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </footer>
  );
}
