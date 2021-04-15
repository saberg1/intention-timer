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

// var studyDiv = document.querySelector('#studyDiv');
// var meditateDiv = document.querySelector('#meditateDiv');
// var exerciseDiv = document.querySelector('#exerciseDiv');

var studyContainer = document.querySelector('#studyContainer');
var meditateContainer = document.querySelector('#meditateContainer');
var exerciseContainer = document.querySelector('#exerciseContainer');

var meditateImg = document.querySelector('#meditateImg');
var exerciseImg = document.querySelector('#exerciseImg');
var studyImg = document.querySelector('#studyImgChng');
var activityCategory = document.getElementsByName('activity');

var newActivity = document.querySelector('#newActivity');
var activityContainer = document.querySelector('#activityContainer')

//Global Variables
var currentActivity;
var activities = [];

//Event Listeners
divInputs.addEventListener('click', changeMe);
submitBtn.addEventListener('click', submitData);

activityContainer.addEventListener('click', updateTimer)

//Event Handlers
function changeMe(){
  if(studyRadio.checked){
    meditateImg.src = "./assets/meditate.svg"
    exerciseImg.src = "./assets/exercise.svg"
    studyRadio.checked ? studyImg.src = "./assets/study-active.svg" : studyImg.src = "./assets/study.svg"
    studyContainer.classList.toggle('study')
  }
  if(meditateRadio.checked){
    exerciseImg.src = "./assets/exercise.svg"
    studyImg.src = "./assets/study.svg"
    meditateRadio.checked ? meditateImg.src = "./assets/meditate-active.svg" : meditateImg.src = "./assets/meditate.svg"
    meditateContainer.classList.toggle('meditate')
  }
  if(exerciseRadio.checked){
    studyImg.src = "./assets/study.svg"
    meditateImg.src = "./assets/meditate.svg"
    exerciseRadio.checked ? exerciseImg.src = "./assets/exercise-active.svg" : exerciseImg.src = "./assets/exercise.svg"
    exerciseContainer.classList.toggle('exercise')
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
  var min = parseInt(currentActivity.minutes);
  var sec = parseInt(currentActivity.seconds);
  min = min <10 ? '0' + min : min
  sec = sec <10 ? '0' + sec : sec
  activityContainer.innerHTML = `
    <div>${min}:${sec}</div>
    <a href="" id="btn" class="btn btn-start">START</a>

    `
}

function updateTimer(event) {
  if(event.target.id === 'btn') {
    var startMin = parseInt(currentActivity.minutes);
    var startSec = parseInt(currentActivity.seconds);
    var time = startMin*60 + startSec
  var myInterval =  setInterval(function() {
      var min = Math.floor(time/60)
      var sec = time % 60

      min = min <10 ? '0' + min : min
      sec = sec <10 ? '0' + sec : sec

      activityContainer.innerHTML = `
      <h4>${min}:${sec}</h4>
      <a href="" id="btn" class="btn btn-start">START</a>
      `

    if (--time < 0)  {
      clearInterval(myInterval);
      doneFunction();
    }
    }
    ,1000);
    currentActivity.startTimer()
    event.preventDefault()
  }
}

function doneFunction() {
  activityContainer.innerHTML = `
  <h4>00:00</h4>
  <a href="" id="btn" class="btn btn-start">COMPLETE</a>
  `
}

function onlyNumberKey(event) {
  var ASCIICode = (event.which) ? event.which : event.keyCode

  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}



// inputs: input values from form field for minutes and seconds and color from chosen category
// output: new TIMER
// submit form button changes page view to timer
// function timer takes inputs minutes and second and displays on countdown
// takes color of selected category and displays as cirlce
//
