$(document).ready(function () {

    $("#submit-button").on("click", function () {
        timedGame.stop();
    });

    // $("#start-button").click(timedGame.start);
    $("#start-button").on("click", function () {
        timedGame.start();
    });


    var intervalId;
    var clockRunning = false;


    var timedGame = {

        time: 300,

        start: function () {

            displayThe.game();

            if (!clockRunning) {
                intervalId = setInterval(timedGame.count, 1000);
                clockRunning = true;
                console.log(intervalId);
            }
        },

        stop: function () {
            clearInterval(intervalId);
            clockRunning = false;
            calculateResults();
            displayThe.results();
        },

        count: function () {
            timedGame.time--;
            var currentTime = timedGame.timeConverter(timedGame.time);
            $("#timer").text(currentTime);
            if (timedGame.time === 0) {
                timedGame.stop();
            }
        },

        timeConverter: function (t) {

            //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
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

    function calculateResults() {
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var unanswered = 10;
        var correct = "correct";
       /* $("input:checked").each( function(checkedBox) {
            unanswered--;
            if ($(checkedBox).val() == correct) {
                correctAnswers++;
            } else if ($(checkedBox).val("option")) {
                incorrectAnswers++;
            }

        }) */
        
        correctAnswers += $("input[type=radio][value=correct]:checked").length;
        incorrectAnswers += $("input[type=radio][value=option]:checked").length;
        unanswered -= $("input[type=radio]:checked").length;
       // if( $("input[type=radio]:checked").val()==="correct"){
       //     correctAnswers++;
       // }
        if ($("#t2op1").val()==="option") {
            console.log("this is incorrect because dear god why")
        } else {
            console.log("t2op1 value is option")
        }
        
        console.log(correctAnswers);
        console.log(incorrectAnswers);
        console.log(unanswered);

    }

    var displayThe = {
        game: function () {
            $("#trivia").removeClass("hidden");
            $("#start-button").addClass("hidden");
        },
        results: function () {
            // $("#trivia").empty();
            console.log("this is my results rn")
            //first: calculate results
            //store them
            //

        }

    }



});