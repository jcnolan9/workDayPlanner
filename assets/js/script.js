var container = $(".container")
var workTimes = container.children().children().children(".time")
var rows = container.children()
var colorArea = container.children().children(".textarea")
var hour = moment()
var activities = []
var textAreasArray = container.children().children().children("textarea")
// console.log(textAreasArray)

for(var i = 9; i < workTimes.length + 9; i++) {
    hour.hour(i).format("hA")
    workTimes[i-9].textContent = hour.format("hA")
    if(hour < moment()) {
        colorArea.addClass("past")
    }
    else if(hour == moment()) {
        colorArea.addClass("present")
    }
    else {
        colorArea.addClass("future")
    }
}

var activitiesLocal = localStorage.getItem("activities")
    if(activitiesLocal == null) {
        activities = []
    }
    else {
        activities = JSON.parse(activitiesLocal)
        for(var i = 0; i < activities.length; i++) {
            textAreasArray[i].textContent = activities[i]
            // console.log(textAreasArray[i])
        }
    }


$('.saveBtn').on("click", function (event) {
    event.preventDefault()

    var textareaEl = $(event.target).parent().parent().children().children()[1]
    console.log(textareaEl)

    for(var i = 0; i < rows.length; i++) {
        console.log("hello")
        if($(event.target).parent().parent()[0] == rows[i]) {
            console.log($(event.target).parent().parent()[0])
            console.log(rows[i])
            console.log(textareaEl)
            console.log(textareaEl.value)
            activities[i] = textareaEl.value
            localStorage.setItem("activities", JSON.stringify(activities))
        }
        
    }
    // console.log($(event.target).parent().parent())
    
    // else {
    //     var textareaEl = $(event.target).parent().parent().children().children()[1]
    //     activities.push(textareaEl.val())
    //     localStorage.setItem("activities", text)
    // }
    // console.log($(event.target).parent().parent()[0])
    
    // console.log($(event.target).parent().parent().children().children()[1])
    
   
    // for(var i = 0; i < rows.length; i++) {
    //     console.log("hello")
    //     if($(event.target).parent().parent()[i] == rows[i]) {
    //         console.log($(event.target).parent().parent()[i])
    //         console.log(rows[i])
    //     }
        
    // }
    
    // console.log($(event.target).parent().parent()
    // console.log(rows)
    // console.log("I got pressed")

    // localStorage.getItem("activity", )
    // $("textarea").val()
})


