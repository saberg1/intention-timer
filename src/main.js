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
};
