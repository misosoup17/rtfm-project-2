var db = require("../models");

module.exports = function(app) {
  // Register the user
  app.post("/api/register", function(req, res) {
    db.User.create(req.body).then(function(user) {
      res.json(user);
    });
  });
};
