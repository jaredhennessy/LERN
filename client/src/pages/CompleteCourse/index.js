import React, { useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";
import { useParams } from 'react-router-dom';
import API from "../../utils/API";

function CompleteCourse() {
  const [courseData, setCourseData] = useState();
  const params = useParams();

  useEffect(() => {
    const getCourse = async () => {
      let courseDetails = await API.getCourse(params.course);
      setCourseData(courseDetails.data);
    }
    getCourse();
  }, [params.course]);

  return (
    (courseData !== undefined) ? (
      <div>
        <h1>Congratulations!</h1>
        <h2>You completed {courseData.title}!</h2>
        <h3>Keep LERNing</h3>
        <Button variant="contained" color="primary" href="/courses">Browse</Button>
      </div>
    ) : (
        <div>
        </div>
      )
  )
}

export default CompleteCourse;