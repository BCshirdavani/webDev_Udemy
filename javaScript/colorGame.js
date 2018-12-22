console.log("connected");

var colors = generateRandomColors(6);
var pickedColor = pickColor();

var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    console.log("clicked reset");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

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
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
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


function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}


function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}