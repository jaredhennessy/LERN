import React, { useEffect, useState } from "react";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export default function CategorySelector({ handleChange, chosen, variant, btnChange }) {
  // const classes = useStyles();

  const [categories, setCategories] = useState([]);
  useEffect(() => loadCategories(), []);

  // loads all categories
  function loadCategories() {
    API.getAllCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Button color="primary" onClick={e => handleChange("all")} value="all">
          All
        </Button>
      </Grid>
      {categories.map(category => (
        <Grid item key={category._id}>
          <Button
            onClick={() => {handleChange(category._id); btnChange()}}
            value={category._id}
            color="primary"
            // variant={variant}
            // color={category.category === chosen ? "default" : "primary"}
            
          >
            {category.category}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
