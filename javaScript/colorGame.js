console.log("connected");

var colors = ["rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",];
// var pickedColor = colors[3];
var pickedColor = pickColor();

var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    // addd initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // squares[i].style.background.color = colors[i];

    // add event handlers - click listeners
    squares[i].addEventListener("click", function(){
        console.log("clicked square");
        // get color of clicked square
        console.log("square: " + this.style.backgroundColor + "picked: " + pickedColor);
        clickedColor = this.style.backgroundColor;
        console.log("clickedColor  = " + clickedColor);
        // clickedColor = this.style.background;
        // compare color 
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}




function changeColors(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * (colors.length));
    return colors[random];
}