/* eslint-disable max-len */
const express = require("express");
const homepageController = require("../controllers/homepage.controller");

const router = express.Router();

router.route("/concatenate").get(homepageController.concatenate);

router.route("/searchAnime").get(homepageController.searchAnime);

module.exports = router;
