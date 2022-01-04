console.log("Hello");
document.getElementById("menu-button").onclick = (e) => {
  e.currentTarget.classList.toggle("active");
  e.currentTarget.classList.remove("tip");
  document.getElementById("menu").style.animationName =
    e.currentTarget.classList.contains("active") ? "menuin" : "menuout";
};

const menuItems = document.getElementsByClassName("menu-item");
for (let item of menuItems) {
  item.onclick = (e) => {
    document.getElementById(e.currentTarget.dataset.ref).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    document.getElementById("menu-button").classList.remove("active");
    document.getElementById("menu").style.animationName = "menuout";
  };
}
