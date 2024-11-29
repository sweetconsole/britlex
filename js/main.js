var menu = document.getElementById("menu");
var body = document.getElementById("body");
var blackout = document.getElementById("blackout");

function openMenu() {
  menu.classList.toggle("menu-active");
  body.classList.toggle("menu-body");
  blackout.classList.toggle("blackout-active")
}

function closeMenu() {
  menu.classList.toggle("menu-active");
  body.classList.toggle("menu-body");
  blackout.classList.toggle("blackout-active")
}