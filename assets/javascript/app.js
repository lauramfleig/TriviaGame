//Global Variables

var seconds = 10;
var newSeconds;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 3;
var questions = $('#questions').clone()

//Functions

//Subtract one from seconds
function count() {
	if (seconds > 0) {
		seconds = seconds - 1;
		//Get Time display on #timer
		$("#time").text('Time Remaining: ' + seconds)

	} else {
		$('.Game-Screen-2').hide()
		$('.Final-Screen').show()
	}
}
//Subtract one from seconds every second
function countDown() {
	 newSeconds = setInterval(count, 1000);
}

//Add one to correct answers
function addOneC() {
	correctAnswers = correctAnswers + 1;
	$('.final-correct').text('Correct Answers: ' + correctAnswers);
	
}

//Add one to incorrect answers
function addOneI() {
	incorrectAnswers = incorrectAnswers + 1;
	$('.final-incorrect').text('Incorrect Answers: ' + incorrectAnswers);
}

function subtractUA() {
	
	unanswered = unanswered - 1;
	$('.unanswered').text('Unanswered: ' + unanswered)
}

function originalState() {
	seconds = 10;
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 3;
	//Hide game screens 2 and final
	$('.Game-Screen-2').hide()
	$('.Final-Screen').hide()
	//Show game screen 1
	$('.Game-Screen').show()

}


//When the page loads
$( document ).ready() 

	originalState()

	
	//When the Start Button is Clicked
	$(".start-button").on('click', function(){

		//Hide the game-screen div
		$(".Game-Screen").hide()
		//Show the game-screen-2 div
		$(".Game-Screen-2").show()

		countDown()

		//When any answer in the first question is clicked, disable the others
		$('.answer').on('click', function() {
			$('.answer').attr('disabled', 'disabled');

		})

		//When any answer in the second question is clicked, disable the others
		$('.thing').on('click', function() {
			$('.thing').attr('disabled', 'disabled')
		})

		//When any answer in the third question is clicked, disable the others
		$('.boop').on('click', function() {
			$('.boop').attr('disabled', 'disabled')
		})
		
		//When a correct choice circle is clicked
		$('.correct').on('click', function(){
			addOneC()
			subtractUA()
		})

		//When an incorrect choice circle is clicked
		$('.incorrect').on('click', function(){
			addOneI()
			subtractUA()
		})

		//If answers have not been clicked, display 0 on the final screen
		$('.final-correct').text('Correct Answers: ' + correctAnswers)
		$('.final-incorrect').text('Incorrect Answers: ' + incorrectAnswers)
		$('.unanswered').text('Unanswered: ' + unanswered)
			

	})

	//When the submit button is clicked
	$(".submit").on('click', function(){

		//Hide game-screen-2 div
		$('.Game-Screen-2').hide()
		//Show final-screen
		$('.Final-Screen').show()

	})

	//When the reset button is clicked
	$(".reset").on('click', function(){
		//Call Function to set game to original state
		originalState()

		clearInterval(newSeconds)
		$('#time').text('Time Remaining: ' + seconds)


	$('#questions').replaceWith(questions.clone())
		



	})





