import React from "react"
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider} from "react-native-rapi-ui";

let taskText = ["I am an example task. Add more below."]
let taskDeadline = ["02/19/23"]

let whatDayIsIt = new Date()
let today = [whatDayIsIt.getMonth() + 1, whatDayIsIt.getDate(), parseInt(whatDayIsIt.getFullYear().toString().substring(2, 4))]

function addTask(string, deadline) {
    if (deadline.length == 8) {
        taskText.push(string)
        taskDeadline.push(deadline)
    }
    // return error if false
}

function getTask(index) {
    return [taskText[index], taskDeadline[index]]
}

function parseDate (date) {
    let month = parseInt(date.substring(0, 2))
    let day = parseInt(date.substring(3, 5))
    let year = parseInt(date.substring(6, 8))
    return [month, day, year]
}