$("nav.desktop a").hover(function () {
  $("nav li").removeClass("selected");
  $(this).parent().addClass("selected");
});

$("nav.mobile h3").click(function () {
  $("ul.nav-desktop").slideToggle();
});

$("ul.nav-desktop a").hover(function () {
  $("ul.nav-desktop li").removeClass("hover");
  $(this).parent().addClass("hover");
});
