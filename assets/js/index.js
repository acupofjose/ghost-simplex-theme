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
  // Generate a hidden full screen container view
  $(".kg-gallery-container").prepend(
    "<div id='kg-gallery-zoom' style='display:none;'><img src=''/><div id='kg-gallery-buttons'></div></div>"
  );

  // Navigation buttons
  $(".kg-gallery-container .kg-gallery-image img").each(function(e) {
    var src = $(this).attr("src");
    var index = e + 1;
    $("#kg-gallery-buttons").append(
      `<span class="kg-gallery-btn" data-src="${src}" data-index="${index}"></span>`
    );
  });

  // On fullscreen navigation button clicked
  $(".kg-gallery-btn").click(function(e) {
    e.preventDefault();
    $("#kg-gallery-zoom img").attr("src", $(this).data("src"));
    $(".kg-gallery-btn").removeClass("active");
    $(this).addClass("active");
  });

  // Handle showing full screen gallery
  $(".kg-gallery-image img").click(function(image) {
    // Set active button on navigation
    var index = $(this)
      .parent()
      .index();
    $(".kg-gallery-btn").removeClass("active");
    $(".kg-gallery-btn")
      .eq(index)
      .addClass("active");

    $("#kg-gallery-zoom img").attr("src", $(this).attr("src"));
    $("#kg-gallery-zoom").fadeIn();
  });

  $("#kg-gallery-zoom img").click(function(image) {
    $("#kg-gallery-zoom img").attr("src", "");
    $("#kg-gallery-zoom").fadeOut();
  });
});
