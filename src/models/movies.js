const mongoose = require("mongoose");

const movieSchema = new  mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    releaseYear : {
       type : Number,
       default : 2020,
    },
    rated : {
        type : String,
        required : true,
        enum : {
            values : ["R", "PG-13", "PG", "Not Rated", "TV-G"],
            message : `${this.values} is not supported`,
        }
    },
    durationMinute : {
        type : Number,
        required : [true, "PLease give the duration of movie ...!!!"],
    },
    genre : [String],
    ratings : {
        IMDB : {
            type : Number,
            required : [true, "IMDB rating must be provided ...!!!"],
        },
        Metascore : {
            type : Number,
            default : 55,
        },
    },
    featured : {
        type : Boolean,
        default : false,
    },
    director : {
        type : String,
        required : true,
    },
    starCast : [String],
    votes : {
        type : Number,
        required : true,
    },
    NumbersInCount : {
        grossCollection : {
            type : Number,
            required : true,
        }, 
        budget : {
            type : Number,
            required : true,
        },
    },
    verdict : {
        type : String,
        default : "flop",
        enum : {
            values : ["disaster", "flop", "semi-hit", "hit", "super-hit", "all time block buster"],
            message : `${this.values} is not appropiate`,
        }
    },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;