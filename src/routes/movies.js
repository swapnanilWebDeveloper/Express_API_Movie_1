const express = require("express");
const router = express.Router();

const {
    getAllMoviesPaginationLimit,
    getAllMoviesBySortSelect,
    getAllMoviesByTitle, // regular expression // single request params
    getAllMoviesByDirector, // regular expression // single request params
    getAllMoviesByStarCast, // regular expression // single request params
    getAllMoviesByMultiStarCast, // array $all operator // single request params
    getAllMoviesByGenre, // array in element and regular expression // single request params
    
} = require("../controllers/moviesA");

const {
    getAllMoviesByReleaseYearRange, // and // double request params
    getAllMoviesByIMDBRatingRange, // and // double request params
    getAllMoviesByMetaScoreRatingRange, // and // double request params
    getAllMoviesByGrossCollection, //and // double request params
    getAllMoviesByBudget, // and // double request params
} = require("../controllers/moviesB");

const {
    getAllMoviesByRatedAndStarCast, // AND // multiple request params
    getAllMoviesByDirectorAndStarCast, // 1. reg Expression AND, 2.array in element // // multiple request params
    getAllMoviesByGenreAndStarCast, // 1. reg Expression AND, 2.array in element // // multiple request params  
} = require("../controllers/moviesC");

const {
    createNewMovie,
    updateMovieByTitle,
    deleteMovieByDirector,
} = require("../controllers/moviesD");

router.route("/").get(getAllMoviesPaginationLimit);
router.route("/sortProject").get(getAllMoviesBySortSelect);
router.route("/title").get(getAllMoviesByTitle);
router.route("/director").get(getAllMoviesByDirector);
router.route("/starCast").get(getAllMoviesByStarCast);
router.route("/multiStarCast").get(getAllMoviesByMultiStarCast);
router.route("/genre").get(getAllMoviesByGenre);

router.route("/releaseYear").get(getAllMoviesByReleaseYearRange);
router.route("/IMDBRating").get( getAllMoviesByIMDBRatingRange);
router.route("/MetaScoreRating").get(getAllMoviesByMetaScoreRatingRange);
router.route("/GrossCollection").get(getAllMoviesByGrossCollection);
router.route("/Budget").get(getAllMoviesByBudget);

router.route("/RatedAndStarCast").get(getAllMoviesByRatedAndStarCast);
router.route("/DirectorAndStarCast").get(getAllMoviesByDirectorAndStarCast);
router.route("/GenreAndStarCast").get(getAllMoviesByGenreAndStarCast);

router.route("/createMovie").post(createNewMovie);
router.route("/updatebytitle").patch(updateMovieByTitle);
router.route("/deletebydiredctor").delete(deleteMovieByDirector);

module.exports = router;