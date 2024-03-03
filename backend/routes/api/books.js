const express = require("express");

const booksController = require("../../controllers/books");

const router = express.Router();

router.get("/", booksController.getAll);

module.exports = router;
