$(document).ready(function(){

  // Add smooth scrolling to nav links

  $('.header__nav a').on('click', function(e) {

    $(this).removeClass('active');

    // Prevent default behavior

    e.preventDefault();

    // Store hash
    var hash = this.hash;

    // Animate scroll
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top-50,
      },
      300,
      'swing'
    );

    // Add hash to URL
    window.location.hash = hash;

  });

  var lastID,
      menuItems = $('.header__nav').find("a"),
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  $(window).scroll(function(){

    var fromTop = $(this).scrollTop()+$('.header__nav').outerHeight()+275;
    
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });

    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastID !== id) {
        lastID = id;
        menuItems
          .parent().removeClass("active")
          .end().filter("[href='#"+id+"']").parent().addClass("active");
    }

  });


});
