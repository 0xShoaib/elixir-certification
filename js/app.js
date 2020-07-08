const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");

console.log(navBtn);
console.log(nav);

navBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
