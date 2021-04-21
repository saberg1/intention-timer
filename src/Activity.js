class Activity{
  constructor(category, description, minutes, seconds){
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
  }
  startTimer(){
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
      changeButtonColor();

      if (--time < 0)  {
       clearInterval(myInterval);
       completeActivity();
        }
    }
    ,1000); 
   }

  markComplete(){
    this.completed = true;

  }

  saveToStorage(){
    var stringKey = JSON.stringify(this.id)
    var stringObject = JSON.stringify(this);
    localStorage.setItem(stringKey, stringObject)

  }
};