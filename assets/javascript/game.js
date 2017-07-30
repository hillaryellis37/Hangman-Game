  var words = ["wetsuit", "surfboard", "bikini", "pitted", "barrel", "swell"];

  var wins = 0;
  var wordSelected = ""
  var lettersGuessed = [];
  var blankLetterArrayStart = [];
  var guessesRemaining = 10;
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

// This function takes the length of the chose word and replaces adds that many blanks to an array. Returns an array of
function wordToBlanks() {
	var wordLength = getWord().length;
	
	for (var i = 0; i < getWord().length; i++) {
	blankLetterArrayStart.push("_ ");
	}
	blankLetterArrayStart = blankLetterArrayStart.join("  ");
	return blankLetterArrayStart;
}

	wordToBlanks();
	console.log(blankLetterArrayStart);
	console.log(wordSelected);


  // function runs when user presses key.
document.onkeyup = function(event) {
	   // Determines which key was pressed.
    	var userGuess = event.key;
      	// alert(userGuess + wordSelected.length);
      	var indices = [];
      		// This if statements finds the indices of all the digits in which the letter occurs
			if (wordSelected.includes(userGuess)) {
				for (var i = 0; i < wordSelected.length; i++) {

					if (wordSelected[i] === userGuess) indices.push(i);
					
				}


				blankLetterArrayStart = blankLetterArrayStart.split("  ");

				for (var j = 0; j < indices.length; j++) {
					blankLetterArrayStart[indices[j]] = userGuess;						
				}

				blankLetterArrayStart = blankLetterArrayStart.join("  ");
console.log(blankLetterArrayStart);

			} else {
				guessesRemaining = guessesRemaining - 1;
console.log(guessesRemaining);
				lettersGuessed.push(userGuess);
console.log(lettersGuessed);
				
			}
		// }

}








	var html =

	          "<p>Word: " + blankLetterArrayStart + "</p>" +
	          "<p>lettersGuessed: " + wordSelected + "</p>" +
	          "<p>wins: " + wins + "</p>";

	        // Set the inner HTML contents of the #game div to our html string
	        document.querySelector("#game").innerHTML = html;
