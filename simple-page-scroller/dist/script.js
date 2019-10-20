var itemWidth = document.querySelector(".gallery>.scroller>div").clientWidth;

document
  .querySelector(".gallery>.btn.next")
  .addEventListener("click", function() {
    document.querySelector(".gallery>.scroller").scrollBy(itemWidth, 0);
  });
document
  .querySelector(".gallery>.btn.prev")
  .addEventListener("click", function() {
    document.querySelector(".gallery>.scroller").scrollBy(-itemWidth, 0);
  });

var sectionCount = 3;
var sectionOffset = [];
for (i = 0; i < sectionCount; i++) {
  sectionOffset[i] = document.querySelector("#section-" + i).offsetTop;
}
document.querySelector("main").addEventListener("scroll", function() {
  var scrollTop = document.querySelector("main").scrollTop;
  for (i = sectionCount - 1; i >= 0; i--) {
    if (scrollTop >= sectionOffset[i] - 20) {
      document.querySelectorAll("nav>a").forEach(function(item) {
        item.className = "";
      });
      document.querySelector("#link-" + i).className = "active";
      break;
    }
  }
});
