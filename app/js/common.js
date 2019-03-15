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

  $(document).mouseup(function(e) {
    var container = $("#information");
    if (container.has(e.target).length === 0) {
      container.hide();
    }
  });

  $(".add-cart").click(function(e) {
    e.stopPropagation();
    $("#information").show();
  });

  $(document).mouseup(function(e) {
    var container = $("#information");
    if (container.has(e.target).length === 0) {
      container.hide();
    }
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

  $(document).mouseup(function(e) {
    var container = $("#favorites-container");
    if (container.has(e.target).length === 0) {
      container.hide();
    }
  });

  $("#favorite-heart").click(function(e) {
    e.stopPropagation();
    $("#favorites-container").show();
  });

  $(document).mouseup(function(e) {
    var container = $("#favorites-container");
    if (container.has(e.target).length === 0) {
      container.hide();
    }
  });

  $("#favorite-heart").click(function() {
    $(".heart-mini").addClass("visible");
  });

  $(".tabs-wrapper").slick({
    dots: false,
    arrows: true,
    nextArrow: "<div class=arrow-next></div>",
    prevArrow: "<div class=arrow-prev></div>"
  });

  $(".tab_item")
    .not(":first")
    .hide();
  $(".tab-container")
    .click(function() {
      $(".tab-container")
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

  $(".tab-container").click(function() {
    $(this)
      .find(".tab-image")
      .addClass("active");
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
