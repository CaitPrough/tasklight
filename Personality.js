import Task from "./Task"

function isAngry() {
    return (Task.areTasksOverdue() ? true : false)
}