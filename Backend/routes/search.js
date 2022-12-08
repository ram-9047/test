const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search.js");

//sign-up new user POST
router.post("/search", searchController.searchRecords);

// router.post("/create-pdf", searchController.createPDF);

// router.post("/edit-pdf", searchController.editPDF);

module.exports = router;
