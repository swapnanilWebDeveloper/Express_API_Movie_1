const connectDB = require("./src/db/connect");
require("dotenv").config();

const Movie = require("./src/models/movies");
const MovieJson = require("./Movies.json");

const CalculateVerdict = require("./src/VerdictPrediction/calcVerdict");

let len = MovieJson.length;
console.log("Number of movies are = "+len);

for(var i = 0; i < len; i++){
    CalculateVerdict(MovieJson[i]);
}

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
       // await Product.deleteMany();
        await Movie.create(MovieJson);
        console.log("Documents of movies inserted, Successfully ...!!!");
    }
    catch(error){
        console.log("Something went wrong with Databse connection ....!!!"+error);
    }
}

start();