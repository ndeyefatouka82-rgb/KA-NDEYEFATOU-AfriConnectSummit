// ==================navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// =============menu burger
const menuBtn = document.getElementById("menubtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const themeBtn = document.getElementById("themebtn");
const body = document.body;
const icon = themeBtn.querySelector("i");

// Vérifie le thème enregistré
if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-mode");
    icon.classList.remove("bi-moon");
    icon.classList.add("bi-sun");
}

// Changement de thème
themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");
    }else{
        localStorage.setItem("theme","light");
        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");
    }

});
// nutton scroler
const backtop = document.getElementById("backtop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backtop.style.display = "block";
    } else {
        backtop.style.display = "none";
    }
});
backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});