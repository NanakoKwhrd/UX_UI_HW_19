
$(".titleName").on("click", function() { 
    $(".titleName").css("color", "yellow");

  });

// $("#downloadResume").on("click", function(){

// })


$('#downloadResume').on("click", function(){
    $('.hideMe').slideToggle();
  });

  //append function

  $('#button3').on("click", function(){
    $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ")
  });

  $("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
  });
  