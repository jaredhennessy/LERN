import React, { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import API from "../../utils/API";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CategorySelector({handleChange}) {
  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  useEffect(() => loadCategories(), []);

    //loads all categories
    function loadCategories() {
      API.getAllCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
    }

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="category-selector-label">Browse by Category</InputLabel>
      
      <Select
        labelId="category-selector-label"
        id="category-selector"
        value="id"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {categories.map(category => (
        <MenuItem value={category._id}>{category.category}</MenuItem>
        ))}
        {/* <MenuItem value="Finance">Finance</MenuItem>
        <MenuItem value="Business">Business</MenuItem>
        <MenuItem value="Math">Math</MenuItem>
        <MenuItem value="Painting">Painting</MenuItem>
        <MenuItem value="Pottery">Pottery</MenuItem>
        <MenuItem value="Fishing">Fishing</MenuItem>
        <MenuItem value="DIY">DIY</MenuItem>
        <MenuItem value="Full-Stack Development">
          Full-Stack Development
        </MenuItem> */}
      </Select>
      
    </FormControl>
  );
}
