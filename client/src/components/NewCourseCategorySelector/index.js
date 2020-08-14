import React, { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import API from "../../utils/API";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function CategorySelector({ handleChange }) {
  const classes = useStyles();

  const [selectedCategory, setSelectedCategory] = useState("Select Category");
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
      <InputLabel id="category-selector-label">{selectedCategory}</InputLabel>

      <Select
        labelId="category-selector-label"
        id="category-selector"
        value=""
        onChange={handleChange}
      >
        {categories.map(category => (
          <MenuItem
            onClick={e => {
              setSelectedCategory(category.category);
            }}
            key={category._id}
            id={category._id}
            value={category._id}
            name={category.category}
          >
            {category.category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
