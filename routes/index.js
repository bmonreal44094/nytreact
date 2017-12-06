const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const articlesController = require("../controllers/articlesController");

router.route("/action")
  .get(articlesController.findAll)
  .post(articlesController.create)
  .delete(articlesController.remove);

router.route("/action/:title")
	.delete(articlesController.remove);

module.exports = router;
