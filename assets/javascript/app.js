$(document).ready(function () {

    $("#submit-button").on("click", function () {
        timedGame.stop();
    });

    $("#start-button").on("click", function () {
        timedGame.start();
    });


    var intervalId;
    var clockRunning = false;
    var timedGame = {
        //sets time to 300 seconds
        time: 300,
        //starts game
        start: function () {
            //displays the questions 
            displayThe.questions();
            //starts countdown
            if (!clockRunning) {
                intervalId = setInterval(timedGame.countdown, 1000);
                clockRunning = true;
            }
        },
        //when the game stops: (1) the timer stops, (2) results are calculated and (3) results are displayed
        stop: function () {
            clearInterval(intervalId);
            clockRunning = false;
            calculateResults();
            displayThe.results();
        },

        countdown: function () {
            //decrements time down
            timedGame.time--;
            //converts current time to minutes and displays it
            var currentTime = timedGame.timeConverter(timedGame.time);
            $("#timer").text(currentTime);
            //countdown stops when time is out
            if (timedGame.time === 0) {
                timedGame.stop();
            }
        },

        timeConverter: function (t) {
            //it's convenient to have this function available to other timers 

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "0";
            }
            return minutes + ":" + seconds;
        }
    };

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 10;
    function calculateResults() {

        correctAnswers += $("input[type=radio][value=correct]:checked").length;
        incorrectAnswers += $("input[type=radio][value=option]:checked").length;
        unanswered -= $("input[type=radio]:checked").length;
    };

    var displayThe = {
        questions: function () {
            $("#trivia").removeClass("hidden");
            $("#start-button").addClass("hidden");
        },
        results: function () {
             $("#trivia").empty();
            var resultText = 
            "<p>Correct: " + correctAnswers + "</p>" +
            "<p>Incorrect: " + incorrectAnswers + "</p>" +
            "<p>Unanswered: " + unanswered + "</p>";

            $("#trivia").append(resultText);
        }
    };

});