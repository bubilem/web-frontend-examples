$("form>div>input").on("focus", function() {
  $(this).addClass("active");
});

$("form>div>input").on("blur", function() {
  if ($(this).val() == "") {
    $(this).removeClass("active");
  }
});
