import React from 'react';
import Button from "@material-ui/core/Button";

function CompleteCourse() {

  return (
    <div>
      <h1>Congratulations!</h1>
      <h3>Keep LERNing</h3>
      <Button variant="contained" color="primary" href="/courses">Browse</Button>
    </div>
  )

}

export default CompleteCourse;