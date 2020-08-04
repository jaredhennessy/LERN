import axios from "axios";

export default {
    //Gets all courses
  getAllCourses: function () {
    return axios.get("/api/courses");
  },
  //Gets all courses of a particular category
  getCoursesByCategory: function (categoryId) {
    return axios.get("/api/courses/cat/" + categoryId);
  },
  //Gets a single course by id
  getCourse: function (id) {
    return axios.get("/api/courses/" + id);
  },
  //Gets all categories
  getAllCategories: function() {
    return axios.get("/api/categories");
  },

  getUserTeachingCourses: function(id) {
    return axios.get("/api/courses/i/" + id);
  },
  getUserLearningCourses: function(id) {
    return axios.get("/api/users/courses/" + id);
  }
};
