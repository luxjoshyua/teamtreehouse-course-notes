const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

//CALL BACKS
// function getUsers(cb){
//   fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) return cb(err);
//     const users = JSON.parse(data);
//     return cb(null, users);
//   });
// }

// app.get('/', (req,res) => {
//   getUsers((err, users)=>{
//     if(err){
//       res.render('error', {error:err});
//     } else {
//       res.render('index', {title: "Users", users: users.users})
//     }
//   });
// });

// Promises

function getUsers(cb) {
  // pass callback two parameters: resolve, reject
  return new Promise((resolve, reject) => {
    // perform async operation
    // read the json file
    // err and data are our two parameters
    fs.readFile("data.json", "utf-8", (err, data) => {
      // if there's an error, reject the promise by calling the reject parameter method and pass in the error
      if (err) {
        reject(err);
      } else {
        // pass the json formatted variable, set to var users
        // readFile method gives us the data as a string, so need to parse it to json
        const users = JSON.parse(data);
        // resolve the promise, pass it the data
        resolve(users);
      }
    });
  });
}

app.get("/", (req, res) => {
  // run function
  getUsers()
    // chain actions in a cleaner way
    .then((users) => {
      res.render("index", { title: "Users", users: users.users });
    })
    // catch error
    .catch((err) => {
      res.render("error", { error: err });
    });
});

app.listen(3000, () => console.log("App listening on port 3000!"));
