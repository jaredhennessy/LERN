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

  // Gets courses taught by a specific user
  getUserTeachingCourses: function(id) {
    return axios.get("/api/courses/i/" + id);
  },

  // Gets courses taken by a specific user
  getUserLearningCourses: function(id) {
    return axios.get("/api/users/courses/" + id);
  },

  // Returns the page with the specified pageNumber in the given course
  getCoursePage: function(courseID, pageNumber) {
    return axios.get(`/api/pages/c/${courseID}/p/${pageNumber}`);
  },

  // Reads & updates the courses field in the User model
  startCourse: function(courseID, userID) {
    return axios.put("/api/users/start", {
      userId: userID,
      courseId: courseID
    });
  },

  // Updates the pageNumber field in the courses array of the User model in the specified direction, or returns complete
  updateCoursePage: function(courseID, userID, direction, endPage) {
    return axios.put("/api/users/move/" + direction, {
      userId: userID,
      courseId: courseID,
      endPage: endPage
    });
  },

  // Calls API to check if JSON web token is valid
  confirmToken: function(tokenLocal) {
    return axios.post("/api/users/checkToken", null, {
      headers: { authorization: tokenLocal }
    });
  },

  // If web token is valid, then return the user data associated with the token
  getUserWithToken: function(tokenLocal) {
    return axios.get("/api/users", {
      headers: { authorization: "Bearer " + tokenLocal }
    });
  },

  // Checks user credentials to log user in
  userLogin: function(username, password) {
    return axios.post("/api/users/login", {
      username: username,
      password: password
    });
  },

  // Checks logs user out
  userLogout: function() {
    return axios.delete("/api/users/logout");
  },

  // Sends new user object to database to register user
  registerUser: function(newUser) {
    return axios.post("/api/users/register", newUser)
  }

};
