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
      scrollOffset = -300;
    } else {
      scrollOffset = -300;
    }

    var fromTop = $(this).scrollTop()+$('[data-site-info]').outerHeight()-scrollOffset;
  
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

  // Remove scroll arrow function
  function removeScrollArrow() {
    if ($("[data-nav-items]").innerHeight() > $("[data-nav-list]").innerHeight()) {
      $("[data-nav-items]").removeClass('scroll-arrow');
    } else {
      $("[data-nav-items]").addClass('scroll-arrow');
    }
  }

  // On window scroll trigger remove scroll arrow function
  $(window).resize(removeScrollArrow);

  // On page load trigger remove scroll arrow function
  removeScrollArrow();

  // Scroll down arrow
  $("[data-nav-items]").scroll(function() {
    if ($(this).scrollTop() + $(this).innerHeight() > $("[data-nav-list]").innerHeight()) {
      $("[data-nav-items]").removeClass('scroll-arrow');
    } else if($(this).scrollTop() + $(this).innerHeight() <= $("[data-nav-list]").innerHeight()) {
      $("[data-nav-items]").addClass('scroll-arrow');
    }
  });

});
