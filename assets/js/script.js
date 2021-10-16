var container = $(".container")
var workTimes = container.children().children().children(".time")
var rows = container.children()
var colorArea = container.children().children().children(".textarea")
var hour = moment()
var activities = []
var textAreasArray = container.children().children().children("textarea")

//Loop through all the elements where supposed to display the time and set the time starting at 9AM
//Once the time is set on the appropriate elements check if that hour is a past, present, or future hour
//Set the coloring of the text area accordingly 
for(var i = 9; i < workTimes.length + 9; i++) {
    hour.hour(i).minute(0).second(0)
    workTimes[i-9].textContent = hour.format("hA") 
    
    if(moment().isAfter(hour.minute(59).second(59))) {
        $(colorArea[i-9]).addClass("past")
    }
    else if(moment().isSame(hour, "hour")) {
        $(colorArea[i-9]).addClass("present")
    }
    else {
        $(colorArea[i-9]).addClass("future")
    }
}

//Read the values from local storage and if local storage is not null populate the activities array with the values from local storage and show on screen
var activitiesLocal = localStorage.getItem("activities")
    if(activitiesLocal == null) {
        activities = []
    }
    else {
        activities = JSON.parse(activitiesLocal)
        for(var i = 0; i < activities.length; i++) {
            textAreasArray[i].textContent = activities[i]
        }
    }

//add event listener for each save button
$('.saveBtn').on("click", function (event) {
    event.preventDefault()

    //grab the textarea element in the same row as the save button that was clicked
    var textareaEl = $(event.target).parent().parent().children().children()[1]

    //Find the index of the appropriate row that has had content added to it by the user
    //grab the value of the textarea and put it in the activities array in the same index
    //set the activities array to local storage
    for(var i = 0; i < rows.length; i++) {
        if($(event.target).parent().parent()[0] == rows[i]) {
            activities[i] = textareaEl.value
            localStorage.setItem("activities", JSON.stringify(activities))
        }
        
    }
    
})


