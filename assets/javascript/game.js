// Global
var targetFloor = 19;
var targetCeiling = 120;
var targetNumber;
var gemFloor = 1;
var gemCeiling = 12;
var gemGenerator;
var gemValues = [];
var wins = 0;
var losses = 0;
var counter = 0;

var gemImage = [4];
gemImage[0] = "assets/images/crystal1.jpeg";
gemImage[1] = "assets/images/crystal2.jpg";
gemImage[2] = "assets/images/crystal3.jpeg";
gemImage[3] = "assets/images/crystal4.jpeg";

// Start
var resetFunction = function () {
    counter = 0; 
    $("#crystals").empty();
    $(".crystal-image").remove();
    $("img").remove();
    $("#current-count").html(counter);
    $("#spacebar").html("Press Spacebar to Start Over");


    targetNumber = Math.floor(Math.random() * (targetCeiling - targetFloor + 1)) + targetFloor;

    $("#number-to-guess").html(targetNumber)

    for (var i = 0; i < 4; i++) {
        gemValues[i] = Math.floor(Math.random() * (gemCeiling - gemFloor + 1)) + gemFloor;

        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", gemImage[i]);
        imageCrystal.attr("data-crystalvalue", gemValues[i]);

        $("#crystals").append(imageCrystal);
    }


// Game
$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#current-count").html(counter);


    if (counter === targetNumber) {
        wins++;
        $("#wins").html(wins);
        $("#spacebar").html("Win!");
        alert("Win! Press OK to play again")
        resetFunction();
    }


    else if (counter >= targetNumber) {
        losses++;
        $("#losses").html(losses);
        $("#spacebar").html("Over!");
        alert("You've gone over! Press OK to play again")
        resetFunction();
    }

});
}

document.onkeyup = function () {
    var spaceBar = event.charCode || event.keyCode;
    if (spaceBar === 32) {
        resetFunction();
    }
}
