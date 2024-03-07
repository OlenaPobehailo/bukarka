const express = require("express");

const categoriesRouter = require("../../controllers/categories");

const router = express.Router();

router.get("/", categoriesRouter.getAllCategories);

module.exports = router;
