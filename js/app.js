const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");
const navDropDown = document.getElementById("nav-dropdown");

const scrollBtn = document.querySelector(".scroll-to-top");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active-nav-btn");
  nav.classList.toggle("active");
});

if (window.innerWidth <= 840) {
  navDropDown.addEventListener("click", () => {
    navDropDown.classList.toggle("nav-dropdown-active");
  });
}

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("active-scroll", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
