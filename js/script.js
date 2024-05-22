const hamburger = document.querySelector("#ham");
const nav = document.querySelector("nav");

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle("active");
}
