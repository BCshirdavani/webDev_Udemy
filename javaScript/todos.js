console.log("connected");

var firstLI = document.querySelector("li");
var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        console.log("mouse over: " + this.textContent);
        // this.style.color = "red";
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        // this.style.color = "black";
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
}

