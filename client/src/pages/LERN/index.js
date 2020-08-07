import React, { useEffect, useState, useContext } from "react";
import API from "../../utils/API";
import { useParams, Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import UserContext from "../../UserContext/UserContext";

function LERN() {
  const [courseData, setCourseData] = useState();
  const { userData } = useContext(UserContext);
  let history = useHistory();

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

  // Updates the pageNumber field in the courses array of the User model in the specified direction, or redirects to completed page
  async function updatePage(direction) {
    let courseDetails = await API.getCourse(courseData.course.id);
    let totalPages = courseDetails.data.totalPages;
    let updateResponse = await API.updateCoursePage(courseData.course.id, userData._id, direction, totalPages);
    if (updateResponse.data.msg === "complete") history.push(`/pages/c/${currentPage.course}/complete`);
  }

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
            <Link to={nextPage}><Button variant="contained" color="primary" onClick={() => updatePage("next")}>Next Page</Button></Link>            
          ) : (
            <>
            <Link to={prevPage}><Button variant="contained" color="primary" onClick={() => updatePage("prev")}>Previous Page</Button></Link>
            <Link to={nextPage}><Button variant="contained" color="primary" onClick={() => updatePage("next")}>Next Page</Button></Link>
            </>
          )}
        </div>
      </div>
    ) : (
        <div>
        </div>
      )
  )
}

export default LERN;