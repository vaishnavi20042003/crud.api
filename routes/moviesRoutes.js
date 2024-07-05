const express= require('express');
const { getMovies,
getMovie,
createMovie,
updateMovie,
deleteMovie} = require("../controllers/moviesController");
const router =express.Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);
router.route("/").post(createMovie);
router.route("/:id").put(updateMovie);
router.route("/:id").delete(deleteMovie);



module.exports = router;