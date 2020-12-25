const express = require("express");
const { restart } = require("nodemon");
const app = express();
const routes = require("./routes");

app.use(express.json());
// when a request starts with the path /api, use the routes inside the routes.js file
app.use("/api", routes);

app.use((req, res, next) => {
  // middleware needs to do one of two things: it needs to end the Request-Response cycle
  // or tell Express to move on to the next middleware function
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

// middleware error handler
app.use((err, req, res, next) => {
  // err object
  res.status(err.status || 500);

  res.json({
    error: {
      message: err.message,
    },
  });
});

// router.get("/greetings", (req, res) => {
//   // pass the object to the json method which will convert it for the client
//   res.json({ greeting: "Hello World!" });
// });

app.listen(3000, () => console.log("Quote API listening on port 3000!"));
