$(function() {
  hljs.initHighlightingOnLoad();

  // Masonry
  var $grid = $(".grid");
  $grid.isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      columnWidth: ".grid-item",
      isFitWidth: true
    }
  });

  // Seems isotope has some trouble getting initial load right?
  setTimeout(() => $grid.isotope(), 50);
  $(window).smartresize(() => $grid.isotope());

  // Mobile Menu
  $("nav#mobile-header")
    .find(".menu-toggle")
    .click(e => {
      $("body").toggleClass("mobile-menu-open");
    });

  // Gallery
  $(".kg-gallery-container").prepend(
    "<div id='kg-gallery-zoom' style='display:none;'><img src=''/><div id='kg-gallery-buttons'></div></div>"
  );

  $(".kg-gallery-container .kg-gallery-image img").each(function(e) {
    var thissrc = $(this).attr("src");
    var label = e + 1;
    $("#kg-gallery-buttons").append(
      '<span class="kg-gallery-btn" data-src="' +
        thissrc +
        '">' +
        label +
        "</span>"
    );
  });

  $(".kg-gallery-btn").click(function(e) {
    e.preventDefault();
    $("#kg-gallery-zoom img").attr("src", $(this).data("src"));
  });
  $(".kg-gallery-image img").click(function(image) {
    $("#kg-gallery-zoom img").attr("src", $(this).attr("src"));
    $("#kg-gallery-zoom").fadeIn();
    $(".floating-header").fadeOut();
  });
  $("#kg-gallery-zoom img").click(function(image) {
    $("#kg-gallery-zoom img").attr("src", "");
    $("#kg-gallery-zoom").fadeOut();
    $(".floating-header").fadeIn();
  });
});
