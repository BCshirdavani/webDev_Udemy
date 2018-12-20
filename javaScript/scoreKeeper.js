// score keeper
console.log("score keeper included");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var h1 = document.querySelector("h1");
var p1display = document.getElementById("p1Display");
var p2display = document.getElementById("p2Display");
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var maxScoreDisplay = document.getElementById("maxScore");


numInput.addEventListener("change", function(){
    console.log("changed the input to: " + numInput.value);
    winningScore = Number(numInput.value);
    console.log("winning score is now: " + winningScore);
    maxScoreDisplay.textContent = winningScore;

})

p1.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        console.log(p1Score);
        p1display.textContent = p1Score;
        if(p1Score === winningScore){
            console.log("game over");
            gameOver = true;
            p1display.classList.add("winner");
        }
    }
    
})

p2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        console.log("p2: " + p2Score + ", max: " + winningScore);
        p2display.textContent = p2Score;
        if(p2Score == winningScore){
            gameOver = true;
            console.log("game over");
            p2display.classList.add("winner");
        }
    }
   
})

reset.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    console.log(p1Score + " " + p2Score);
    p1display.textContent = p1Score;
    p2display.textContent = p2Score;
    gameOver = false;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
})
