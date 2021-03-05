const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/kizen"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/kizen/index.html"));
});

app.listen(process.env.PORT || 3000);
