var level = 0
var gameStarted = false;
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(randomNumber) {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);    

    $("#" + randomChosenColor).fadeOut(150).fadeIn(150);
    playSound(randomChosenColor)
    // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    // audio.play();
    level += 1;
    $("#level-title").html("Level " + level);
}    

$(".btn").click(function () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();  
}

function animatePress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(() => {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}


$(document).keypress(function(){
    if (gameStarted == false){
        $("h1").html("Level " + level);
        setTimeout(() => {
            nextSequence();
        }, 100);
        gameStarted = true;
    }    
})

function checkAnswer(currentLevel){
    console.log(userClickedPattern, gamePattern)
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
            nextSequence();
            }, 2000);
        }
    }
    else{
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press Any Key to Restart");
        console.log("incorrect");
        startOver();
    }   
}

function startOver(){
    level = 0;
    gamePattern = [];
    gameStarted = false;
}