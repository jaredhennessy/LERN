import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBar({ handleInputChange }) {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search Course by Title"
        placeholder="Course Title"
        variant="outlined"
        type="search"
        onChange={handleInputChange}
      />
    </form>
  );
}
