$(document).ready(function () {
var gemvalue = 0;
var computer = Math.floor((Math.random() * 120) + 19);
var losses = 0;
var wins = 0; 

$("#gemvalue").text(gemvalue);
$("#losses").text(losses);
$("#wins").text(wins);

function reset() {
    gemvalue = 0;
    $("#gemvalue").text("0");
}

// function losingAudio() {
//     if (losingAudio = 1) {
        // var audioElement = document.createElement('audio');
        // audioElement.setAttribute('src', 'assets/sound/haha.mp3');
        // audioElement.setAttribute('autoplay', 'autoplay');
//             }
//             if (losingAudio = 2) {
//                 var audioElement = document.createElement('audio');
//                 audioElement.setAttribute('src', 'assets/sound/haha.mp3');
//                 audioElement.setAttribute('autoplay', 'autoplay');
//                     }
// }

    function losingAudio() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'assets/sound/haha.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
    }



    

        $(".number").on("click", function () {
            gemvalue += Math.floor((Math.random() * 12) + 1);
            $("#gemvalue").text(gemvalue);
            console.log(gemvalue);

            if (gemvalue === computer) {
                wins++;
                $("#wins").text(wins);
                $("#myWinModal").modal('show');
                 reset("gemvalue");
             
            }

            if (gemvalue > computer) {
                losses++;
                $("#losses").text(losses);
                $("#myModal").modal('show');
                computer = Math.floor((Math.random() * 120) + 19);
                $("#computer").text(computer);
                losingAudio();
                reset();

            

            }

            

        })

        $(".modalbtn").on("click", function () {
            $("#myModal").modal('hide');
            $("#myWinModal").modal('hide');
        })

        $("#computer").text(computer);
        
        console.log(losingAudio);
        
        
        
        


    })

    