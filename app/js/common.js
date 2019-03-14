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

  $("#shopping-cart").click(function(e) {
    e.stopPropagation();
    $("#information").show();
  });

  $(document).click(function() {
    $("#information").hide();
  });

  $("#information").click(function() {
    $(this)
      .delay(1000)
      .hide(10);
  });

  $(".add-cart").click(function(e) {
    e.stopPropagation();
    $("#information").show();
  });

  $(document).click(function() {
    $("#information").hide();
  });

  $("#information").click(function() {
    $(this)
      .delay(1000)
      .hide(10);
  });

  $("#country").niceSelect();

  $("#delivers-mode").niceSelect();

  $(".consent-block").click(function() {
    $(".consent-block").toggleClass("box-agree");
  });

  $("#favorites").click(function(e) {
    e.stopPropagation();
    $("#favorites-container").show();
  });

  $(document).click(function() {
    $("#favorites-container").hide();
  });

  $("#favorites-container").click(function() {
    $(this)
      .delay(1000)
      .hide(10);
  });

  $("#favorite-heart").click(function(e) {
    e.stopPropagation();
    $("#favorites-container").show();
  });

  $(document).click(function() {
    $("#favorites-container").hide();
  });

  $("#favorites-container").click(function() {
    $(this)
      .delay(1000)
      .hide(10);
  });

  $("#favorite-heart").click(function() {
    $(".heart-mini").addClass("visible");
  });

  $(".tab_item")
    .not(":first")
    .hide();
  $(".tabs-wrapper .tab-container")
    .click(function() {
      $(".tabs-wrapper .tab-container")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      $(".tab_item")
        .hide()
        .eq($(this).index())
        .fadeIn();
    })
    .eq(0)
    .addClass("active");

  $(".tab-container .tab-image").click(function() {
    $(".tab-container .tab-image").removeClass("active");
    $(this).addClass("active");
  });

  $(".color-wrapper").click(function() {
    $(".color-wrapper").removeClass("active");
    $(this).addClass("active");
  });

  $(".detail-image").click(function() {
    $(".detail-image").removeClass("active");
    $(this).addClass("active");
  });
});
