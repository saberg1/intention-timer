//Query Selectors
var acitivyInput = document.querySelector('#activityDescription');
var minutesInput = document.querySelector('#minutes');
var secondsInput = document.querySelector('#seconds');

var studyImg = document.querySelector('#study');
var meditatImg = document.querySelector('#meditate')
var exerciseImg = document.querySelector('#exercise')

var submitBtn = document.querySelector('#submit');

var imageSection = document.querySelector('#imageSection');
var form = document.querySelector('#form');
var rightAside = document.querySelector('#rightAside')

//Event Listeners


//Event Handlers
function changeColor(){
  if(event.target.id === 'study'){
    console.log('study')
  }
  if(event.target.id === 'meditate'){
    console.log('mediate')
  }
  if(event.target.id === 'exercise'){
    console.log('exercise')
  }
}