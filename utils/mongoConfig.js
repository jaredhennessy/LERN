// Store connection info used in multiple places
module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/lerndb"
};
