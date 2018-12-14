var userName = prompt("what is your name?:");
alert("nice to meet you " + userName);
console.log("Name is " + userName);

// while loop
var count = 1;
while (count <= 6){
    console.log("count is : " + count);
    count++;
}
//  for loop
for(var counter = 0; counter < 6; counter++){
    console.log("counter is: " + counter);
}

// functions
function sayHiTo(name){
    console.log("hello " + name);
    console.log("goodbye " + name);
}
sayHiTo(userName);

