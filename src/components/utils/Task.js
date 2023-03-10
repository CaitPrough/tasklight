// the two arrays that contain all tasks
// currently starts with two placeholder tasks for testing (one due today, one overdue)
let taskText = ["Finish coding Tasklight", "Do that overdue homework"]
let taskDeadline = ["02/19/23", "02/15/23"]

// gets today's date
let whatDayIsIt = new Date()
let todayDate = [whatDayIsIt.getMonth() + 1, whatDayIsIt.getDate(), parseInt(whatDayIsIt.getFullYear().toString().substring(2, 4))]

// adds a task name and deadline to the task lists
function addTask(string, deadline) {
    if (deadline.length == 8) {
        taskText.push(string)
        taskDeadline.push(deadline)
    }
    // need to throw an error incase date isn't entered correctly
}

// gets a task as its own array with two elements
function getTask(index) {
    return [taskText[index], parseDate(taskDeadline[index])]
}

// converts a date in the form of a string to a three element array
function parseDate (date) {
    let month = parseInt(date.substring(0, 2))
    let day = parseInt(date.substring(3, 5))
    let year = parseInt(date.substring(6, 8))
    return [month, day, year]
}

// checks if today's date has exceeded a task's deadline
function isTaskOverdue(task, today = todayDate) {
    let deadline = task[1]
    if (deadline[0] < today[0] || deadline[1] < today[1] || deadline[2] < today[2]) {
        return true
    } else {
        return false
    }
}

// loops through all tasks that exist, returns true if any of them are overdue
export function areTasksOverdue() {
    for (let i = 0; taskText.length - 1; i++) {
        if (isTaskOverdue(getTask(i))) {
            return true
        } else {
            continue
        }
    } return false
}

// test comment
