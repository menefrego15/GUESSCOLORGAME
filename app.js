
//generate randomColorsArray
var colors = generateRandomColors(6);
//get squares property
var squares = document.getElementsByClassName("square");
//pick random color
function randomColors() {
    var nRandom = Math.floor(Math.random() * colors.length);
    var pickedColor = colors[nRandom];
    return pickedColor;   
}


var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.innerText = randomColors();
var messageDisplay = document.getElementById("message");
var h1 = document.getElementById("h1h1");
var resetButton = document.getElementById("reset");
var resetScore = document.getElementById("resetScore");
pickedColor = randomColors();

resetScore.addEventListener("click", function(){
    myScore = 0;
    document.getElementById("score").innerText = 0;
    colors = generateRandomColors(6); 
    pickedColor = randomColors();
    resetButton.innerText = "New Color";
    colorDisplay.innerText = pickedColor;
    for(i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "rgb(35, 35, 99)";
    messageDisplay.innerText = "";
})


//button newcolors
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6); 
    pickedColor = randomColors();
    resetButton.innerText = "New Color";
    colorDisplay.innerText = pickedColor;
    for(i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "rgb(35, 35, 99)";
    messageDisplay.innerText = "";
})


for(i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //score
    var myScore = 0;
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        var colorSquare = this.style.backgroundColor;
        
        if (colorSquare === pickedColor) {
            messageDisplay.innerText = "Correct";
            myScore = myScore + 4;
            document.getElementById("score").innerText = myScore;
            h1.style.backgroundColor = colorSquare;
            resetButton.innerText = "Play Again?";
            var j = 0;
            for(j = 0; j < squares.length; j++){
                squares[j].style.backgroundColor = pickedColor;
            }
            
        }else {
            messageDisplay.innerText = "Try Again";
            this.style.backgroundColor = "rgb(35, 35, 99)";
            myScore = myScore - 1;
            document.getElementById("score").innerText = myScore;
        }
    });
    
}



//GENERATE NEW RANDOM COLORS

function generateRandomColors(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    var rgbRandom = "rgb(" + red + ", " + blue + ", " + green + ")";
    return rgbRandom;
}

