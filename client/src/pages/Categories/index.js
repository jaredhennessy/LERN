import React from "react";
import Container from "@material-ui/core/Container";
import CourseCard from "../../components/CourseCard";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Categories() {
    return (
        <Container>
            <h1>Categories</h1>
            
            <div>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Paper ><CourseCard/></Paper>
        </Grid>
        <Grid item md={3}>
          <Paper ><CourseCard/></Paper>
        </Grid>
        <Grid item md={3}>
          <Paper ><CourseCard/></Paper>
        </Grid>
        <Grid item md={3}>
          <Paper ><CourseCard/></Paper>
        </Grid>
        <Grid item md={3}>
          <Paper ><CourseCard/></Paper>
        </Grid>
        <Grid item md={3}>
          <Paper ><CourseCard/></Paper>
        </Grid>
        <Grid item md={3}>
          <Paper ><CourseCard/></Paper>
        </Grid>
        <Grid item md={3}>
          <Paper ><CourseCard/></Paper>
        </Grid>
      
      </Grid>
    </div>


            <CourseCard />
        </Container>
    );
}
