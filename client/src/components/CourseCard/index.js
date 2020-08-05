import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CourseCardModal from "../CourseCardModal";
import Zoom from "@material-ui/core/Zoom";
import { useHistory } from "react-router-dom";


// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    // maxHeight: 345,
  },
  media: {
    height: 140,
  },
  description: {
    maxHeight: 75,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "no-wrap",
  },
  modal: {
    minWidth: 600,
  },
});

export default function CourseCard({
  title,
  description,
  image,
  category,
  instructor,
  dateCreated,
  courseID
}) {

  let history = useHistory();

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const beginCourse = () => {
    history.push(`/pages/c/${courseID}/p/1`)
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            View Details
          </Button>
          <Button size="small" color="primary" onClick={beginCourse}>
            Begin Course
          </Button>
        </CardActions>
      </Card>

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id={title}>{title}</DialogTitle>
          <DialogContent>
            <CourseCardModal
              className={classes.modal}
              title={title}
              description={description}
              image={image}
              category={category}
              instructor={instructor}
              dateCreated={dateCreated}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
