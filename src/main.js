//Query Selectors
var activityInput = document.querySelector('#activityDescription');
var minutesInput = document.querySelector('#minutes');
var secondsInput = document.querySelector('#seconds');

var studyRadio = document.querySelector('#study')
var meditateRadio = document.querySelector('#meditate')
var exerciseRadio = document.querySelector('#exercise')
var divInputs = document.querySelector('#addListener')
// var studyImg = document.querySelector('#changePicture')

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
//Event Listeners
divInputs.addEventListener('click', changeMe)
// studyDiv.addEventListener('click', changeColor);
// meditateDiv.addEventListener('click', changeColor);
// exerciseDiv.addEventListener('click', changeColor);
// submitBtn.addEventListener('click', submitData)
// meditateImg.addEventListener('click');
// exerciseImg.addEventListener('click');

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

// function changeMe(){
//   if(event.target.id === 'study') {
//     studyImg.checked ? studyImg.src = "assets/study-active.svg" : studyImg.src = "./assets/study.svg"
// }
// }
// function changeColor(){
//   if (event.target.id === 'study'){
//     studyDiv.innerHTML = `<img src="assets/study-active.svg">`
//   }
//   if (event.target.id === 'meditate'){
//     meditateDiv.innerHTML = `<img src="assets/meditate-active.svg">`
//   }
//   if (event.target.id === 'exercise'){
//     exerciseDiv.innerHTML = `<img src="assets/exercise-active.svg">`
//   }
// };
// function submitData(){
//   event.preventDefault()
//   if (activityInput.value || minutesInput.value || secondsInput.value){
//     currentActivity = new Activity(category, activityInput.value, minutesInput.value, secondsInput.value)
//   }
// };

//hide and show the two different images off .checked 
// terinary functions for the change images

// function isChecked(){
//   if()
// }