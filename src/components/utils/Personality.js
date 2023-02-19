import Task from "./Task"

let insultsList = [
    "You're so lazy, you make a sloth look like Usain Bolt! Get back to work!",
    "The only thing more sluggish than you is a snail on sleeping pills.",
    "How have you repeatedly neglected to complete this task?! It might be easier if you even STARTED it",
    "I'd call you a couch potato, but that would be an insult to couches and potatoes",
    "At this rate, this project is like a car with no gas: going nowhere fast",
    "I wouldn't be surprised if you found a way to procrastinate napping",
    "You are the epitome of lethargy.",
    "I am disappointed in you.",
    "Even ChatGPT is more stubborn than you",
    "The only exercise you get is running away from your responsibilities",
    'I would say "at least you tried," but I don\'t think you did',
    "The English language cannot accurately express the magnitude of your laziness"
]

let congratsList = [
    "What took you so long?",
    "Congratulations, but you aren't out of the woods yet.",
    "No time to waste, you still have a lot of tasks to finish.",
]

function isAngry() {
    return (Task.areTasksOverdue() ? true : false)
}

function randomMessage(array) {
    let rand = Math.floor((Math.random() * array.length));
    return array[rand]
}

export function returnMessage() {
    return (isAngry() ? randomMessage(insultsList) : randomMessage(congratsList))
}

// input "due" for tasks due soon, input anything else for missing a task
export function returnTitle(type) {
    if (type == "due") {
        return (isAngry() ? "You are going to miss another task!" : "You have a task due soon!")
    } else {
        return (isAngry() ? "You missed another task!" : "YOU MISSED A TASK? NOW I'M MAD >:(")
    }
    
}