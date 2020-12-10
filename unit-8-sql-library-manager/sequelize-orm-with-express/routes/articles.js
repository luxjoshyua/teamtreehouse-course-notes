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
    // req.body maps to the form inputs
    // console.log(req.body);
    // pass create the request body
    const article = await Article.create(req.body);
    // redirects to the URL path for the individual article id e.g. localhost:3000/articles/1
    res.redirect("/articles/" + article.id);
  })
);

/* Edit article form. */
router.get(
  "/:id/edit",
  asyncHandler(async (req, res) => {
    res.render("articles/edit", { article: {}, title: "Edit Article" });
  })
);

/* GET individual article. */
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // find article by primary key
    // params returns parameters in the matched route
    const article = await Article.findByPk(req.params.id);
    res.render("articles/show", { article: article, title: article.title });
  })
);

/* Update an article. */
router.post(
  "/:id/edit",
  asyncHandler(async (req, res) => {
    res.redirect("/articles/");
  })
);

/* Delete article form. */
router.get(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    res.render("articles/delete", { article: {}, title: "Delete Article" });
  })
);

/* Delete individual article. */
router.post(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    res.redirect("/articles");
  })
);

module.exports = router;
