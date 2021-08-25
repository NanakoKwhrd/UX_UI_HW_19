// $(".tileName").on("click", function(){
//      ($(this).hasClass("titleName")) {
//       $(".titleName").attr("href", "CSS/js.css")
//     }
   
// });

$(".titleName").on("click", function() { 
    $(".titleName").css("color", "yellow");

  });


  //append function

  $('#button3').on("click", function(){
    $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ")
  });

