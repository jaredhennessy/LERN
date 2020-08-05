import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function SearchBar( handleInputChange) {

  return (
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Course Name" placeholder="Search Course by Title" variant="outlined" type="search" onChange={handleInputChange} 
      // value={setSearch}
      />
    </form>
  );
}