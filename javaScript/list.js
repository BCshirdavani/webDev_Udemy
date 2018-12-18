// list.js

console.log("Connected");

var todos = ["Buy turtle"];
var input = prompt("What would you like to do:");

window.setTimeout(function() {
    
    while (input !== "quit"){
        if (input === "list"){
            listTodos();
        }
        else if (input === "new"){
            addTodo();
        }
        else if (input === "delete"){
            deleteTodo();
        }
        input = prompt("What would you like to do:");
    }
    console.log("goodbye");

}, 500);


function listTodos(){
    console.log("******");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("******");
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){
    var index = prompt("enter index to delete");
    todos.splice(index, 1); // deletes 1 item following index
    console.log("Deleted Todo");
}