import React from "react"
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider} from "react-native-rapi-ui";

let taskText = ["I am an example task. Add more below."]
let taskDeadline = ["02/19/23"]

export function addTask(string, deadline) {
    if (deadline.length == 8) {
        taskText.push(string)
        taskDeadline.push(deadline)
    }
    // return error if false
}

export function getTask(index) {
    return [taskText[index], taskDeadline[index]]
}

export function parseDate (date) {
    let month = date.substring(0, 1)
    let day = date.substring(3, 4)
    let year = date.substring(6, 7)
    return [month, day, year]
}