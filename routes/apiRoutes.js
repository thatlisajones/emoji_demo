// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var feelings = require("../data/feelings.json");

// Routes
// =============================================================
module.exports = function (app) {

  // feeling matcher route
  app.post("/data/api/feelings", function (req, res) {
    console.log(req.body.feelings);
    var userFeelingCodes = req.body.feelings;
    var matchingFeelings = [];

    userFeelingCodes.forEach(function (code) {
      var matching = feelings.find(function (feeling) {
        return feeling.feeling_id == code;
      });
      // console.log("matching", matching);
      matchingFeelings.push(matching);
    });
    res.json(matchingFeelings);

  });

  // journaling routes

  app.post("/api/post", function (req, res) {
    console.log("/api/post")
    db.Post.create(req.body).then(function (result) {
      res.json(result);
    })
  })

  app.get("/api/post/:author", function (req, res) {
    console.log("author search route hit");
    db.Post.findAll({
      where: {
        author: req.params.author,
      }
    }).then(function (dbPost) {
      res.json(dbPost)
    });
  })

};

