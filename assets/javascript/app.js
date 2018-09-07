// First question being clicked and score being set to one automatically
// Timer setting gameRunning to false (I assume) every second

gameRunning = false;
score = 0;
totalScore = 5;
guesses = 0;
incorrectScore = (totalScore - score);
q1Buttons = document.getElementsByClassName("question-1");
q2Buttons = document.getElementsByClassName("question-2");
q3Buttons = document.getElementsByClassName("question-3");
q4Buttons = document.getElementsByClassName("question-4");
q5Buttons = document.getElementsByClassName("question-5");
q1Answer = document.getElementById("q1-right");
q2Answer = document.getElementById("q2-right");
q3Answer = document.getElementById("q3-right");
q4Answer = document.getElementById("q4-right");
q5Answer = document.getElementById("q5-right");
gameContent = document.getElementById("game-content");
scoreContainer = document.getElementById("score-container");
startButton = document.getElementById("start-button");
tryAgainButton = document.getElementById("try-again-button");
timeRemaining = document.getElementById("time-remaining");
timeLeft = 90;
amountRight = document.getElementById("amount-right");
amountWrong = document.getElementById("amount-wrong");
var intervalId;
$(gameContent).hide();
$(scoreContainer).hide();

function gameReset() {
    gameRunning = true;
    score = 0;
    timeLeft = 90;
    guesses = 0;
    console.log(score);
    $(gameContent).show();
    $(scoreContainer).hide();
    $(q1Buttons).show();
    $(q2Buttons).show();
    $(q3Buttons).show();
    $(q4Buttons).show();
    $(q5Buttons).show();
}

$(q1Buttons).click(function(){
    $(q1Buttons).hide();
    guesses++;
});
$(q2Buttons).click(function(){
    $(q2Buttons).hide();
    guesses++;
});
$(q3Buttons).click(function(){
    $(q3Buttons).hide();
    guesses++;
});
$(q4Buttons).click(function(){
    $(q4Buttons).hide();
    guesses++;
});
$(q5Buttons).click(function(){
    $(q5Buttons).hide();
    guesses++;
});

// if(($(q1Answer).click()) || ($(q2Answer).click()) || ($(q3Answer).click()) ||
//  ($(q4Answer).click()) || ($(q5Answer).click())) {
//      score++;
//      console.log(score);
//  } else {
//      console.log("wrong");
//  }



function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(q1Answer).click(function() {
        score++;
        console.log(score);
    });
    $(q2Answer).click(function() {
        score++;
        console.log(score);
    });
    $(q3Answer).click(function() {
        score++;
        console.log(score);
    });
    $(q4Answer).click(function() {
        score++;
        console.log(score);
    });
    $(q5Answer).click(function() {
            score++;
            console.log(score);
        });
 }

 function decrement() {
     timeLeft--;
     $(timeRemaining).text("Seconds left: " + timeLeft);
     if((timeLeft == 0) || (guesses == 5)) {
        $(gameContent).hide();
        $(scoreContainer).show();
        gameRunning = false;
        $(amountRight).text("Amount right: " + score);
        $(amountWrong).text("Amount wrong: " + (5 - score));
     };
 }


$(startButton).click(function(){
    $(startButton).hide();
    gameReset();
    run();
});
$(tryAgainButton).click(function(){
    $(scoreContainer).hide();
    gameReset();
    run();
});