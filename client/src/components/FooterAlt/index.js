import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

export default function PageFooter() {
  return (
    <footer>
     
     <Divider style={{ margin: "24px auto", width: "80%" }} />
     <Accordion>
        <AccordionSummary href="AccordionDetails">
            <Grid container justify={"center"} spacing={2}>
            <Grid item md={12}>
                  <Typography align={"center"}>
                  © Copyright 2020 LERN
                </Typography>
                </Grid>
                </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  
        {/* <Grid item xs={12} sm={6} md={3}>
            <Box>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            About
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Legal
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Privacy Policy
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Box>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
          Contact LERN
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Disclaimers
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Cookie Statement
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <YouTubeIcon />
        </Grid> */}
      {/* </Grid> */}

      {/* <Divider style={{ margin: "24px auto", width: "80%" }} />
      <Typography variant="caption" align={"center"}>
        © Copyright 2020 LERN
      </Typography> */}
    </footer>
  );
}