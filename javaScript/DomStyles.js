// DOM manipulation with javascript
// style properties

var tag = document.getElementById("highlight");

tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "20px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

var tags = document.getElementsByClassName("bolded");
for(var x = 0; x < tags.length; x++){
    tags[x].style.background = "purple";
    tags[x].style.color = "white";
}

console.log("tags.length = " + tags.length);

// adding css class to an object
var p = document.querySelector("p");
p.classList.toggle("big");
// p.classList.add("big");

var par = document.getElementById("par2");
console.log("text content:\t" + par.textContent);
console.log("inner HTML:\t" + par.innerHTML);

// event listener
var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    alert("h1 was clicked");
    h1.style.background = "orange";
})

document.querySelector("ul").addEventListener("click",function(){
    console.log("ul was clicked");
})

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        console.log(this.textContent);
        this.style.background = "red";
    });
}

var but = document.querySelector("button");
var body = document.querySelector("body");
but.addEventListener("click", function(){
    if (body.style.background == "pink"){
        body.style.background = "white";
    }
    else{
        body.style.background = "pink";
    }
})
