$(document).ready( function() {
  $(".link1").on("click", function(e) {
    e.preventDefault();
    var distanceTop = $(".page-about").offset().top;
    $("html, body").animate({scrollTop: distanceTop}, 1000);
  });

  $(".link2").on("click", function(e) {
    e.preventDefault();
    var distanceTop = $(".page-hotels").offset().top;
    $("html, body").animate({scrollTop: distanceTop}, 1000);
  });

  $(".link3").on("click", function(e) {
    e.preventDefault();
    var distanceTop = $(".page-gallery").offset().top;
    $("html, body").animate({scrollTop: distanceTop}, 1000);
  });

  $(".link4").on("click", function(e) {
    e.preventDefault();
    var distanceTop = $(".page-reviews").offset().top;
    $("html, body").animate({scrollTop: distanceTop}, 1000);
  });

  $(".link5").on("click", function(e) {
    e.preventDefault();
    var distanceTop = $(".page-contacts").offset().top;
    $("html, body").animate({scrollTop: distanceTop}, 1000);
  });
});
