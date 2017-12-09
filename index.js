var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));

app.get("/", (request, response) => {
    response.render("index", {});
});

app.listen(3000);
