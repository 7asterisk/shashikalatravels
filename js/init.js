(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Or with jQuery

$(document).ready(function(){
  $('.collapsible').collapsible();
});

// carousel

$(document).ready(function(){
  $('.carousel').carousel();
});


  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("return-to-top").style.display = "block";
      } else {
          document.getElementById("return-to-top").style.display = "none";
      }
  }

  $('#return-to-top').each(function () {
      $(this).click(function () {
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

// dropdown
  $('.dropdown-trigger').dropdown();