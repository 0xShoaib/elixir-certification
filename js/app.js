const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");
const navDropDown = document.getElementById("nav-dropdown");

navBtn.addEventListener("click", () => {
  // navBtn.classList.toggle("active-nav-btn");
  nav.classList.toggle("active");
});

if (window.innerWidth <= 840) {
  navDropDown.addEventListener("click", () => {
    navDropDown.classList.toggle("nav-dropdown-active");
  });
}
