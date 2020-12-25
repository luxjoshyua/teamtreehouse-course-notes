const express = require("express");
const router = express.Router();
const records = require("./records");

// middleware function
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

// express middleware; when a request comes in, will go through this middleware function before it hits one of our routes
// middleware method that parses incoming JSON from the client and makes it available to our Express server via req.body
// app.use(express.json());

// req represents the incoming request from the client
// res represents the outgoing response from the server

// Send a GET request to /quotes to READ a list of quotes
router.get("/quotes", async (req, res) => {
  // pass the object to the json method which will convert it for the client
  // res.json(data);
  const quotes = await records.getQuotes();
  res.json(quotes);
});

// Send a GET request to /quotes/:id to READ (view) a quote
// remember the : dots are a representation of the final endpoint
router.get(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    // req.params.id gets the id of the quote the client is requesting
    // await says await for that id to be retrieved before converting to json
    const quote = await records.getQuote(req.params.id);
    // if the quote exists, send json res
    if (quote) {
      res.json(quote);
    } else {
      // quote not found, send back a not found message
      res.status(404).json({ message: "Quote not found" });
    }
  })
);

// Send a GET request to /quotes/quote/random to READ (view) a random quote
router.get(
  "/quotes/quote/random",
  asyncHandler(async (req, res, next) => {
    const quote = await records.getRandomQuote();
    // send response back containing the random quote as json
    res.json(quote);
  })
);

// Send a POST request to /quotes to CREATE a new quote
// app.post("/quotes", async (req, res) => {
//   try {
//     // test error handler
//     // throw new Error("woops something broke");

//     // check author and quote have been filled
//     if (req.body.author && req.body.quote) {
//       const quote = await records.createQuote({
//         quote: req.body.quote,
//         author: req.body.author,
//       });
//       // set success status
//       res.status(201);
//       // send the response back to the API as json
//       res.json(quote);
//     } else {
//       // 400 means client has sent a bad request
//       res.status(400);
//       res.json({ message: "Quote and author required" });
//     }
//   } catch (err) {
//     // something went wrong with the server
//     res.status(500);
//     res.json({ message: err.message });
//   }
// });

router.post(
  "/quotes",
  asyncHandler(async (req, res) => {
    if (req.body.author && req.body.quote) {
      const quote = await records.createQuote({
        quote: req.body.quote,
        author: req.body.author,
      });
      // set success status
      res.status(201);
      // send the response back to the API as json
      res.json(quote);
    } else {
      // 400 means client has sent a bad request
      res.status(400).json({ message: "Quote and author required" });
    }
  })
);

// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
router.put(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      quote.quote = req.body.quote;
      quote.author = req.body.author;

      // save the new quote to our datastore
      await records.updateQuote(quote);
      // everything worked, but there was nothing to send back
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Quote not found" });
    }
  })
);

// Send a DELETE request to /quotes/:id to DELETE a quote
router.delete("/quotes/:id", async (req, res, next) => {
  try {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      await records.deleteQuote(quote);
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ message: "You tried to delete a quote that does not exist." });
    }
  } catch (err) {
    // something went wrong with the server
    // res.status(500);
    // res.json({ message: err.message });
    // run our global error handler next
    next(err);
  }
});

// export the router  - very important!
module.exports = router;
