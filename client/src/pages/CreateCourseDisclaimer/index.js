import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  title: {},
  text: {
    width: "60%",
    textAlign: "center",
    position: "relative",
    top: "0.8rem",
    left: "20%",
    right: "20%"
  }
}));

export default function CreateCourseDisclaimer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <br />
      <h1>Terms and Conditions</h1>

      <p className={classes.text}>
        Please review and accept the Terms & Conditions to continue.
        <br />
        <br />
      </p>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Terms & Conditions"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            THE SERVICES AND ALL INCLUDED CONTENT ARE PROVIDED ON AN "AS IS"
            BASIS WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED. THE
            LERN PARTIES SPECIFICALLY DISCLAIM ANY AND ALL WARRANTIES AND
            CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF
            DEALING OR USAGE OF TRADE. THE LERN PARTIES FURTHER DISCLAIM ANY AND
            ALL LIABILITY RELATED TO YOUR ACCESS OR USE OF THE SERVICES OR ANY
            RELATED CONTENT. YOU ACKNOWLEDGE AND AGREE THAT ANY ACCESS TO OR USE
            OF THE SERVICES OR SUCH CONTENT IS AT YOUR OWN RISK. Limitation of
            Liability TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE LERN PARTIES
            SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
            REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
            DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (A)
            YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES;
            (B) ANY CONDUCT OR CONTENT OF ANY PARTY OTHER THAN THE APPLICABLE
            LERN PARTY, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE,
            OR ILLEGAL CONDUCT; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION
            OF YOUR CONTENT OR INFORMATION. IN NO EVENT SHALL LERN'S AGGREGATE
            LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICES EXCEED TWENTY U.S.
            DOLLARS ($20) OR THE TOTAL AMOUNT OF FEES RECEIVED BY LERN FROM YOU
            FOR THE USE OF PAID SERVICES DURING THE PAST SIX MONTHS, WHICHEVER
            IS GREATER. YOU ACKNOWLEDGE AND AGREE THAT THE DISCLAIMERS AND THE
            LIMITATIONS OF LIABILITY SET FORTH IN THIS TERMS OF USE REFLECT A
            REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN YOU AND THE LERN
            PARTIES, AND THAT THESE LIMITATIONS ARE AN ESSENTIAL BASIS TO LERN'S
            ABILITY TO MAKE THE SERVICES AVAILABLE TO YOU ON AN ECONOMICALLY
            FEASIBLE BASIS. YOU AGREE THAT ANY CAUSE OF ACTION RELATED TO THE
            SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION
            ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.
            Indemnification You agree to indemnify, defend, and hold harmless
            the LERN Parties from any and all claims, liabilities, expenses, and
            damages, including reasonable attorneys' fees and costs, made by any
            third party related to: (a) your use or attempted use of the
            Services in violation of these Terms; (b) your violation of any law
            or rights of any third party; or (c) User Content, including without
            limitation any claim of infringement or misappropriation of
            intellectual property or other proprietary rights. Governing Law and
            Jurisdiction The Services are managed by LERN, which is located in
            King County, Washington. You agree that any dispute related to these
            Terms will be governed by the laws of the State of Washington,
            excluding its conflicts of law provisions. You further consent to
            the personal jurisdiction of and exclusive venue in the federal and
            state courts located in and serving King County, Washington as the
            legal forum for any such dispute. Excluding claims for injunctive or
            other equitable relief, for claims related to the Services where the
            total amount sought is less than ten thousand U.S. Dollars
            ($10,000.00 USD), either you or LERN may elect at any point during
            the dispute to resolve the claim through binding,
            non-appearance-based arbitration. The dispute will then be resolved
            using an established alternative dispute resolution ("ADR")
            provider, mutually agreed upon by you and LERN. The parties and the
            selected ADR provider shall not involve any personal appearance by
            the parties or witnesses, unless otherwise mutually agreed by the
            parties; rather, the arbitration shall be conducted, at the option
            of the party seeking relief, online, by telephone, or via written
            submissions alone. Any judgment rendered by the arbitrator may be
            entered in any court of competent jurisdiction. General Terms
            Revisions to the Terms We reserve the right to revise the Terms at
            our sole discretion at any time. Any revisions to the Terms will be
            effective immediately upon posting by us. For any material changes
            to the Terms, we will take reasonable steps to notify you of such
            changes, via a banner on the website, email notification, another
            method, or combination of methods. In all cases, your continued use
            of the Services after publication of such changes, with or without
            notification, constitutes binding acceptance of the revised Terms.
            Severability; Waiver If it turns out that a particular provision of
            these Terms is not enforceable, this will not affect any other
            terms. If you do not comply with these Terms, and we do not take
            immediate action, this does not indicate that we relinquish any
            rights that we may have (such as taking action in the future).
            Content Providers LERN's Content Providers, and integrated services
            providers are third party beneficiaries of the Terms and may enforce
            those provisions of the Terms that relate to them.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Do Not Accept
          </Button>
          {/* <Button onClick={handleClose} color="primary" autoFocus> */}
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/newCourse"
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>

      {/* <br />
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/newCourse"
      >
        I agree to the terms
      </Button>
      <br />
      <br />
      <Button variant="contained" color="primary" component={RouterLink} to="/">
        I decline
      </Button>
      <br /> */}
    </div>
  );
}
