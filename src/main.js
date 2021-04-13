//Query Selectors
var activityInput = document.querySelector('#activityDescription');
var minutesInput = document.querySelector('#minutes');
var secondsInput = document.querySelector('#seconds');

var studyImg = document.querySelector('#study');
var meditateImg = document.querySelector('#meditate');
var exerciseImg = document.querySelector('#exercise');

var submitBtn = document.querySelector('#submit');

var imageSection = document.querySelector('#imageSection');
var form = document.querySelector('#form');
var rightAside = document.querySelector('#rightAside');

var studyDiv = document.querySelector('#studyDiv');
var meditateDiv = document.querySelector('#meditateDiv');
var exerciseDiv = document.querySelector('#exerciseDiv')

//Event Listeners
studyDiv.addEventListener('click', changeColor);
meditateDiv.addEventListener('click', changeColor);
exerciseDiv.addEventListener('click', changeColor);
submitBtn.addEventListener('click', submitData)
// meditateImg.addEventListener('click');
// exerciseImg.addEventListener('click');

//Event Handlers
function changeColor(){
if (event.target.id === 'study'){
  studyDiv.innerHTML = `<img src="assets/study-active.svg">`
}
if (event.target.id === 'meditate'){
  meditateDiv.innerHTML = `<img src="assets/meditate-active.svg">`
}
if (event.target.id === 'exercise'){
  exerciseDiv.innerHTML = `<img src="assets/exercise-active.svg">`
}
};

function submitData(){
  event.preventDefault()
  if (activityInput.value || minutesInput.value || secondsInput.value){
    var action = new Activity(category, activityInput.value, minutesInput.value, secondsInput.value)
} else{
  alert('Test')
}
};
