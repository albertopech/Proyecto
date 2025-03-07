"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");

let todos = [
    new todoItem_1.TodoItem(1, "buyy"),
    new todoItem_1.TodoItem(2, "Get soo"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call lol", true)
];

let collection = new todoCollection_1.TodoCollection("Adam", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);
collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());

// Simple functionalities
todoItem_1.TodoItem.prototype.toggleComplete = function () {
    this.complete = !this.complete;
    console.log(`Task '${this.task}' marked as ${this.complete ? "completed" : "incomplete"}`);
};

function addTask(task) {
    let id = collection.getTodoItems(false).length + collection.getTodoItems(true).length + 1;
    collection.addTodo(new todoItem_1.TodoItem(id, task));
    console.log(`Added task: ${task}`);
}

// Example usage:
addTask("Finish project");
todos[1].toggleComplete();