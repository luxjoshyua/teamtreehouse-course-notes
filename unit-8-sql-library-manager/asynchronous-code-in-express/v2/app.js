const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

//CALL BACKS
// function retrieves data from data.json
function getUsers(cb) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) return cb(err);
    // once we've parsed the json data
    const users = JSON.parse(data);
    // run this function and pass the list of users to this function
    return cb(null, users);
  });
}

app.get("/", (req, res) => {
  res.send("Hello cool app working here!");
  // pass error first, then get data
  getUsers((err, users) => {
    if (err) {
      // in our error template, we've got error var set to error,
      // which is why we call it error here too
      res.render("error", { error: err });
    } else {
      // render the index page
      // users is the variable that holds the data retrieved
      // and is passed via the callback function
      res.render("index", { title: "Users", users: users.users });
    }
  });
});

app.listen(3000, () => console.log("App listening on port 3000!"));
