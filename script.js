//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var detectiveScore = 0;
var victimScore = 0;
var scapegoatScore = 0;
var criminalScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var restart = document.getElementById("restart");

q1a4.addEventListener("click", detective);
q1a2.addEventListener("click", victim);
q1a1.addEventListener("click", scapegoat);
q1a3.addEventListener("click", criminal);

q2a3.addEventListener("click", detective);
q2a2.addEventListener("click", victim);
q2a1.addEventListener("click", scapegoat);
q2a4.addEventListener("click", criminal);

q3a2.addEventListener("click", detective);
q3a3.addEventListener("click", victim);
q3a1.addEventListener("click", scapegoat);
q3a4.addEventListener("click", criminal);

q4a4.addEventListener("click", detective);
q4a1.addEventListener("click", victim);
q4a3.addEventListener("click", scapegoat);
q4a2.addEventListener("click", criminal);

restart.addEventListener("click", reStart);

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.

//#TODO: Define quiz functions here
function detective() {
  detectiveScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function victim() {
  victimScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function scapegoat() {
  scapegoatScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function criminal() {
  criminalScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function updateResult() {
  if (detectiveScore >= 2) {
    result.innerHTML = " detective ";
  } else if (victimScore >= 2) {
    result.innerHTML = " victim ";
  } else if (scapegoatScore >= 2) {
    result.innerHTML = " scapegoat ";
  } else if (criminalScore >= 2) {
    result.innerHTML = " criminal ";
  } else {
    result.innerHTML =
      "you are an observer! (main characters are overrated anyways)";
  }
}

function reStart() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  criminalScore = 0;
  detectiveScore = 0;
  victimScore = 0;
  scapegoatScore = 0;
  for (var i = 0; i < q1.length; i++) {
    q1[i].disabled = false;
  }
  for (var i = 0; i < q2.length; i++) {
    q2[i].disabled = false;
  }
  for (var i = 0; i < q3.length; i++) {
    q3[i].disabled = false;
  }
  for (var i = 0; i < q4.length; i++) {
    q4[i].disabled = false;
  }
}

var q1 = document.getElementsByClassName("q1");
function disable1() {
  for (var i = 0; i < q1.length; i++) {
    q1[i].disabled = true;
  }
}
var q2 = document.getElementsByClassName("q2");
function disable2() {
  for (var i = 0; i < q2.length; i++) {
    q2[i].disabled = true;
  }
}
var q3 = document.getElementsByClassName("q3");
function disable3() {
  for (var i = 0; i < q3.length; i++) {
    q3[i].disabled = true;
  }
}
var q4 = document.getElementsByClassName("q4");
function disable4() {
  for (var i = 0; i < q4.length; i++) {
    q4[i].disabled = true;
  }
}
