$(document).ready(function(){ //code provided by www.w3schools.com and modified appropriately
  $("a").on('click', function(event) { //all a's (links) are giving this click function

    if (this.hash !== "") { //makes sure there is a destination (a reference)
      event.preventDefault(); //prevents default behavior of anchor tag

      var hash = this.hash;

      $('html, body').animate({ //animate is a function from the jQuery library 
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

$('.navbar').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > window.innerHeight / 2) {
        $('.navbar').fadeIn();
    } else {
        $('.navbar').fadeOut();
    }
});