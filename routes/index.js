var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.csrfToken());
  res.render("index", { title: "Express", csrfToken: req.csrfToken() });
});

module.exports = router;
