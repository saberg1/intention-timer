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

var minutesDivInput = document.querySelector('#minutesDivInput');
var secondsDivInput = document.querySelector('#secondsDivInput');
var activityDivInput = document.querySelector('#activityDivInput');

var studyContainer = document.querySelector('#studyContainer');
var meditateContainer = document.querySelector('#meditateContainer');
var exerciseContainer = document.querySelector('#exerciseContainer');

var meditateImg = document.querySelector('#meditateImg');
var exerciseImg = document.querySelector('#exerciseImg');
var studyImg = document.querySelector('#studyImgChng');
var activityCategory = document.getElementsByName('activity');

var newActivity = document.querySelector('#newActivity');
var activityContainer = document.querySelector('#activityContainer')

var activityRadios = document.querySelector('#activityRadios')

//Global Variables
var currentActivity;
var activities = [];

//Event Listeners
divInputs.addEventListener('click', changeMe);
submitBtn.addEventListener('click', validate);

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
  if (activityInput.value || minutesInput.value || secondsInput.value){
    currentActivity = new Activity(activity, activityInput.value, minutesInput.value, secondsInput.value)
  }
  activities.push(currentActivity)
  displayTimer();
};


function displayTimer() {
  newActivity.innerText = 'Current Activity'
  var min = parseInt(currentActivity.minutes);
  var sec = parseInt(currentActivity.seconds);
  min = min <10 ? '0' + min : min
  sec = sec <10 ? '0' + sec : sec
  activityContainer.innerHTML = `
    <h4>${activityInput.value}</h4>
    <h5>${min}:${sec}</h5>
    <a href="" id="btn" class="btn btn-start">START</a>
    `
    buttonColorChange()
}

function buttonColorChange() {
  var title = document.getElementById('btn');
  if (studyRadio.checked && !meditateRadio.checked && !exerciseRadio.checked) {
    title.style.border = '4px solid #B3FD78';
  } else if (meditateRadio.checked && !studyRadio.checked && !exerciseRadio.checked) {
      title.style.border = '4px solid #C278FD';
    }else {
      title.style.border = '4px solid #FD8078';
    }
};


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
      <h4>${activityInput.value}</h4>
      <h5>${min}:${sec}</h5>
      <a href="" id="btn" class="btn btn-start">START</a>
      `

    if (--time < 0)  {
      clearInterval(myInterval);
      completeActivity();
    }
    }
    ,1000);
    currentActivity.startTimer()
    event.preventDefault()
  }
}

function completeActivity() {
  activityContainer.innerHTML = `
  <h4>${activityInput.value}</h4>
  <h5>00:00</h5>
  <a href="" id="btn" class="btn btn-start">COMPLETE</a>
  `
}

function validateSeconds(event) {
  var ASCIICode = (event.which) ? event.which : event.keyCode

  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
    if (!secondsInput.value){
      secondsDivInput.innerHTML = `
      <img src="assets/warning.svg" <span>A number is required.</span>`
    }
      return false};
  return true;
}

function validateMinutes(event) {
  var ASCIICode = (event.which) ? event.which : event.keyCode

  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
    if (!minutesInput.value){
      minutesDivInput.innerHTML = `
      <img src="assets/warning.svg" <span>A number is required.</span>`
    }
      return false};
  return true;
}

function validate(event){
  event.preventDefault()
  if(!activityInput.value || !minutesInput.value || !secondsInput.value){
    validateDescription()
    validateMinutesInput()
    validateSecondsInput()
    validateRadioBtns()
  }else {
    // validateSeconds(event)
    // validateMinutes(event)
    submitData()
  }
}

function validateDescription(){
  if(!activityInput.value){
    activityDivInput.innerHTML = `
    <img src="assets/warning.svg" <span>A description is required.</span>
    `
  }
}
function validateSecondsInput(){
  if(!secondsInput.value){
    secondsDivInput.innerHTML = `
    <img src="assets/warning.svg" <span>A number is required.</span>
    `
  }
}
function validateMinutesInput(){
  if(!minutesInput.value){
    minutesDivInput.innerHTML = `
    <img src="assets/warning.svg" <span>A number is required.</span>
    `
  }
}
function validateRadioBtns(){
  // for (var i = 0; i < activityCategory.length; i++){
  //   if (!activityCategory[i].checked){
    if(!studyRadio.checked && !meditateRadio.checked && !exerciseRadio.checked){
      activityRadios.innerHTML = `
      <img src="assets/warning.svg" <span>A category must be selected.</span>
      `
  }
}

// condtion to disable for all the input(minutes/activty/seconds)
// don't forget to check radio inputs. have separate function for different checking of inputs
