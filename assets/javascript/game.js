  var words = ["wetsuit", "surfboard", "bikini", "pitted", "barrel", "swell"];

  var wins = 0;
  var wordSelected = ""
  var lettersGuessed = [];
  var blankLetterArrayStart = [];
  var guessesCorrect = 0;
  var guessesRemaining = 10;
  var userGuessRecord = [1]; //>>> this is to prevent the user from enterting a letter more than once
// This function calculates a random int including min and max values.
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

function resetStats() {
  	wordSelected = "";
  	lettersGuessed = [];
  	blankLetterArrayStart = [];
  	guessesCorrect = 0;
  	guessesRemaining = 10;
  	userGuessRecord = [1];
}

function startfunction() {
	wordToBlanks();
	console.log(wordSelected);


var html =

	          "<p>Word: " + blankLetterArrayStart.join("   ").toUpperCase() + "</p>" +
	          "<p>Letters Guessed: " + lettersGuessed.join("   ").toUpperCase() + "</p>" +
	          "<p>Remaining Guesses: " + guessesRemaining + "</p>" +
	          "<p>Wins: " + wins + "</p>";

	        // Set the inner HTML contents of the #game div to our html string
	        document.querySelector("#game").innerHTML = html;
}

startfunction();


document.onkeyup = function(event) {
	   // Determines which key was pressed.
    	var userGuess = event.key;
      	userGuessRecord.push(userGuess);
      	var indices = [];
      	var x = lettersInArray(userGuessRecord, userGuess);
      		// This if statements finds the indices of all the digits in which the letter occurs
			if (x) {
				alert("You have already chosen this letter. Please try another letter.");
			} else {
				if (wordSelected.includes(userGuess)) {

					guessesRemaining = guessesRemaining - 1;
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
 };    //>>> end of fucntion(event)








	// var html =

	//           "<p>Word: " + blankLetterArrayStart.join("   ") + "</p>" +
	//           "<p>lettersGuessed: " + wordSelected + "</p>" +
	//           "<p>wins: " + wins + "</p>";

	//         // Set the inner HTML contents of the #game div to our html string
	//         document.querySelector("#game").innerHTML = html;


