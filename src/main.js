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

//Event Listeners
studyImg.addEventListener("click", changeColor);
// meditateImg.addEventListener('click');
// exerciseImg.addEventListener('click');

//Event Handlers
function changeColor(){
studyImg.innerHTML = `<img src="./assets/study-active.svg" alt="study-active"/>`
};
