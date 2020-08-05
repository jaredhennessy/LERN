import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function LERN() {
  const [courseData, setCourseData] = useState({
    title: undefined,
    pageNumber: undefined,
    text: undefined,
    link: undefined
  });

  useEffect(() => {
    const getCourse = async () => {
      let courseResponse = await API.getCoursePage("5f25ccebd3c0eb0be44eef56", 1)
      console.log(courseResponse);
      setCourseData(courseResponse.data[0])
    }
    getCourse();
  }, [])

  console.log(courseData)

  return (
    (courseData !== undefined) ? (
      <div>
        <h1>Page Title: {courseData.title}</h1>
        <h6>Page Number: {courseData.pageNumber}</h6>
        <p>Content: {courseData.text}</p>
        <p>Additional Resources: {courseData.link}</p>
      </div>
    ) : (
      <div>
      </div>
    )
  )
}

export default LERN;