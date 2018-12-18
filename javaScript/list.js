// list.js

console.log("Connected");

var todos = ["Buy turtle"];
var input = prompt("What would you like to do:");

window.setTimeout(function() {
    
    while (input !== "quit"){
        if (input === "list"){
            console.log(todos);
        }
        else if (input === "new"){
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
        }
        input = prompt("What would you like to do:");
    }
    console.log("goodby");

}, 500);