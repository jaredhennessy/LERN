import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // minWidth: 600,
    // maxHeight: 345,
    // width: "fit-content",
  },
  media: {
    height: 300,
    width: 600,
  },
//   description: {
//     maxHeight: 75,
//     textOverflow: "ellipsis",
//     overflow: "hidden",
//     whiteSpace: "no-wrap",
//   },
});

export default function CourseCardModal({
  title,
  description,
  image,
  category,
  instructor,
  dateCreated,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
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
  );
}