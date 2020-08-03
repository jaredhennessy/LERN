import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function SearchBar(searchCourses, handleInputChange,) {

  return (
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Course Name" variant="outlined" onChange={handleInputChange} value={searchCourses}/>
    </form>
  );
}