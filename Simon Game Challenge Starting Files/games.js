var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level" );        
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        
        console.log("success");
       
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game over, Press any key to Restart");
        startOver();
    }
}

function nextSequence() {
    userClickedPattern=[];
    level++;
    //console.log(level-inc);
    $("#level-inc").text(level);
    $("#level-titile").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userClickedPattern);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

function startOver(){
    level = 0;
    gamePattern= [];
    started = false;
}


/*$("h1");

//alert("hi1");

$("h1").on("click"), function() {
    $("h1").slideUp();
}

let gamePattern= [];
let buttonColours = ["red","blue","green","yellow"];
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

   // $("#" + randomChosenColor).on("click",function(){
        $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
   // });
   // return randomChosenColor;

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  
}
//nextSequence();


function makeSound(num){
    
    if(num[0] === "blue"){
        var blue = new Audio("sounds/blue.mp3");
        blue.play();
        console.log(num[0])
    }
    else if(num[0] === "green"){
        var green = new Audio("sounds/green.mp3");
        blue.play();
        console.log(num[0])
    }
    else if(num[0] === "red"){
        var red = new Audio("sounds/red.mp3");
        red.play();
        console.log(num[0])
    }
    else if(num[0] === "wrong"){
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        console.log(num[0]);
    }
    else if(num[0] === "yellow"){
        var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
        console.log(num[0])
    }
}
console.log(gamePattern[0]);
makeSound(gamePattern);
*/
