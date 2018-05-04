'use strict';

/*const QUESTIONS = [
];

const ANSWERS = [
];

let questionNum = 0;

let numberCorrect = 0;*/

function handleStartButton() {
	$('.start').on('click', `.js-startButton`, event => {
		$('.start').remove();
	});
	console.log('`handleStart` ran');
}


/*function renderQuiz() {
	console.log('`renderQuiz` ran');
	$('.questionsAnswerApp').html();
	

}

function showResults() {
	console.log('`showResults` ran');

}

function handleQuizApp() {

}

$(handleQuizApp);*/