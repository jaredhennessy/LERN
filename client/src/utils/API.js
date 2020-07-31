import axios from "axios";

export default {
    //Gets all courses
  getCourses: function () {
    return axios.get("/api/courses");
  },
  //Gets all courses of a particular category
  getCourses: function (category) {
    return axios.get("/api/courses/" + category);
  },
  //Gets a single course by id
  getCourse: function (id) {
    return axios.get("/api/courses/" + id);
  },
};
