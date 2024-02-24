const Movie = require("../models/movies");

const CalculateVerdict = require("../VerdictPrediction/calcVerdict");

const createNewMovie = async (req,res) => {
    console.log(req.body);  
    try{
          console.log("creating a new movie...!!!");
            const movieData = new Movie({ 
                title : req.body.title,
                releaseYear :req.body.releaseYear,
                rated : req.body.rated,
                durationMinute : req.body.durationMinute,
                genre : req.body.genre,
                ratings :{
                    IMDB :  req.body.ratings.IMDB,
                    Metascore : req.body.ratings.Metascore,
                }, 
                featured : req.body.featured,
                director :  req.body.director,
                starCast : req.body.starCast,
                votes : req.body.votes,
                NumbersInCount : {
                    grossCollection : req.body.NumbersInCount.grossCollection,
                    budget : req.body.NumbersInCount.budget,
                } 
             });
             CalculateVerdict(movieData);
            const resMovie = await movieData.save();
            res.status(201).send(resMovie);

       console.log("title is = "+req.body.title+", releaseYear = "+movieData.releaseYear+
                "\n director is = "+req.body.director+", starCast = "+movieData.starCast+
                "\n genre is = "+movieData.genre+", budget = $ "+movieData.NumbersInCount.budget+" USD , gross collection = $ "
                 +movieData.NumbersInCount.grossCollection+" USD");
    }
    catch(err){
       res.status(404).send("Something went wrong : !! "+err);
    }
}


// UPDATE movies by StarCast
const updateMovieByTitle = async (req,res) => {
    try{
        const {title} = req.query;
        const queryObject = {};

        if(title){
            queryObject.title = title;
            console.log(queryObject);
            console.log(queryObject.title);
        }

        const updateMovie = await Movie.findOneAndUpdate(queryObject, 
            {$set : 
               { 
                title : req.body.title,
                releaseYear :req.body.releaseYear,
                rated : req.body.rated,
                durationMinute : req.body.durationMinute,
                genre : req.body.genre,
                ratings :{
                    IMDB :  req.body.ratings.IMDB,
                    Metascore : req.body.ratings.Metascore,
                }, 
                featured : req.body.featured,
                director :  req.body.director,
                starCast : req.body.starCast,
                votes : req.body.votes,
                NumbersInCount : {
                    grossCollection : req.body.NumbersInCount.grossCollection,
                    budget : req.body.NumbersInCount.budget,
                },
               } 
            },
             {
               returnDocument : "after"
             }
            );

        CalculateVerdict(updateMovie);
        const resMovie = await updateMovie.save();
        console.log(resMovie);
        res.status(200).send(resMovie);
    }
    catch(error){
        res.status(400).send("Something went wrong while updating movie by title : "+error);
    }
}

const deleteMovieByDirector =  async (req,res) => {
    try{
        const {director} = req.query;
        const queryObject = {};

        if(director){
            queryObject.director = director;
            console.log(queryObject);
            console.log(queryObject.director);
        }

     const movieResult = await Movie.findOneAndDelete(queryObject);
        if(!director){
           return res.status(404).send("No director is found with this name !!..");
        }
        res.status(201).send(movieResult);   
    }
    catch(err){
      res.status(500).send("Somethething wrong happend in deleting : "+err);
    }
}

module.exports = {
    createNewMovie,
    updateMovieByTitle,
    deleteMovieByDirector,
}
