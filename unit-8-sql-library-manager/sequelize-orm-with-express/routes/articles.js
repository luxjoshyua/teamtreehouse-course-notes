const express = require("express");
const router = express.Router();

// require index file of the articles folder, access the Article model using .
const Article = require("../models").Article;

/* Handler function to wrap each route. 

  Middleware that we wrap around each block
*/
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      // Forward error to the global error handler
      next(error);
    }
  };
}

/* GET articles listing. */
router.get(
  "/",
  asyncHandler(async (req, res) => {
    // use findAll method to retrieve and display all articles
    const articles = await Article.findAll({ order: [["createdAt", "DESC"]] });
    res.render("articles/index", {
      articles: articles,
      title: "Sequelize-It!",
    });
  })
);

/* Create a new article form. */
router.get("/new", (req, res) => {
  res.render("articles/new", { article: {}, title: "New Article" });
});

/* POST create article. */
router.post(
  "/",
  asyncHandler(async (req, res) => {
    let article;
    try {
      // req.body maps to the form inputs
      // console.log(req.body);
      // pass create the request body
      article = await Article.create(req.body);
      // redirects to the URL path for the individual article id e.g. localhost:3000/articles/1
      res.redirect("/articles/" + article.id);
    } catch (error) {
      // checking the error
      if (error.name === "SequelizeValidationError") {
        article = await Article.build(req.body);
        res.render("articles/new", {
          article,
          errors: error.errors,
          title: "New Article",
        });
      } else {
        // error caught in the asyncHandler's catch block
        throw Error;
      }
    }
  })
);

/* Edit article form. */
router.get(
  "/:id/edit",
  asyncHandler(async (req, res) => {
    // find the article by using the requested parameter router id
    const article = await Article.findByPk(req.params.id);
    if (article) {
      res.render("articles/edit", {
        article: article,
        title: "Edit Article",
      });
    } else {
      res.sendStatus(404);
    }
  })
);

/* GET individual article. */
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // find article by primary key
    // params returns parameters in the matched route
    const article = await Article.findByPk(req.params.id);
    if (article) {
      res.render("articles/show", { article: article, title: article.title });
    } else {
      // send a 404 status to the client
      res.sendStatus(404);
    }
  })
);

/* Update an article. */
router.post(
  "/:id/edit",
  asyncHandler(async (req, res) => {
    let article;
    try {
      // initialise article varialble that awaits the search result
      article = await Article.findByPk(req.params.id);
      if (article) {
        // await is async, so it awaits the promise, then once the promise is fulfilled, do something
        // pass the request body once the promise is fulfilled
        await article.update(req.body);
        res.redirect("/articles/" + article.id);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        article = await Article.build(req.body);
        // make sure correct article gets updated
        article.id = req.params.id;
        res.render("articles/edit", {
          article,
          errors: error.errors,
          title: "Edit Article",
        });
      } else {
        throw error;
      }
    }
  })
);

/* Delete article form. */
router.get(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    // find the article to delete by using primary key or id
    const article = await Article.findByPk(req.params.id);
    if (article) {
      // once the article to delete is retrieved, pass the article object
      res.render("articles/delete", {
        article: article,
        title: "Delete Article",
      });
    } else {
      res.sendStatus(404);
    }
  })
);

/* Delete individual article. */
router.post(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    // find the article to destroy
    const article = await Article.findByPk(req.params.id);
    if (article) {
      // then destroy it using destroy() method
      // note destroy() is an asynchronous handler, so need to wait for the promise to be fulfilled
      await article.destroy();
      res.redirect("/articles");
    } else {
      res.sendStatus(404);
    }
  })
);

module.exports = router;
