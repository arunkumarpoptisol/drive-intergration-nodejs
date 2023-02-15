var express = require("express");
const { GetRefreshToken, ListAll } = require("../controller");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/storerefreshtoken", async function (req, res, next) {
  const_token = await GetRefreshToken(req.body.code);
  //store the token in your database
  res.send("success");
});

router.post("/listall", async function (req, res) {
  let refreskToken = ""; //write a function that will return refresh token we stored
  let result = await ListAll(req.body, refreskToken);
  // this result will give you event id you can store it res.send(result)
  res.send(result);
});

module.exports = router;
