//Global Variables

var seconds = 5;
var newSeconds;
var correctAnswers = 0;
var incorrectAnswers = 0;
var time0 = false;
var counting = true

//Functions

//Subtract one from seconds
function count() {
	seconds = seconds - 1;
	//Get Time display on #timer
	$("#time").text('Time Remaining: ' + seconds)
}
//Subtract one from seconds every second
function countDown() {
	var newSeconds = setInterval(count, 1000);
}

//Add one to correct answers
function addOneC() {
	correctAnswers = correctAnswers + 1;

}

function addOneI() {
	incorrectAnswers = incorrectAnswers + 1;
}

function stopAtZero() {
	counting = false
}

//When the page loads
$( document ).ready() 

	//Show the game-screen div
	$(".Game-Screen").show()
	//Hide the game-screen-2 div
	$(".Game-Screen-2").hide()

	
	//When the Start Button is Clicked
	$(".start-button").on('click', function(){

		
		//Hide the game-screen div
		$(".Game-Screen").hide()
		//Show the game-screen-2 div
		$(".Game-Screen-2").show()

		countDown()

		//When a correct choice circle is clicked
		$(".correct").on('click', function(){
		addOneC()
		})

		//When an incorrect choice circle is clicked
		$(".incorrect").on('click', function(){
		addOneI()
		})

	})







//When the times gets to zero
	//If there are any unclicked circles, 1 is added to unanswered
	//game-text.div disappears
	//game-end-text appears
		//displays correct, incorrect, and unanswered variables 

