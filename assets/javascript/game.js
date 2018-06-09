$(document).ready(function () {

    //set all crystals with random numbers and set scores to start game
    var target = Math.floor(Math.random() * 100 + 19);
    $("#point").text(target);
    console.log(target);
    var crystRed = Math.floor(Math.random() * 12) + 1;
    console.log(crystRed);
    var crystBlue = Math.floor(Math.random() * 12) + 1;
    console.log(crystBlue);
    var crystGreen = Math.floor(Math.random() * 12) + 1;
    console.log(crystGreen);
    var crystYellow = Math.floor(Math.random() * 12) + 1;
    console.log(crystYellow);
    winCounter = 0;
    lossCounter = 0;
    totalScore = 0;
    $("#loss").text(lossCounter);
    $("#win").text(winCounter);
    totalScore = 0;
    $("#score").text(totalScore);

    // game play click on crystals and determine winner or loser
    $("#red").click(function () {
        totalScore = totalScore + crystRed;
        console.log(crystRed);
        $("#score").text(totalScore);

        if (totalScore === target) {
            winner();
        } else if (totalScore >= target) {
            loser();
        }
    })
    $("#blue").click(function () {
        totalScore = totalScore + crystBlue;
        console.log(crystBlue);
        $("#score").text(totalScore);
        if (totalScore === target) {
            winner();
        } else if (totalScore >= target) {
            loser();
        }
    })
    $("#green").click(function () {
        totalScore = totalScore + crystGreen;
        console.log(crystGreen);
        $("#score").text(totalScore);
        if (totalScore === target) {
            winner();
        } else if (totalScore >= target) {
            loser();
        }
    })
    $("#yellow").click(function () {
        totalScore = totalScore + crystYellow;
        console.log(crystYellow);
        $("#score").text(totalScore);
        if (totalScore === target) {
            winner();
        } else if (totalScore >= target) {
            loser();
        }
    })
    //reset function to start over after each round
    function reset() {
        crystBlue = Math.floor(Math.random() * 12) + 1;
        crystRed = Math.floor(Math.random() * 12) + 1;
        crystGreen = Math.floor(Math.random() * 12) + 1;
        crystYellow = Math.floor(Math.random() * 12) + 1;
        target = 0;
        totalScore = 0;
        $("#score").text(totalScore);
        $("#point").text(target);
        target = Math.floor(Math.random() * 100 + 19);
        $("#point").text(target);
    };
    //winner and loser section
    function winner() {
        winCounter++;
        $("#win").text(winCounter);
        reset();
    }

    function loser() {
        lossCounter++;
        $("#loss").text(lossCounter);
        reset();
    }
});