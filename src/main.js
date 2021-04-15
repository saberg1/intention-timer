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
    // studyContainer.style.border = "2px #B3FD78 solid"
    studyContainer.classList.toggle('study')
  }
  if(meditateRadio.checked){
    exerciseImg.src = "./assets/exercise.svg"
    studyImg.src = "./assets/study.svg"
    meditateRadio.checked ? meditateImg.src = "./assets/meditate-active.svg" : meditateImg.src = "./assets/meditate.svg"
    // meditateContainer.style.border = "2px #C278FD solid"
    meditateContainer.classList.toggle('meditate')
  }
  if(exerciseRadio.checked){
    studyImg.src = "./assets/study.svg"
    meditateImg.src = "./assets/meditate.svg"
    exerciseRadio.checked ? exerciseImg.src = "./assets/exercise-active.svg" : exerciseImg.src = "./assets/exercise.svg"
    // exerciseContainer.style.border = "2px #FD8078 solid"
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
  var display = '04:00'
  activityContainer.innerHTML = `
  <div id='testID'> </div>
    <a href="" class="btn btn-start">START</a>
    `
    setup();
}

var counter = 0
var timeleft = 144;
function setup(){
  activityContainer.innerHTML = convertToSeconds(timeleft - counter)
  setInterval(timeIt, 1000)
}
function timeIt(){
  counter++
  activityContainer.innerHTML = convertToSeconds(timeleft - counter)
}
function convertToSeconds(s){
   var min = Math.floor(s / 60)
   var sec = s % 60
   min = min < 10 ? '0' + min : min
  sec = sec < 10 ? '0' + sec : sec
   return `${min}:${sec}`
}





// inputs: input values from form field for minutes and seconds and color from chosen category
// output: new TIMER
// submit form button changes page view to timer
// function timer takes inputs minutes and second and displays on countdown
// takes color of selected category and displays as cirlce
//
