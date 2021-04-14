//Query Selectors
var activityInput = document.querySelector('#activityDescription');
var minutesInput = document.querySelector('#minutes');
var secondsInput = document.querySelector('#seconds');

var studyRadio = document.querySelector('#study')
var meditateRadio = document.querySelector('#meditate')
var exerciseRadio = document.querySelector('#exercise')
var divInputs = document.querySelector('#addListener')

var submitBtn = document.querySelector('#submit');

var imageSection = document.querySelector('#imageSection');
var form = document.querySelector('#form');
var rightAside = document.querySelector('#rightAside');

var studyDiv = document.querySelector('#studyDiv');
var meditateDiv = document.querySelector('#meditateDiv');
var exerciseDiv = document.querySelector('#exerciseDiv');

//Global Variables
var currentActivity;
var activities = [];

var meditateImg = document.querySelector('#meditateImg');
var exerciseImg = document.querySelector('#exerciseImg');
var studyImg = document.querySelector('#studyImgChng');
var activityCategory = document.getElementsByName('activity');

var newActivity = document.querySelector('#newActivity');
var activityContainer = document.querySelector('#activityContainer')
//Event Listeners
divInputs.addEventListener('click', changeMe);
submitBtn.addEventListener('click', submitData);

//Event Handlers
function changeMe(){
  if(studyRadio.checked){
    meditateImg.src = "./assets/meditate.svg"
    exerciseImg.src = "./assets/exercise.svg"
    studyRadio.checked ? studyImg.src = "./assets/study-active.svg" : studyImg.src = "./assets/study.svg"
  }
  if(meditateRadio.checked){
    exerciseImg.src = "./assets/exercise.svg"
    studyImg.src = "./assets/study.svg"
    meditateRadio.checked ? meditateImg.src = "./assets/meditate-active.svg" : meditateImg.src = "./assets/meditate.svg"
  }
  if(exerciseRadio.checked){
    studyImg.src = "./assets/study.svg"
    meditateImg.src = "./assets/meditate.svg"
    exerciseRadio.checked ? exerciseImg.src = "./assets/exercise-active.svg" : exerciseImg.src = "./assets/exercise.svg"
  }
}
function submitData(){
  var activity;
  for (var i = 0; i < activityCategory.length; i++){
    if (activityCategory[i].checked){
      activity = activityCategory[i].value;
    }
  }
  event.preventDefault()
  if (activityInput.value || minutesInput.value || secondsInput.value){
    currentActivity = new Activity(activity, activityInput.value, minutesInput.value, secondsInput.value)
  }
  displayTimer();
};


function displayTimer() {
  newActivity.innerText = 'Current Activity'
}
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);
//
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//
//         display.textContent = minutes + ":" + seconds;
//
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// replace new activity with Current Activity
// replace reamining innerHTML with timer and countdown/start button
// <svg height="100" width="100">
  // <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
// </svg>
// goal: start button in minddle of circle with above countdown
// inputs: input values from form field for minutes and seconds and color from chosen category
// output: new TIMER
// submit form button changes page view to timer
// function timer takes inputs minutes and second and displays on countdown
// takes color of selected category and displays as cirlce
//
