const express = require("express");
const router = express.Router();
const { isAuth } = require("../../../middlewares/auth.middleware");


const{getAnimeById,getAllAnime,createAnime}=require("../controllers/anime.controller");

router.post("/create",[isAuth], createAnime);
router.get("/", getAllAnime);
router.get("/:animeId",[isAuth], getAnimeById);

module.exports = router;