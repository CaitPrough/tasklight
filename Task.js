import React from "react"
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider} from "react-native-rapi-ui";

let taskText = ["I am an example task. Add more below."]
let taskDeadline = ["2/19/23"]

export function addTask(string, deadline) {
    taskText.push(string)
    taskDeadline.push(deadline)
}

export function getTask(index) {
    return [taskText[index], taskDeadline[index]]
}