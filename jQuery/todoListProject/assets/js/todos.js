console.log("connected");

// check off specific to-dos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete To-Do
$("ul").on("click", "span", function(event){
    console.log("clicked on a span");
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    // if enter key pressed
    if(event.which === 13){
        console.log("you hit enter");
        console.log($(this).val());
        var todoText = $(this).val();
        $(this).val("");
        // add new li of input text to the ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});

