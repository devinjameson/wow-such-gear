$(document).ready(function(){

  // Add smooth scrolling to nav links

  $('.header__nav a').on('click', function(e) {

    // Prevent default behavior

    e.preventDefault();

    // Store hash
    var hash = this.hash;

    // Animate scroll
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );

    // Add hash to URL
    window.location.hash = hash;

  });

  




  
});
