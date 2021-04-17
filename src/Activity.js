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
    
  }
  markComplete(){
    this.completed = true;

  }
  saveToStorage(){
    console.log('this', this)
    var objectToStore = this
    var stringObject = JSON.stringify(objectToStore);
    localStorage.setItem('stringObject', stringObject)

  }
}
