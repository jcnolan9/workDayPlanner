var container = $(".container")
var workTimes = container.children().children().children(".time")
var rows = container.children()
var colorArea = container.children().children().children(".textarea")
var hour = moment()
var activities = []
var textAreasArray = container.children().children().children("textarea")
// console.log(textAreasArray)

// console.log("Moment == moment: " + moment().isSame(moment()))

for(var i = 9; i < workTimes.length + 9; i++) {
    hour.hour(i).minute(0).second(0)
    console.log("Start of hour: " + hour.hour(i).minute(0).second(0).format('MMMM Do YYYY, h:mm:ss a'))
    console.log("End of hour: " + hour.hour(i).minute(59).second(59).format('MMMM Do YYYY, h:mm:ss a'))
    console.log("Current time: " + moment().format('MMMM Do YYYY, h:mm:ss a'))
    console.log("Is current time after end of hour: " + moment().isAfter(hour.minute(59).second(59)))
    workTimes[i-9].textContent = hour.format("hA") 
    
    if(moment().isAfter(hour.minute(59).second(59))) {
        // console.log(hour.minute(59).second(59))
        // console.log("Hour (past): " + hour.format('MMMM Do YYYY, h:mm:ss a'))
        // console.log("Current moment (past): " + moment().format('MMMM Do YYYY, h:mm:ss a'))
        console.log(colorArea[i-9])
        $(colorArea[i-9]).addClass("past")
        console.log("PAST +++++++++++++++++++++++++++++++++++++")
    }
    else if(moment().isSame(hour, "hour")) {
        // console.log("Hour (present): " + hour.format('MMMM Do YYYY, h:mm:ss a'))
        // console.log("Current moment (present): " + moment().format('MMMM Do YYYY, h:mm:ss a'))
        // colorArea[i].addClass("present")
        $(colorArea[i-9]).addClass("present")
        console.log("Present -------------------------------------")
    }
    else {
        // console.log("Hour (future): " + hour.format('MMMM Do YYYY, h:mm:ss a'))
        // console.log("Current moment (future): " + moment().format('MMMM Do YYYY, h:mm:ss a'))
        // colorArea[i].addClass("future")
        $(colorArea[i-9]).addClass("future")
        console.log("Future ========================================")
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


