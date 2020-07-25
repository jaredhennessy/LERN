const bcrypt = require("bcrypt");

// REPLACE WITH DATABASE IN FUTURE
const users = [];

module.exports = {
  findAll: function(req, res) {
    res.json(users);
  },
  createUser: async function(req, res) {
    try {
      // User password will be salted and hashed by bcrypt
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create a new user with the username and HASHED password
      const newUser = { name: req.body.name, password: hashedPassword }

      // Push to database (array for now), send success status
      users.push(newUser);
      res.status(201).send();
    } catch {
      res.status(500).send();
    }
  },
  userLogin: async function(req, res) {
    // Find user in the database (REPLACE users WITH DATABASE)
    const user = users.find(user => user.name === req.body.name); 

    // If no user, return bad response
    if (user == null) {
      return res.status(400).send("Incorrect credentials");
    }

    // Else, compare user supplied password to the hashed password; use bcrypt compare to avoid timing attacks
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success');
      } else {
        res.status(400).send("Incorrect credentials");
      }
    } catch {
      res.status(500).send();
    }
  }
}