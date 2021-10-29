const express = require("express");
const router = express.Router();

const {  createPlatform, getAllPlatforms  } = require("../controllers/platform.controller");

router.post("/create", createPlatform);
router.get("/", getAllPlatforms);

module.exports = router;