// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey3.html"));
  });

  app.get("/anger", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page index/anger.html"));
  });

  // If no matching route is found default to home
  app.get("frown", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page index/frown.html"));
  });

  app.get("happy", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page index/happy.html"));
  });

  app.get("laugh", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page index/laugh.html"));
  });

  app.get("sad", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page index/sad.html"));
  });

  app.get("wink", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page index/wink.html"));
  });
};
