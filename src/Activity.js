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
    // console.log('timer started')

    // add starTimer function here and call in main.JS

  }
  markComplete(){
    this.completed = true;

  }
  saveToStorage(){
    console.log('this', this)
    var stringKey = JSON.stringify(this.id)
    var stringObject = JSON.stringify(this);
    localStorage.setItem(stringKey, stringObject)

  }
}

// var parsedObject = JSON.parse(currentActivity)

// separate display storage function set to parse object
// and display it onload?

/* Function {
  past activities innerHTNML  = ''
  onLoad();
  displayPastActivities()
}*/
