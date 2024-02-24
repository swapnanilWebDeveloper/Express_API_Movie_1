const Movie = require("../models/movies");

const getAllMoviesByReleaseYearRange = async (req,res) => {
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

const getAllMoviesByIMDBRatingRange = async (req,res) => {
    try{
        const {max,min,select} = req.query;
        const queryObject = {};

        let movieData = Movie.find();

        if(max){
            queryObject.max = max;
            console.log(queryObject);
            console.log(queryObject.max);
            movieData = movieData.where("ratings.IMDB").lte(max);
        }

        if(min){
            queryObject.min = min;
            console.log(queryObject);
            console.log(queryObject.min);
            movieData = movieData.where("ratings.IMDB").gte(min);
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
        res.status(400).send("Something went wrong while getting all movies by IMDB ratings : "+error);
    }
}

const getAllMoviesByMetaScoreRatingRange = async (req,res) => {
    try{
        const {max,min,select} = req.query;
        const queryObject = {};

        let movieData = Movie.find();

        if(max){
            queryObject.max = max;
            console.log(queryObject);
            console.log(queryObject.max);
            movieData = movieData.where("ratings.Metascore").lte(max);
        }

        if(min){
            queryObject.min = min;
            console.log(queryObject);
            console.log(queryObject.min);
            movieData = movieData.where("ratings.Metascore").gte(min);
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
        res.status(400).send("Something went wrong while getting all movies by Metascore ratings : "+error);
    }
}

const getAllMoviesByGrossCollection = async (req,res) => {
    try{
        const {max,min,select} = req.query;
        const queryObject = {};

        let movieData = Movie.find();

        if(max){
            queryObject.max = max;
            console.log(queryObject);
            console.log(queryObject.max);
            movieData = movieData.where("NumbersInCount.grossCollection").lte(max);
        }

        if(min){
            queryObject.min = min;
            console.log(queryObject);
            console.log(queryObject.min);
            movieData = movieData.where("NumbersInCount.grossCollection").gte(min);
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
        res.status(400).send("Something went wrong while getting all movies by Gross collection : "+error);
    }
}

const  getAllMoviesByBudget = async (req,res) => {
    try{
        const {max,min,select} = req.query;
        const queryObject = {};

        let movieData = Movie.find();

        if(max){
            queryObject.max = max;
            console.log(queryObject);
            console.log(queryObject.max);
            movieData = movieData.where("NumbersInCount.budget").lte(max);
        }

        if(min){
            queryObject.min = min;
            console.log(queryObject);
            console.log(queryObject.min);
            movieData = movieData.where("NumbersInCount.budget").gte(min);
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
        res.status(400).send("Something went wrong while getting all movies by budget : "+error);
    }
}

module.exports = {
    getAllMoviesByReleaseYearRange, 
    getAllMoviesByIMDBRatingRange, 
    getAllMoviesByMetaScoreRatingRange, 
    getAllMoviesByGrossCollection,
    getAllMoviesByBudget, 
}