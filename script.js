let menuIcon = document.querySelector(".menu_icon");
let sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
};
