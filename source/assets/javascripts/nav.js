$(document).ready(function(){

  // Menu toggle
  $('[data-nav-toggle]').click(function() {
    $(this).toggleClass('menu-open');
    $('[data-nav-items]').slideToggle();
  });

  $(window).resize(function() {
    if ($('[data-nav-toggle]').is(':hidden')) {
      $('[data-nav-items]').show();
    }

    if ($('[data-nav-items]').is(':visible') && $('[data-nav-toggle]').is(':visible')) {
      $('[data-nav-toggle]').addClass('menu-open');
    }
  });
    
  // Store variables
  var lastID,
      menuItems = $('[data-header-nav]').find("a"),
      scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Track scroll function

  function trackScroll() {

    let scrollOffset;

    if ($('[data-nav-toggle]').is(':hidden')) {
      scrollOffset = 200;
    } else {
      scrollOffset = -250;
    }

    var fromTop = $(this).scrollTop()+$('[data-header-nav]').outerHeight()-scrollOffset;
  
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
  }

  // On window scroll trigger track scroll function
  $(window).scroll(trackScroll);

  // On page load trigger track scroll function
  trackScroll();

});
