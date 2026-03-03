// Task Manager Functionality

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(name) {
        const task = new Task(name);
        this.tasks.push(task);
    }

    completeTask(index) {
        if (index < this.tasks.length) {
            this.tasks[index].complete();
        } else {
            console.log('Task not found!');
        }
    }

    getTasks() {
        return this.tasks;
    }
}

// Example usage:
const manager = new TaskManager();
manager.addTask('Learn JavaScript');
manager.addTask('Build a task manager');

console.log(manager.getTasks());

manager.completeTask(0);
console.log(manager.getTasks());