$(".box").hover(function(){
        $(this).toggleClass("transform");
        
})

$(document).ready(function(){
    $("#box1-style").delay(1000).fadeIn();
    $("#box2-style").delay(2000).slideDown();
    $("#box3-style").delay(3000).slideDown();
    $("#box4-style").delay(4000).slideDown();
})

