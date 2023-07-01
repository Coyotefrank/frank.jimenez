//global variables that 
var score = 0;
var timeleft = 200;
var questions = [];
var answerChoices = [["...", "...", "... ", "...",]]; //made an array of strings, need to fill with dofferent choices for the quiz
var correctAnswer = []; //made of strings
var currentquestion = 0;

//all selectors 
var questionE1 = document.querySelector("#question");



function start(){
    //trigger when they pressed the button (event listiner)
    // starts the timer 
    // hide the start button
    // revea the options , questions 
}


function endGame(){
    // trigger eaither when time runs out or ehrn you finish the game
    // promt the user for initials 
    // displays the score 
    //hides the question
    // stop the timer when the user finishes the game 
    

}

function saveInitals(){
    //triggers when the user submitted their initials 
    //save score and initals to local storage 
      //read the existing scores 
      // add the new score to the end of the array 
      // now overwrite the 
    //take the user to the highs score page 
}