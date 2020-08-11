import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";

export default function CategorySelector({ handleChange, selectedCategories }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => loadCategories(), []);

  // loads all categories
  function loadCategories() {
    API.getAllCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }

  function highlightSelected(id) {
    let foundCategory = "secondary"
    selectedCategories.forEach(course => {
      if (course.category._id === id) {
        foundCategory = "primary"
      }
    })
    return foundCategory;
  }

  function countCategories() {
    let categories = [];
    selectedCategories.forEach(course => {
      if (!categories.includes(course.category.category)) categories.push(course.category.category);
    })
    if (categories.length === 1) return "secondary";
    return "primary";
  }

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Button color={countCategories()} onClick={e => handleChange("all")} value="all">
          All
        </Button>
      </Grid>
      {categories.map(category => (
        <Grid item key={category._id}>
          <Button
            onClick={() => {handleChange(category._id)}}
            value={category._id}
            color={highlightSelected(category._id)}
          >
            {category.category}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
