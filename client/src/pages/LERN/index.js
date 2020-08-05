import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { useParams, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function LERN() {
  const [courseData, setCourseData] = useState();

  // On mount, use the URL parameters to pull and render the course page the user is at
  let currentPage = useParams();
  useEffect(() => {
    const getCourse = async () => {
      let courseResponse = await API.getCoursePage(currentPage.course, currentPage.page)
      setCourseData(courseResponse.data[0])
    }
    getCourse();
  }, [currentPage.course, currentPage.page])

  const nextPage = `/pages/c/${currentPage.course}/p/${parseInt(currentPage.page) + 1}`;
  const prevPage = `/pages/c/${currentPage.course}/p/${parseInt(currentPage.page) - 1}`;

  return (
    (courseData !== undefined) ? (
      <div>
        <h1>Page Title: {courseData.title}</h1>
        <h6>Page Number: {courseData.pageNumber}</h6>
        <h3>Course: {courseData.course.title}</h3>
        <p>Content: {courseData.text}</p>
        <span>Additional Resources: <a href={courseData.link}>{courseData.link}</a></span>
        <div>
          {(currentPage.page === "1") ? (
            <Link to={nextPage}><Button variant="contained" color="primary">Next Page</Button></Link>            
          ) : (
            <>
            <Link to={prevPage}><Button variant="contained" color="primary">Previous Page</Button></Link>
            <Link to={nextPage}><Button variant="contained" color="primary">Next Page</Button></Link>
            </>
          )}
        </div>
      </div>
    ) : (
        <div>
          Page Not Found
        </div>
      )


  )
}

export default LERN;