//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var frootLoopsScore = 0;//result1
var cinToastCrunchScore = 0;//result2
var frostFlakeScore = 0;//result3
var cheerioScore = 0;//result4

var result = document.getElementById("result");



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

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", frootLoops);
q1a2.addEventListener("click", cinToastCrunch);
q1a3.addEventListener("click", cheerio);
q1a4.addEventListener("click", frostFlake);

q2a1.addEventListener("click", cinToastCrunch);
q2a2.addEventListener("click", frostFlake);
q2a3.addEventListener("click", frootLoops);
q2a4.addEventListener("click", cheerio);

q3a1.addEventListener("click", frostFlake);
q3a2.addEventListener("click", cinToastCrunch);
q3a3.addEventListener("click", frootLoops);
q3a4.addEventListener("click", cheerio);

q4a1.addEventListener("click", frootLoops);
q4a2.addEventListener("click", cheerio);
q4a3.addEventListener("click", frostFlake);
q4a4.addEventListener("click", cinToastCrunch);

q5a1.addEventListener("click", cheerio);
q5a2.addEventListener("click", frootLoops);
q5a3.addEventListener("click", frostFlake);
q5a4.addEventListener("click", cinToastCrunch);

//#TODO: Define quiz functions here
function updateResult(){
  var text = "Froot Loops!";
  var mostPicked = frootLoopsScore;
  if(cinToastCrunchScore > mostPicked)
    {
      mostPicked = cinToastCrunchScore;
      text = "Cinnamon Toast Crunch!";
    }
  
  if(frostFlakeScore > mostPicked)
  {
    mostPicked = frostFlakeScore;
    text = "Frosted Flakes!";
  }
  
  if(cheerioScore > mostPicked)
  {
    mostPicked = cheerioScore;
    text = "Cheerios!";
  }  
  result.innerHTML = text;
}

function frootLoops(){
  frootLoopsScore++;
  questionCount++;
  if(questionCount >= 5)
    {
      updateResult();
    }
}

function cinToastCrunch(){
  cinToastCrunchScore++;
  questionCount++;
  if(questionCount >= 5)
    {
      updateResult();
    }
}

function frostFlake(){
  frostFlakeScore++;
  questionCount++;
  if(questionCount >= 5)
    {
      updateResult();
    }
}

function cheerio()
{
  cheerioScore++;
  questionCount++;
  if(questionCount >= 5)
    {
      updateResult();
    }
}