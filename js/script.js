const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () =>  navbarNav.classList.toggle("active"))

document.addEventListener( "click", (e) => {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) navbarNav.classList.remove("active");
})