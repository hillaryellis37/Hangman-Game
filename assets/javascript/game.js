
  
  var words = ["wetsuit", "surfboard", "bikini", "pitted", "barrel", "swell"];

  var wins = 0;
  var wordSelected = "";
  var lettersGuessed = [];
  var blankLetterArrayStart = [];
  var guessesCorrect = 0;
  var guessesRemaining = 8;
  var userGuessRecord = [1];
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //>>> this is to prevent the user from enterting a letter more than once

//function that creates buttons:
function createButtons() {
	for (var i = 0; i < letters.length; i++) {
	    var buttonElement = document.createElement("BUTTON");
	    var l = document.createTextNode(letters[i]);
	    buttonElement.appendChild(l);
	    buttonElement.className = "letter-button btn btn-default";
	    buttonElement.setAttribute("data-letter", letters[i]);
	    buttonElement.setAttribute("onclick", "audioButton.play()");
	    document.getElementById("button_div").appendChild(buttonElement);
	}    
}








// function to generate random number:
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
// This function takes the random int from get getRandomIntInclusive fucntion and chooses a word from the words array.
function getWord() {
	var index = getRandomIntInclusive(0, words.length - 1);
	wordSelected = words[index];
	return wordSelected;
}

// This function takes the length of the chosen word and replaces adds that many blanks to an array. Returns an array of blanks
function wordToBlanks() {
	var wordLength = getWord().length;
	console.log(wordSelected);
	
	for (var i = 0; i < wordLength; i++) {
	blankLetterArrayStart.push("_");
	}
	return blankLetterArrayStart;
}
//>>> This function returns true if the letter has already been guessed by the user.
function lettersInArray(array, value) {
	var count = 0 
	for (var i = 0; i < array.length; i++) {
		if (array[i] == value) count++;
	}
	if (count === 2) {
		array.pop();
		return true;
	}	
	else {
		return false;
	}
}

// this button restarts the game and sets points to zero:
document.getElementById("restart").onclick = function(restartButton) {
	wins = 0
  	wordSelected = "";
  	lettersGuessed = [];
  	blankLetterArrayStart = [];
  	guessesCorrect = 0;
  	guessesRemaining = 8;
  	userGuessRecord = [1];
  	startfunction();
}

// this function resets the word when a win or loss occurs:
function resetStats() {
  	wordSelected = "";
  	lettersGuessed = [];
  	blankLetterArrayStart = [];
  	guessesCorrect = 0;
  	guessesRemaining = 8;
  	userGuessRecord = [1];
  	document.getElementById("img_surfer").style.opacity = 1;
}

// this function starts off the game and displays the blank letters to html after selecting a random word from the words list:
function startfunction() {
	wordToBlanks();
	console.log(wordSelected);
	document.getElementById("img_surfer").style.opacity = 1;

var html =

	          "<p>Word: " + blankLetterArrayStart.join("   ").toUpperCase() + "</p>" +
	          "<p>Letters Guessed: " + lettersGuessed.join("   ").toUpperCase() + "</p>" +
	          "<p>Remaining Guesses: " + guessesRemaining + "</p>" +
	          "<p>Wins: " + wins + "</p>";

	        // Set the inner HTML contents of the #game div to our html string
	        document.querySelector("#game").innerHTML = html;
}




// all game logic:

 $(document).ready(function() {



		var classname = document.getElementsByClassName("letter-button");
	
		var getAttributeFunction = function() {
			var attribute = this.getAttribute("data-letter");			
			var userGuess = attribute.toLowerCase();

      	userGuessRecord.push(userGuess);

      	var indices = [];
      	var x = lettersInArray(userGuessRecord, userGuess);
      		// This if statements finds the indices of all the digits in which the letter occurs

			if (x) {
				alert("You have already chosen this letter. Please try another letter.");
			} else {

				if (wordSelected.includes(userGuess)) {

					lettersGuessed.push(userGuess);	

					for (var i = 0; i < wordSelected.length; i++) {
						if (wordSelected[i] === userGuess) indices.push(i);						
					}
					for (var j = 0; j < indices.length; j++) {
						guessesCorrect = guessesCorrect + 1;
						blankLetterArrayStart[indices[j]] = userGuess;						
					}

				} else {
					guessesRemaining = guessesRemaining - 1;
					lettersGuessed.push(userGuess);
					document.getElementById("img_surfer").style.opacity = guessesRemaining / 10;



				}
				if (wordSelected.length === guessesCorrect) {
						alert("you win!");
						wins = wins + 1;
						resetStats();
						startfunction();
				} 
				if (guessesRemaining === 0) {
						alert("you lose!")
						resetStats();
						startfunction();
				}
			}
var html =

	          "<p>Word: " + blankLetterArrayStart.join("   ").toUpperCase() + "</p>" +
	          "<p>Letters Guessed: " + lettersGuessed.join("   ").toUpperCase() + "</p>" +
	          "<p>Remaining Guesses: " + guessesRemaining + "</p>" +

	          "<p>Wins: " + wins + "</p>";

	        // Set the inner HTML contents of the #game div to our html string
	        document.querySelector("#game").innerHTML = html;

		};


		for (var i = 0; i < classname.length; i++) {
			classname[i].addEventListener("click", getAttributeFunction, false);
		}
			
}); //ready.function end

var audioButton = new Audio();
audioButton.src = "assets/audio/correct.mp3";


startfunction();
createButtons();


