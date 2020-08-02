import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import withStyles from "@material-ui/core/styles/withStyles"
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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

  }
});

export default function CourseCard({ title, description, image, category, instructor, dateCreated }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
          View Details
        </Button>
        <Button size="small" color="primary">
          Begin Course
        </Button>
      </CardActions>
    </Card>

<div>
{/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
  Slide in alert dialog
</Button> */}
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
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title: {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description: {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category: {category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Instructor: {instructor}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Created: {dateCreated}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary">
          Begin Course
        </Button>
      </CardActions>
    </Card>
  </DialogContent>
</Dialog>
</div>
</div>
  );
}
