// user interface logic

$(document).ready(function(){
  $("#button").click(function(){
    var countInput = parseInt($("input#count").val());

    pingpong(countInput);

    gameNumbers.forEach(function(countInput) {
        $("#list").append("<li>"+ countInput +"</li>");
        });
          });
            });

// business logic
var gameNumbers = [];

function pingpong(countInput) {
    for (var x = 1; x <= countInput; x += 1)
    if (x % 15 === 0) {
      gameNumbers.push("pingpong");
    }

    else if (x % 5 === 0) {
      gameNumbers.push("pong");
    }
    else if (x % 3 === 0) {
      gameNumbers.push("ping");
    }
    else {
    gameNumbers.push(x);
    }
    }
