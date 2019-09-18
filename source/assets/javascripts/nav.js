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
  });

  $(window).resize(function() {
    if ($('[data-nav-items]').is(':visible') && $('[data-nav-toggle]').is(':visible')) {
      $('[data-nav-toggle]').addClass('menu-open');
    }
  });
    
  // Store variables

  var lastID,
      menuItems = $('[data-header-nav]').find("a"),
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // On window scroll

  $(window).scroll(function(){

    var fromTop = $(this).scrollTop()+$('[data-header-nav]').outerHeight();
  
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
