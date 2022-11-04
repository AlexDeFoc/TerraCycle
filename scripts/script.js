const hamburger = document.querySelector(".hamburger");
const nav_bar = document.querySelector("#nav_bar ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_bar.classList.toggle("active");
})

document.querySelectorAll(".nav_links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_bar.classList.remove("active");
}))