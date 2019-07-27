$(document).ready(function(){
    $("h1").click(function(){
        $("p").toggle();
    }),
    $("#btn1").click(function(){
        $("#box1").slideToggle("slow");
    }),

  //  $("#input1").mouseenter(function(){
    // alert("Mouse Entered");
    //})
    
   // $("#input1").mouseleave(function(){
     //   alert("Mouse Leave");
      // })
    $("#btn2").click(function(){
        $("#box2").fadeToggle("slow")
    })
    
    $("a").hover(function(){
        $(this).addClass("bg-blue");
    })

    $(".input1").focus(function(){
        $(this).addClass("bg-blue")
    }),
    
    $(".input1").blur(function(){
        $(this).removeClass("bg-blue")
    })
})