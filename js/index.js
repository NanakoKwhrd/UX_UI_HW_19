console.log("My js file is working!");


  $( "#downloadResume" ).click(function() {
    $( "#popup" ).show( "slow", function() {
      
    });
  });


  $( "#close" ).click(function() {
    $( "#popup" ).hide( "slow", function() {
      
    });
  });



function fade() {
  $('.preloader').fadeOut("slow");
  };
  setTimeout(fade, 3000);





$(function() {
  $('#click').hover(function(){
      $(this).addClass("click");
  },
  function(){
      $(this).removeClass('click');
  });
});  


$(function() {
  $('#click2').hover(function(){
      $(this).addClass("click");
  },
  function(){
      $(this).removeClass('click');
  });
});  


$(function() {
  $('#click3').hover(function(){
      $(this).addClass("click");
  },
  function(){
      $(this).removeClass('click');
  });
});  


$(function() {
  $('#click4').hover(function(){
      $(this).addClass("click");
  },
  function(){
      $(this).removeClass('click');
  });
});  


$(function() {
  $('#click5').hover(function(){
      $(this).addClass("click");
  },
  function(){
      $(this).removeClass('click');
  });
});  



