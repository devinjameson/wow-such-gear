$(document).ready(function(){

  // Store variables

  var lastID,
      menuItems = $('[data-header-nav]').find("a"),
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // On window scroll

  $(window).scroll(function(){

    var fromTop = $(this).scrollTop()+$('[data-header-nav]').outerHeight()+350;
    
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
