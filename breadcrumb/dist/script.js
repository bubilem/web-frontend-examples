$(document).ready(function () {
  breadcrumbResize();
});
$(window).on("resize", function () {
  breadcrumbResize();
});
function breadcrumbResize() {
  $("nav.breadcrumb").each(function () {
    var crumbOut = $(this);
    var crumbIn = $("ul", this);
    var i = 1;
    crumbIn.children().css("display", "inline-block");
    while (crumbOut.width() < crumbIn.width() && i < crumbIn.children().length) {
      $("ul>li:nth-child(" + i++ + ")", this).css("display", "none");
    }
  });
}
