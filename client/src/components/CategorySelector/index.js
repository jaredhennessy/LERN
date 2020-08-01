import React, { useEffect, useState } from "react";
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Courses from "../../pages/Courses";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function CategorySelector(handleChange, category) {

    const classes = useStyles();

    return (
<FormControl variant="filled" className={classes.formControl} >
        <InputLabel id="category-selector-label">Select Category</InputLabel>
        <Select
          labelId="category-selector-label"
          id="category-selector"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Finance">Finance</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
          <MenuItem value="Math">Math</MenuItem>
          <MenuItem value="Painting">Painting</MenuItem>
          <MenuItem value="Pottery">Pottery</MenuItem>
          <MenuItem value="Fishing">Fishing</MenuItem>
          <MenuItem value="DIY">DIY</MenuItem>
          <MenuItem value="Full-Stack Development">Full-Stack Development</MenuItem>

        </Select>
      </FormControl>
    )
}

