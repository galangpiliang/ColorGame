var level  = 6;
var colors = [];
var pickedColor;
var squares        = document.querySelectorAll(".square");
var colorDisplay   = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1             = document.querySelector("h1");
var resetButton    = document.querySelector("#reset");
var modeButtons    = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click",reset);

function init(){
    setupModeButtons();
    setupSquares();    
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? level = 3: level = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click",function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "CORRECT!!!"
                resetButton.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!!!"
            }
        })
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(level);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            //add initial colors
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    //change textcontent to new colors
    this.textContent = "New Colors";
    //change h1 bg
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = '';
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < colors.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //pick random color
    random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number){
    //make an array
    var arr = [];
    //add number random colors to array
    for(var i = 0; i < number; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb("+r+", "+g+", "+b+")";
}