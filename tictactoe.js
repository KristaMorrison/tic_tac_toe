$(document).ready(function(){
  var pirate;
  var pirate1;
  var pirate2;
  var clickCounter = 1;

  $("#startButton").click(function(){
    //Make the start button take the names and make the text box go away
  });
  //changes image of cell1 to bones when user clicks
  $("#cellButton1").click(function(){
    $("#cell1").html(onePlay());
    checkForWinner();
  });

  //changes image of cell2 based on player turn when user clicks
  $("#cellButton2").click(function(){
    $("#cell2").html(onePlay());
    checkForWinner();
  });

  //changes image of cell3 based on player turn when user clicks
  $("#cellButton3").click(function(){
    $("#cell3").html(onePlay());
    checkForWinner();
  });

  //changes image of cell4 based on player turn when user clicks
  $("#cellButton4").click(function(){
    $("#cell4").html(onePlay());
    checkForWinner();
  });

  //changes image of cell5 based on player turn when user clicks
  $("#cellButton5").click(function(){
    $("#cell5").html(onePlay());
    checkForWinner();
  });

  //changes image of cell6 based on player turn when user clicks
  $("#cellButton6").click(function(){
    $("#cell6").html(onePlay());
    checkForWinner();
  });

  //changes image of cell7 based on player turn when user clicks
  $("#cellButton7").click(function(){
    $("#cell7").html(onePlay());
    checkForWinner();
  });

  //changes image of cell8 based on player turn when user clicks
  $("#cellButton8").click(function(){
    $("#cell8").html(onePlay());
    checkForWinner();
  });

  //changes image of cell9 based on player turn when user clicks
  $("#cellButton9").click(function(){
    $("#cell9").html(onePlay());
    checkForWinner();
  });


//Returns picture based on which player's turn it currently is
  function onePlay(){
    var picture;
    if (clickCounter%2 === 1){
      picture = '<img src="bones.png" height= 5vw width= 5vw/>';
    }
    if (clickCounter%2 === 0) {
      picture ='<img src="skull.png" height= 5vw width= 5vw/>';
    };
    clickCounter++;
    return picture;
  };

//Checks for the winner or stalemate
function checkForWinner(){
  if ($("#cell1").html() === $("#cell2").html() && $("#cell2").html() ===$("#cell3").html()){
    if (clickCounter%2 === 0){
    alert("player one wins");
    } else {
    alert ("Player 2 wins!");
    }
  } else if ($("#cell4").html() === $("#cell5").html() && $("#cell5").html() ===$("#cell6").html()){
    if (clickCounter%2 === 0){
    alert("player one wins");
    } else {
    alert ("Player 2 wins!");
    }
  } else if ($("#cell7").html() === $("#cell8").html() && $("#cell8").html() ===$("#cell9").html()){
    if (clickCounter%2 === 0){
    alert("player one wins");
    } else {
    alert ("Player 2 wins!");
    }
  } else if ($("#cell1").html() === $("#cell4").html() && $("#cell4").html() ===$("#cell7").html()){
    if (clickCounter%2 === 0){
    alert("player one wins");
    } else {
    alert ("Player 2 wins!");
    }
  } else if ($("#cell2").html() === $("#cell5").html() && $("#cell5").html() ===$("#cell8").html()){
    if (clickCounter%2 === 0){
    alert("player one wins");
    } else {
    alert ("Player 2 wins!");
    }
  } else if ($("#cell3").html() === $("#cell6").html() && $("#cell6").html() ===$("#cell9").html()){
    if (clickCounter%2 === 0){
    alert("player one wins");
    } else {
    alert ("Player 2 wins!");
    }
  } else if ($("#cell1").html() === $("#cell5").html() && $("#cell5").html() ===$("#cell9").html()){
    if (clickCounter%2 === 0){
    alert("player one wins");
    } else {
    alert ("Player 2 wins!");
    }
  }  else if ($("#cell3").html() === $("#cell5").html() && $("#cell5").html() ===$("#cell7").html()){
    if (clickCounter%2 === 0){
    alert("player one wins");
    } else {
    alert ("Player 2 wins!");
    }
  } else if(clickCounter === 10){
    $(".grid").replaceWith('<img src="kraken.gif" height=281px width=500px/>');
  };
};


});
