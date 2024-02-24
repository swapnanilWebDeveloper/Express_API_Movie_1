require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 6060 ;

const movies_routes  = require("./routes/movies");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello programmer is live from the home page .....!!!");
});

// middleware or to set router
app.use("/api/movies", movies_routes);

const LiveStudentConnection = async (req,res) => {
    try{
        const res = await connectDB(process.env.MONGODB_URL);
          if(res){
            console.log("Connection successfull !! ");
           }
          else{
            console.log("Somwthing wrong with Connection to Database...");
          }
         app.listen(PORT, () => {
         console.log(`Port number : ${PORT} , Yes I am connected !!`);
       });
    }
    catch(err){
      console.log("Something went wrong at listening to port : "+PORT+" !!! : "+err);
    }
 }
 
 LiveStudentConnection();