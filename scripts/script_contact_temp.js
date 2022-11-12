const hamburger = document.querySelector(".hamburger");
const nav_bar_container = document.querySelector(".nav_bar_container");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_bar_container.classList.toggle("active");
    header.classList.toggle("active");
    main.classList.toggle("active");
    footer.classList.toggle("active");
})

document.querySelectorAll(".nav_links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_bar_container.classList.remove("active");
    header.classList.remove("active");
    main.classList.remove("active");
    footer.classList.remove("active");
}))