const Movie = require("../models/movies");

const getAllMoviesPaginationLimit = async (req,res) => {
    try{
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;

        let MovieData = Movie.find();

        let skip = (page - 1) * limit ;

        MovieData = MovieData.skip(skip).limit(limit);

        const resMovie = await MovieData;
        console.log(resMovie);
        res.status(200).json({resMovie,ListMovieslength : resMovie.length});
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all products : "+error);
    }
}

const getAllMoviesBySortSelect = async (req,res) => {
    try{
        const {sort,select} = req.query;

        console.log(sort);
        let MovieData = Movie.find(); 

        if(sort){
            let sortFix = sort.replaceAll(",", " ");
            console.log(sortFix);
            MovieData = MovieData.sort(sortFix);
        }

        if(select){
            let selectFix = select.replaceAll(",", " ");
            console.log(select);
            console.log(selectFix);
            MovieData = MovieData.select(selectFix);
        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 5;

        let skip = (page - 1) * limit ;

        MovieData = MovieData.skip(skip).limit(limit);

        const resMovie = await MovieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, lengthOfMyData : resMovie.length});
    }
    catch(error){
        res.status(400).json("something went wrong while testing the data : "+error);
    }
}

// get all movies by title
const getAllMoviesByTitle = async (req,res) => {
    try{
        const {title,select} = req.query;
        const queryObject = {};

        let MovieData = Movie.find();

        if(title){
            queryObject.title = { $regex : title , $options : 'i'};
            console.log(queryObject);
            console.log(queryObject.title);
            MovieData = MovieData.find(queryObject);
        }
        
        if(select){
            let selectFix = select.replaceAll(",", " ");
            console.log(select);
            console.log(selectFix);
            MovieData = MovieData.select(selectFix);
        }

        const resMovie = await MovieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, moviesLength : resMovie.length})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all movies by title : "+error);
    }
}

// get all movies by Director
const getAllMoviesByDirector = async (req,res) => {
    try{
        const {director,select} = req.query;
        const queryObject = {};

        let MovieData = Movie.find();

        if(director){
            queryObject.director = { $regex : director , $options : 'i'};
            console.log(queryObject);
            console.log(queryObject.director);
            MovieData = MovieData.find(queryObject);
        }

        if(select){
            let selectFix = select.replaceAll(",", " ");
            console.log(select);
            console.log(selectFix);
            MovieData = MovieData.select(selectFix);
        }

        const resMovie = await MovieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, moviesLength : resMovie.length})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all movies by director : "+error);
    }
}

// get all movies by StarCast
const getAllMoviesByStarCast = async (req,res) => {
    try{
        const {starCast,select} = req.query;
        const queryObject = {};

        let MovieData = Movie.find();

        if(starCast){
            queryObject.starCast = { $regex : starCast , $options : 'i'};
            console.log(queryObject);
            console.log(queryObject.starCast);
            MovieData = MovieData.find({starCast : { $elemMatch : queryObject.starCast } });
        }
        
        if(select){
            let selectFix = select.replaceAll(",", " ");
            console.log(select);
            console.log(selectFix);
            MovieData = MovieData.select(selectFix);
        }

        const resMovie = await MovieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, moviesLength : resMovie.length})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all movies by star cast : "+error);
    }
}

// get all movies by multi star cast
const getAllMoviesByMultiStarCast = async (req,res) => {
    try{
        const {starCast,select} = req.query;
        const queryObject = {};

        let MovieData = Movie.find();

        if(starCast){
            let starCastArr = starCast.split(",");
            console.log(starCastArr);
            queryObject.starCast = starCastArr;
            console.log(queryObject);
            console.log(queryObject.starCast);
            MovieData = MovieData.find({starCast : { $all : queryObject.starCast } });
        }
        
        if(select){
            let selectFix = select.replaceAll(",", " ");
            console.log(select);
            console.log(selectFix);
            MovieData = MovieData.select(selectFix);
        }

        const resMovie = await MovieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, moviesLength : resMovie.length})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all movies by genre : "+error);
    }
}

const getArrayMovieInformatrion = ( movie_info ) =>{
    const segmenter = new Intl.Segmenter([], { granularity: 'word' });
    const segmentedGenre = segmenter.segment(movie_info);
    const words = [...segmentedGenre].filter(s => s.isWordLike).map(s => s.segment);
    console.log(words)
    return words;
}

// get all movies by Genre
const getAllMoviesByGenre = async (req,res) => {
    try{
        const {genre,select} = req.query;
        const queryObject = {};

        let MovieData = Movie.find();

        if(genre){
            // console.log(genre);
            let genreArr = getArrayMovieInformatrion(genre);
            console.log(genreArr);
            queryObject.genre = genreArr;
            console.log(queryObject);
            console.log(queryObject.genre);
            MovieData = MovieData.find({genre : { $all : queryObject.genre } });
        }
        
        if(select){
            let selectFix = select.replaceAll(",", " ");
            console.log(select);
            console.log(selectFix);
            MovieData = MovieData.select(selectFix);
        }

        const resMovie = await MovieData;
        console.log(resMovie);
        console.log(req.query);
        res.status(200).json({resMovie, moviesLength : resMovie.length})
    }
    catch(error){
        res.status(400).send("Something went wrong while getting all movies by genre : "+error);
    }
}

module.exports = { 
    getAllMoviesPaginationLimit,
    getAllMoviesBySortSelect,
    getAllMoviesByTitle,
    getAllMoviesByDirector,
    getAllMoviesByStarCast,
    getAllMoviesByGenre,
    getAllMoviesByMultiStarCast,
}