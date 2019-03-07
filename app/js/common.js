$(function() {
  $("#search").click(function() {
    $("#search-on-container").addClass("visible");
  });

  $("#search-close").click(function() {
    $("#search-on-container").removeClass("visible");
  });

  $(document).click(function() {
    $("#search-line").focus();
  });

  $("#shopping-cart").click(function(event) {
    $("#information").addClass("visible");
  });

  $("#information-close").click(function(event) {
    $("#information").removeClass("visible");
  });

  $("#country").niceSelect();

  $("#delivers-mode").niceSelect();

  $(".consent-block").click(function() {
    $(".consent-block").toggleClass("box-agree");
  });

  $("#favorites").click(function(event) {
    $("#favorites-container").addClass("visible");
  });

  $("#favorites-close").click(function(event) {
    $("#favorites-container").removeClass("visible");
  });
});
