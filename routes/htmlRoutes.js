// DEPENDENCIES

var path = require("path");

// ROUTING

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey1", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey1.html"));
  });

  app.get("/survey2", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey2.html"));
  });

  app.get("/survey3", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey3.html"));
  });

  app.get("/survey4", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey4.html"));
  });

  app.get("/survey5", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey5.html"));
  });

  app.get("/survey6", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey6.html"));
  });

  app.get("/diary", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/diary.html"));
  });

};
