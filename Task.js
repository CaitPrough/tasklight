import React from "react"
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider} from "react-native-rapi-ui";

let taskText = ["Finish coding Tasklight", "Do that overdue homework"]
let taskDeadline = ["02/19/23", "02/15/23"]

let whatDayIsIt = new Date()
let todayDate = [whatDayIsIt.getMonth() + 1, whatDayIsIt.getDate(), parseInt(whatDayIsIt.getFullYear().toString().substring(2, 4))]

function addTask(string, deadline) {
    if (deadline.length == 8) {
        taskText.push(string)
        taskDeadline.push(deadline)
    }
    // return error if false
}

function getTask(index) {
    return [taskText[index], parseDate(taskDeadline[index])]
}

function parseDate (date) {
    let month = parseInt(date.substring(0, 2))
    let day = parseInt(date.substring(3, 5))
    let year = parseInt(date.substring(6, 8))
    return [month, day, year]
}

function isTaskOverdue(task, today = todayDate) {
    let deadline = task[1]
    if (deadline[0] < today[0] || deadline[1] < today[1] || deadline[2] < today[2]) {
        return true
    } else {
        return false
    }
}

export function areTasksOverdue() {
    for (let i = 0; taskText.length - 1; i++) {
        if (isTaskOverdue(getTask(i))) {
            return true
        } else {
            continue
        }
    }

    return false
}
