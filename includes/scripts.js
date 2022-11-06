var name = "";

/** The "beginQuiz" function checks if name provided by user is blank. If it is not blank, the quiz will be loaded by hiding the welcome screen and displaying the quiz screen. If it is blank, the user will be prompted that name field cannot be blank. **/
function beginQuiz() {
	this.name = document.getElementById('name').value;

	/** Validates name field to ensure it was not left blank **/
	if (/^[ \t\n]*$/.test(name)) {
		alert("Name field cannot be blank.");
		return false;
	}

	/** Hides welcome screen and displays quiz screen with fade in **/
	$("#welcomeSection").hide();
	$("#formSection").fadeIn(1000);
	welcome.innerHTML = "<b>Welcome, " + document.getElementById('name').value + "! Good luck!</b>";

	return false;
}

/** The "submitQuiz" function checks form entries to ensure they are valid and tallies up the correct answers. **/
function submitQuiz() {
	var correctAnswers = 0;
	var total = 5;

	$("#results5Right").hide();

	/** Checks answers and tallies up the correct ones **/
	if (document.getElementById('q1a').checked) {
		correctAnswers++;
	}

	if (document.getElementById('q2b').checked) {
		correctAnswers++;
	}

	if (document.getElementById('q3c').checked) {
		correctAnswers++;
	}

	if (document.getElementById('q4a').checked) {
		correctAnswers++;
	}

	/** Checks if at least one checkbox was ticked for Question 5. If not, prompts user to select at least one checkbox **/
	if (document.getElementById('q5a').checked || document.getElementById('q5b').checked || document.getElementById('q5c').checked || document.getElementById('q5d').checked) {
		if (document.getElementById('q5a').checked && document.getElementById('q5b').checked && document.getElementById('q5d').checked && !(document.getElementById('q5c').checked)) {
			correctAnswers++;
		}
	}
	else {
		alert("You must select at least one checkbox for Question 5.");
		return false;
	}

	/** Displays user score at top of quiz **/
	document.getElementById('results').innerHTML = "<h3>You scored " + correctAnswers + " out of " + total + "</h3>";
	$("#results").fadeIn(3000);

	/** Displays user score at bottom of quiz **/
	document.getElementById('results2').innerHTML = "<h3>RESULTS for " + this.name + ": You scored " + correctAnswers + " out of " + total + "</h3>";
	$("#results2").fadeIn(3000);

	/** Displays if user gets all questions right, user score of 5 **/
	if (correctAnswers == total) {
		document.getElementById('results5Right').innerHTML = "<h3>You scored " + correctAnswers + "/" + total + ". Perfect!</h3>";
		for (let i = 0; i < 10; i++) {
			$("#results5Right").fadeIn(150);
			$("#results5Right").fadeOut(150);
		}
		$("#results5Right").fadeIn(150);
	}
	return false;
}

$(function() {
	$('#hint1Hover').hover(function() { 
	    $('#q1hint').fadeIn(); 
	}, function() { 
	    $('#q1hint').fadeOut(); 
	});
	$('#hint2Hover').hover(function() { 
	    $('#q2hint').fadeIn(); 
	}, function() { 
	    $('#q2hint').fadeOut(); 
	});
	$('#hint3Hover').hover(function() { 
	    $('#q3hint').fadeIn(); 
	}, function() { 
	    $('#q3hint').fadeOut(); 
	});
	$('#hint4Hover').hover(function() { 
	    $('#q4hint').fadeIn(); 
	}, function() { 
	    $('#q4hint').fadeOut(); 
	});
	$('#hint5Hover').hover(function() { 
	    $('#q5hint').fadeIn(); 
	}, function() { 
	    $('#q5hint').fadeOut(); 
	});
});