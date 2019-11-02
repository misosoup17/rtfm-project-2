var db = require("../models");

module.exports = function(app) {
  // Home page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // Register
  app.get("/register", function(req, res) {
    res.render("register", {});
  });

  // Log-in
  app.get("/login", function(req, res) {
    res.render("login", {});
  });

  // Dashboard
  app.get("/dashboard", function(req, res) {
    res.render("dashboard", {});
  });

  // Resource
  app.get("/resources", function(req, res) {
    res.render("resources", {});
  });

  // Admin
  app.get("/admin", function(req, res) {
    res.render("admin", {});
  });

  // Invite
  app.get("/invite/:id", function(req, res) {
    res.render("invite", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
