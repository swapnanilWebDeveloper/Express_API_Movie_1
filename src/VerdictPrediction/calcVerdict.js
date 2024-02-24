
function CalculateVerdict(movie){
    let grsClt = movie.NumbersInCount.grossCollection;
    let bgt = movie.NumbersInCount.budget;
    let ratio = (grsClt / bgt).toFixed(1);
    
    if(ratio >= 4.5){
       movie.verdict = "all time block buster";
    }
    else if((ratio >= 3.5 && ratio < 4.5)){
      movie.verdict = "super-hit";
    }
    else if((ratio >= 2.5 && ratio < 3.5)){
     movie.verdict = "hit";
   }
   else if((ratio >= 1.5 && ratio < 2.5)){
     movie.verdict = "semi-hit";
   }
   else if((ratio >= 1.2 && ratio < 1.5)){
     movie.verdict = "flop";
   }
   else{
     movie.verdict = "disaster";
   }  
}

module.exports = CalculateVerdict;