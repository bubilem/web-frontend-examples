function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  day = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];
  document.getElementById("date").innerText =
    day[date.getDay()] +
    " " +
    date.getDate() +
    ". " +
    (date.getMonth() + 1) +
    ". " +
    date.getFullYear();
  document.getElementById("h").innerText = h < 10 ? "0" + h : h;
  document.getElementById("m").innerText = m < 10 ? "0" + m : m;
  document.getElementById("s").innerText = s < 10 ? "0" + s : s;
  setTimeout(showTime, 1000);
}
showTime();
