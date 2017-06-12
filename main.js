var playing = false;


var startReset = document.getElementById('startreset');
var scoreValue = document.getElementById('scoreValue');
var score = document.getElementById('score');
var timeRemaining = document.getElementById('timeremaining');
var timeRemainingValue = document.getElementById('timeremainingvalue');
var gameOver = document.getElementById('gameover');
var question = document.getElementById('question');
var choices = document.getElementById('choices');
var box = document.getElementsByClassName('box');

startReset.addEventListener('click', function(event) {
	event.stopPropagation()
	if (playing == true) {         
		location.reload();			
	
	} else {  
		startGame();
	}

}, true);

choices.addEventListener('click', function(event) { 
	var eventTarget = event.target;
	checkForCorrectAnswer(eventTarget);

});


var startGame = function() { 
	var finalScore = document.getElementById('finalscore');
	var counter = 60;
	scoreValue = 0;
	timeRemaining.style.display = 'block';
	
	var countdown = setInterval(function() {
		counter -= 1;
		timeRemainingValue.textContent = counter;
		if (counter <= 0) {
			gameOver.style.display = 'block';
			playing = true;
			finalScore.textContent = scoreValue;
			clearInterval(countdown);
		
		} else {
			
		}
	
	}, 1000);
	questionsAnswers();
}


var questionsAnswers = function() { 

	question.textContent = randomNumber1 + ' x ' + randomNumber2;
	box[realBoxAnswer].textContent = realAnswer;
	
	for (var i = 0; i < box.length; i++) {
		var fakeAnswers = genrateRandomNumbers(99);
		if (box[i].style.display == 'none') {
			box[i].style.display = 'block';
			box[i].textContent = '';
		
		} else if (box[i].textContent == isNaN(box[i].textContent)) {
			box[i].textContent = fakeAnswers;
		
		} else {
			
		}

	}
}

var checkForCorrectAnswer = function(eventTarget) {

	if (eventTarget.textContent == realAnswer) {
	scoreValue = scoreValue + 1;
	score.textContent = 'Score: ' + scoreValue;
	event.target.style.display = 'none';

	} else {
		event.target.style.display = 'none';
	}

}
		
var genrateRandomNumbers = function(number) {
	var randomNumber = Math.floor(Math.random() * number + 1);
	return randomNumber;
}

var randomNumber1 = genrateRandomNumbers(9); // these have to be global because I use them with CheckForCorrectAnswer  and questionsAnswers function
var randomNumber2 = genrateRandomNumbers(9);
var realBoxAnswer = genrateRandomNumbers(3);
var realAnswer = randomNumber1 * randomNumber2;	













