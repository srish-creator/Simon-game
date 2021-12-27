
   var UserRandomPatterns=[];
const buttonColors =["red","green","blue","yellow"];
var gamePattern=[];
var started=false;
var level=0;

$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  $(".btn").click(function()
{
 
 var UserRandomColor= $(this).attr("id");
 UserRandomPatterns.push(UserRandomColor);
 playSound(UserRandomColor);
 animatePress(UserRandomColor);
 checkAnswer(UserRandomPatterns.length-1);
});
  function checkAnswer(currentLevel1)
  {
  if(gamePattern[currentLevel1]===UserRandomPatterns[currentLevel1])
  {
      if(gamePattern.length===UserRandomPatterns.length)
      {
       setTimeout(function (){
           nextSequence();},1000);
        console.log("Success");
    }
   
  }
  else{
    $("#level-title").text("Game Over, Press any Key to Start");
    $("body").addClass("game-over");
    setTimeout(function (){
        $("body").removeClass("game-over");
    },200);
 playSound("wrong");
    console.log("fail");
    startOver();
  }

  }
function nextSequence(){
   UserRandomPatterns=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
   
   $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
}
function playSound(name)
{
    var myaudio = new Audio("sounds/"+name+".mp3");
    myaudio.play(20);
}

function animatePress(currentColor)
{
 $("#"+currentColor).addClass("pressed");
 setTimeout(function (){
     $("#"+currentColor).removeClass("pressed");
 },100);
}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}