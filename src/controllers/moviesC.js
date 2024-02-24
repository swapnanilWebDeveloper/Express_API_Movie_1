const Movie = require("../models/movies");

const getAllMoviesByRatedAndStarCast = async (req,res) => {
    try{
        const {rated,starCast,select} = req.query;
        const queryObject = {};

        let movieData = Movie.find();

        if(rated){
            queryObject.rated = rated;
            console.log(queryObject);
            console.log(queryObject.rated);
            movieData = movieData.find(queryObject);
        }

        if(starCast){
            let starCastArr = starCast.split(",");
            console.log(starCastArr);
            queryObject.starCast = starCastArr;
            console.log(queryObject);
            console.log(queryObject.starCast);
            movieData = movieData.find({starCast : { $all : queryObject.starCast } });
        }

        if(select){
            let selectFIx = select.replaceAll(",", " ");
            console.log(selectFIx);
            movieData = movieData.select(selectFIx);
        }

        const resMovie = await movieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, moviesLength : resMovie.length})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all products : "+error);
    }
}

const getAllMoviesByDirectorAndStarCast = async (req,res) => {
    try{
        const {director,starCast,select} = req.query;
        const queryObject = {};

        let movieData = Movie.find();

        if(director){
            queryObject.director = director;
            console.log(queryObject);
            console.log(queryObject.director);
            movieData = movieData.find(queryObject);
        }

        if(starCast){
            let starCastArr = starCast.split(",");
            console.log(starCastArr);
            queryObject.starCast = starCastArr;
            console.log(queryObject);
            console.log(queryObject.starCast);
            movieData = movieData.find({starCast : { $all : queryObject.starCast } });
        }

        if(select){
            let selectFIx = select.replaceAll(",", " ");
            console.log(selectFIx);
            movieData = movieData.select(selectFIx);
        }

        const resMovie = await movieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, moviesLength : resMovie.length})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all products : "+error);
    }
}

const getAllMoviesByGenreAndStarCast = async (req,res) => {
    try{
        const {max,min,select} = req.query;
        const queryObject = {};

        let movieData = Movie.find();

        if(max){
            queryObject.max = max;
            console.log(queryObject);
            console.log(queryObject.max);
            movieData = movieData.where("releaseYear").lte(max);
        }

        if(min){
            queryObject.min = min;
            console.log(queryObject);
            console.log(queryObject.min);
            movieData = movieData.where("releaseYear").gte(min);
        }

        if(select){
            let selectFIx = select.replaceAll(",", " ");
            console.log(selectFIx);
            movieData = movieData.select(selectFIx);
        }

        const resMovie = await movieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, moviesLength : resMovie.length})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all products : "+error);
    }
} 

module.exports = {
    getAllMoviesByRatedAndStarCast,
    getAllMoviesByDirectorAndStarCast,
    getAllMoviesByGenreAndStarCast
}