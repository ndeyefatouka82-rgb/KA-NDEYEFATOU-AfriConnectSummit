// ==================navbar
const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}
// =============menu burger
const menuBtn = document.getElementById("menubtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
// Vérifie le thème enregistré
const themeBtn = document.getElementById("themebtn");

if (themeBtn) {

    const body = document.body;
    const icon = themeBtn.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");

        if (icon) {
            icon.classList.remove("bi-moon");
            icon.classList.add("bi-sun");
        }
    }

    themeBtn.addEventListener("click", () => {

        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");

            if (icon) {
                icon.classList.remove("bi-moon");
                icon.classList.add("bi-sun");
            }

        } else {

            localStorage.setItem("theme", "light");

            if (icon) {
                icon.classList.remove("bi-sun");
                icon.classList.add("bi-moon");
            }
        }

    });

}
const backtop = document.getElementById("backtop");

if (backtop) {

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

}
// ================= Validation du formulaire =================

const form = document.querySelector(".contactform");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nom = document.getElementById("nom");
        const email = document.getElementById("email");
        const telephone = document.getElementById("telephone");
        const type = document.getElementById("type");
        const pays = document.getElementById("pays");
        const message = document.getElementById("message");

        const errorNom = document.getElementById("errornom");
        const errorEmail = document.getElementById("erroremail");
        const errorTelephone = document.getElementById("errortelephone");
        const errorType = document.getElementById("errortype");
        const errorPays = document.getElementById("errorpays");
        const errorMessage = document.getElementById("errormessage");

        const success = document.getElementById("successMessage");

        errorNom.textContent = "";
        errorEmail.textContent = "";
        errorTelephone.textContent = "";
        errorType.textContent = "";
        errorPays.textContent = "";
        errorMessage.textContent = "";
        success.textContent = "";

        let valide = true;

        if (nom.value.trim() === "") {
            errorNom.textContent = "Le nom est obligatoire.";
            valide = false;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {
            errorEmail.textContent = "L'email est obligatoire.";
            valide = false;
        } else if (!regexEmail.test(email.value)) {
            errorEmail.textContent = "Format d'email invalide.";
            valide = false;
        }

        if (telephone.value.trim() === "") {
            errorTelephone.textContent = "Le téléphone est obligatoire.";
            valide = false;
        }

        if (type.value === "") {
            errorType.textContent = "Choisissez un type de participation.";
            valide = false;
        }

        if (pays.value === "") {
            errorPays.textContent = "Choisissez un pays.";
            valide = false;
        }

        if (message.value.trim() === "") {
            errorMessage.textContent = "La motivation est obligatoire.";
            valide = false;
        } else if (message.value.trim().length < 20) {
            errorMessage.textContent = "Minimum 20 caractères.";
            valide = false;
        }

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

if (elements.length > 0) {

    const fadeObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    elements.forEach(element => {
        fadeObserver.observe(element);
    });

}
// ============compteurr ============
const counters = document.querySelectorAll(".counter h3");
const countersSection = document.querySelector(".counters");

if (counters.length > 0 && countersSection) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                counters.forEach(counter => {

                    const target = parseInt(counter.dataset.target);
                    let count = 0;

                    const increment = Math.ceil(target / 100);

                    function updateCounter() {

                        count += increment;

                        if (count >= target) {
                            counter.textContent = target;
                        } else {
                            counter.textContent = count;
                            requestAnimationFrame(updateCounter);
                        }

                    }

                    updateCounter();

                });

                counterObserver.disconnect();

            }

        });

    }, {
        threshold: 0.5
    });

    counterObserver.observe(countersSection);

}

// ====================compte a rebours en temps reel
const conferenceDate = new Date("November 12, 2026 09:00:00").getTime();

function updateCountdown() {

    const jour = document.getElementById("jour");
    const heures = document.getElementById("heures");
    const minutes = document.getElementById("minutes");
    const secondes = document.getElementById("secondes");

    if (!jour || !heures || !minutes || !secondes) return;

    const now = new Date().getTime();
    const distance = conferenceDate - now;

    if (distance <= 0) {
        jour.textContent = "00";
        heures.textContent = "00";
        minutes.textContent = "00";
        secondes.textContent = "00";
        return;
    }

    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    jour.textContent = String(jours).padStart(2, "0");
    heures.textContent = String(hrs).padStart(2, "0");
    minutes.textContent = String(mins).padStart(2, "0");
    secondes.textContent = String(secs).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ================================filtrageee intervenanttt===============

const categorySelect = document.getElementById("category-select");

if (categorySelect) {

    const cards = document.querySelectorAll(".intervenant-card");

    categorySelect.addEventListener("change", function () {

        const value = this.value;

        cards.forEach(card => {

            if (value === "all" || card.dataset.category === value) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}
// ================================filtragee tabbbbbbbb==================
const tabs = document.querySelectorAll(".tab");
const plannings = document.querySelectorAll(".planning");

if (tabs.length > 0 && plannings.length > 0) {

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn => {
                btn.classList.remove("active");
            });

            tab.classList.add("active");

            const day = tab.dataset.day;

            plannings.forEach(planning => {

                if (planning.id === day) {
                    planning.classList.add("active");
                } else {
                    planning.classList.remove("active");
                }

            });

        });

    });

}