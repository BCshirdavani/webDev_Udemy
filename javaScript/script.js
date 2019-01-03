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

// function with return
function square(x){
    // console.log(x * x);
    return x * x;
}
console.log("the squre of 4 is: " + square(4));

//  scope
//      section 12, lecture 150

//  higher order functions
//      section 12, lecture 152
// function sing(){
//     console.log("twinkle twinkle...");
//     console.log("how i wonder...");
// }
// setInterval(sing, 2000);
// clearInterval(1);

//  anonymous function


// arrays
var friends = [];
var friends = new Array();
var friends = ["Charlie", "Liz", "David", "Mattias"];

console.log(friends);
console.log("friend[0] is: " + friends[0]);
//  add new friend
friends[4] = "new friend";
console.log(friends);
console.log("length of array is: " + friends.length);
// array methods, push, pop, indexOf, slice
friends.push("pushed friend");
console.log("friends is now: " + friends);
var poppedFriend = friends.pop();
console.log("friends is now: " + friends);
console.log("popped person = " + poppedFriend);
// shift and unshift to push and pops for the front, rather than the back
var nums = [34, 54, 22];
console.log(nums);
nums.unshift("fart");
console.log(nums);
console.log("indexOf fart: " + friends.indexOf("fart"));
nums.shift("fart");
console.log(nums);
//  slice
var fruits = ['banana', 'orange', 'lemon', 'apple', 'mango'];
var citrus = fruits.slice(1,3);
console.log(citrus);


window.setTimeout(function() {
    // put all of your JS code from the lecture here
  }, 500);