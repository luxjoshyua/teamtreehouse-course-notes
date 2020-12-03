const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// middleware
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      // catch errors, render out error page
      res.render("error", { error: err });
    }
  };
}

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

// PROMISES
function getUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const users = JSON.parse(data);
        resolve(users);
      }
    });
  });
}

// ASYNC/AWAIT
// keyword await must always be used inside an asynchronous function
// await keyword can be used with any function that returns a promise
// call our asyncHandler middleware func
app.get(
  "/",
  asyncHandler(async (req, res) => {
    // save the value getUsers returns to a variable
    // wait for this line to finish
    const users = await getUsers();
    // can perform multiple async functions here e.g.
    // const anotherFunc = await getPassword();
    // before we move on to the next line of code
    res.render("index", { title: "Users", users: users.users });
  })
);

app.listen(3000, () => console.log("App listening on port 3000!"));
