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
// button scroler
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
// ================= Validation du formulaire =================

const form = document.querySelector(".contactform");

if (form) {

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Champs
        const nom = document.getElementById("nom");
        const email = document.getElementById("email");
        const telephone = document.getElementById("telephone");
        const type = document.getElementById("type");
        const pays = document.getElementById("pays");
        const message = document.getElementById("message");

        // Erreurs
        const errorNom = document.getElementById("errornom");
        const errorEmail = document.getElementById("erroremail");
        const errorTelephone = document.getElementById("errortelephone");
        const errorType = document.getElementById("errortype");
        const errorPays = document.getElementById("errorpays");
        const errorMessage = document.getElementById("errormessage");

        const success = document.getElementById("successMessage");

        // Réinitialisation
        errorNom.textContent = "";
        errorEmail.textContent = "";
        errorTelephone.textContent = "";
        errorType.textContent = "";
        errorPays.textContent = "";
        errorMessage.textContent = "";
        success.textContent = "";

        let valide = true;

        // Nom
        if (nom.value.trim() === "") {
            errorNom.textContent = "Le nom est obligatoire.";
            valide = false;
        }

        // Email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {
            errorEmail.textContent = "L'email est obligatoire.";
            valide = false;
        } else if (!regexEmail.test(email.value)) {
            errorEmail.textContent = "Format d'email invalide.";
            valide = false;
        }

        // Téléphone
        if (telephone.value.trim() === "") {
            errorTelephone.textContent = "Le téléphone est obligatoire.";
            valide = false;
        }

        // Type
        if (type.value === "") {
            errorType.textContent = "Choisissez un type de participation.";
            valide = false;
        }

        // Pays
        if (pays.value === "") {
            errorPays.textContent = "Choisissez un pays.";
            valide = false;
        }

        // Message
        if (message.value.trim() === "") {
            errorMessage.textContent = "La motivation est obligatoire.";
            valide = false;
        } else if (message.value.trim().length < 20) {
            errorMessage.textContent = "Minimum 20 caractères.";
            valide = false;
        }

        // Succès
        if (valide) {
            success.textContent = "Inscription envoyée avec succès !";
            success.style.color = "green";
            form.reset();
        }

    });

}
// ================fade-in
// ================= Animations au scroll =================

const elements = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

elements.forEach(element => {
    observer.observe(element);
});
// ============compte à rebours en temps réel ============
const conferenceDate = new Date("November 15, 2026 09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = conferenceDate - now;

    if (distance <= 0) {
        document.getElementById("jour").textContent = "00";
        document.getElementById("heures").textContent = "00";
        document.getElementById("Minutes").textContent = "00";
        document.getElementById("Secondes").textContent = "00";
        return;
    }

    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((distance % (1000 * 60)) / 1000);
const counters = document.querySelectorAll(".counter h3");
// =====================compteurrr
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            counters.forEach(counter => {
                const target = +counter.dataset.target;
                let count = 0;

                const increment = Math.max(1, Math.ceil(target / 100));

                const updateCounter = () => {
                    count += increment;

                    if (count >= target) {
                        counter.textContent = target;
                    } else {
                        counter.textContent = count;
                        requestAnimationFrame(updateCounter);
                    }
                };

                updateCounter();
            });

            observer.disconnect(); // L'animation ne se lance qu'une seule fois
        }
    });
}, {
    threshold: 0.5
});

observer.observe(document.querySelector(".counters"));
    document.getElementById("jour").textContent = String(jours).padStart(2, "0");
    document.getElementById("heures").textContent = String(heures).padStart(2, "0");
    document.getElementById("Minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("Secondes").textContent = String(secondes).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
