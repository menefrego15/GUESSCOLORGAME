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
var h1 = document.getElementById("h1h1");
var resetButton = document.getElementById("reset");
var resetScore = document.getElementById("resetScore");
pickedColor = randomColors();

resetScore.addEventListener("click", function(){
    myScore = 0;
    document.getElementById("score").innerText = 0;
    colors = generateRandomColors(6); 
    pickedColor = randomColors();
    colorDisplay.innerText = pickedColor;
    for(i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "rgb(35, 35, 99)";
})


//button newcolors
function nextStep() {
    colors = generateRandomColors(6); 
    pickedColor = randomColors();
    colorDisplay.innerText = pickedColor;
    for(i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "rgb(35, 35, 99)";
}


for(i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //score
    var myScore = 0;
    var manches = 0;
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        var colorSquare = this.style.backgroundColor;
        if (colorSquare === pickedColor) {
                myScore = myScore + 4;
                document.getElementById("score").innerText = "SCORE " + myScore;
                h1.style.backgroundColor = colorSquare;
                var j = 0;
                for(j = 0; j < squares.length; j++){
                    squares[j].style.backgroundColor = pickedColor;
                }
                setTimeout(() => {
                    nextStep();
                }, 500);
                manches = manches + 1;
                document.getElementById("manche").innerHTML = "Manche " + manches;
                if (manches == 10) {
                    console.log("awesome you reach manches 10");
                }
            
        }else {
            if (this.style.backgroundColor == "rgb(89, 98, 190)") {
                console.log("clicked again");
            }else {
                this.style.backgroundColor = "rgb(89, 98, 190)";
                myScore = myScore - 2;
                document.getElementById("score").innerText = "SCORE " + myScore;

            }
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

//fill in below as you need
