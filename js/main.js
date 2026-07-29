// ==================navbar
const navbar = document.querySelector(".navbar");

if (navbar) {
    // Écoute le défilement de la page
    window.addEventListener("scroll", () => {
         // Vérifie si la page a été descendue de plus de 50 pixels
        if (window.scrollY > 50) {
        // Ajoute la classe "scrolled" pour modifier le style

            navbar.classList.add("scrolled");
        } else {
        // Retire la classe lorsque l'on revient en haut

            navbar.classList.remove("scrolled");
        }
    });
}

// ===================================================
// MENU BURGER
// Cette partie affiche ou masque le menu sur mobile.
// ===================================================

// Sélectionne le bouton du menu burger
const menuBtn = document.getElementById("menubtn");
// Sélectionne la liste des liens de navigation

const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
// Exécute cette fonction lorsque l'utilisateur clique sur le bouton
    menuBtn.addEventListener("click", () => {
            // Ajoute ou retire la classe "active"
    // pour ouvrir ou fermer le menu
        navLinks.classList.toggle("active");
    });
}


// ===================================================
// DARK MODE
// Cette partie permet de changer entre le mode clair
// et le mode sombre tout en sauvegardant le choix.
// ===================================================
// Sélectionne le bouton du Dark Mode
const themeBtn = document.getElementById("themebtn");

if (themeBtn) {
// Sélectionne le corps de la page

    const body = document.body;
// Sélectionne l'icône située dans le bouton

    const icon = themeBtn.querySelector("i");
// Vérifie si un thème est déjà enregistré dans le LocalStorage

    if (localStorage.getItem("theme") === "dark") {
    // Active le mode sombre

        body.classList.add("dark-mode");
    // Change l'icône de la lune vers le soleil

        if (icon) {
            icon.classList.remove("bi-moon");
            icon.classList.add("bi-sun");
        }
    }
// Exécute ce code lorsqu'on clique sur le bouton

    themeBtn.addEventListener("click", () => {
    // Active ou désactive la classe dark-mode

        body.classList.toggle("dark-mode");
    // Vérifie si le mode sombre est actif

        if (body.classList.contains("dark-mode")) {
        // Enregistre le thème sombre

            localStorage.setItem("theme", "dark");
        // Affiche l'icône soleil

            if (icon) {
                icon.classList.remove("bi-moon");
                icon.classList.add("bi-sun");
            }

        } else {
        // Enregistre le thème clair

            localStorage.setItem("theme", "light");
        // Affiche l'icône lune

            if (icon) {
                icon.classList.remove("bi-sun");
                icon.classList.add("bi-moon");
            }
        }

    });

}
// ===================================================
// BOUTON RETOUR EN HAUT
// Cette partie affiche un bouton après un certain
// défilement et permet de revenir en haut de la page.
// ===================================================

// Sélectionne le bouton Retour en haut

const backtop = document.getElementById("backtop");

if (backtop) {
// Écoute le défilement de la page

    window.addEventListener("scroll", () => {
    // Si l'utilisateur descend de plus de 200 pixels

        if (window.scrollY > 200) {
        // Affiche le bouton
            
            backtop.style.display = "block";
        } else {
        // Sinon le masque

            backtop.style.display = "none";
        }

    });
// Lorsque l'utilisateur clique sur le bouton

    backtop.addEventListener("click", () => {
    // Revient en haut de la page avec une animation fluide

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// ===================================================
// VALIDATION DU FORMULAIRE
// Cette partie vérifie les informations saisies par
// l'utilisateur avant d'autoriser l'envoi du formulaire.
// ===================================================

// Sélectionne le formulaire grâce à sa classe CSS

const form = document.querySelector(".contactform");
// Vérifie que le formulaire existe sur la page

if (form) {
    // Exécute ce code lorsque l'utilisateur clique sur "Envoyer"

    form.addEventListener("submit", function (e) {
        // Empêche l'envoi automatique du formulaire

        e.preventDefault();
 // ==========================
        // Récupération des champs
        // ==========================
        // Champ Nom

        const nom = document.getElementById("nom");
        // Champ Email

        const email = document.getElementById("email");
        // Champ Téléphone

        const telephone = document.getElementById("telephone");
        // Liste déroulante du type de participation

        const type = document.getElementById("type");
        // Liste déroulante du pays

        const pays = document.getElementById("pays");
        // Champ Motivation

        const message = document.getElementById("message");
  // ==========================
        // Zones d'affichage des erreurs
        // ==========================
        const errorNom = document.getElementById("errornom");
        const errorEmail = document.getElementById("erroremail");
        const errorTelephone = document.getElementById("errortelephone");
        const errorType = document.getElementById("errortype");
        const errorPays = document.getElementById("errorpays");
        const errorMessage = document.getElementById("errormessage");
        // Message affiché lorsque tout est correct

        const success = document.getElementById("successMessage");
        // ==========================
        // Réinitialisation des messages
        // ==========================
        // Supprime les anciens messages d'erreur

        errorNom.textContent = "";
        errorEmail.textContent = "";
        errorTelephone.textContent = "";
        errorType.textContent = "";
        errorPays.textContent = "";
        errorMessage.textContent = "";
        // Supprime l'ancien message de succès

        success.textContent = "";
        // Variable servant à vérifier si tout est valide

        let valide = true;
        // ==========================
        // Vérification du nom
        // ==========================

        // Vérifie si le champ est vide
        if (nom.value.trim() === "") {
            // Affiche un message d'erreur

            errorNom.textContent = "Le nom est obligatoire.";
            // Empêche la validation

            valide = false;
        }
        // ==========================
        // Vérification de l'email
        // ==========================

        // Expression régulière permettant de vérifier le format de l'email

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Vérifie si le champ est vide

        if (email.value.trim() === "") {
            errorEmail.textContent = "L'email est obligatoire.";
            valide = false;
        // Vérifie si le format est incorrect

        } else if (!regexEmail.test(email.value)) {
            errorEmail.textContent = "Format d'email invalide.";
            valide = false;
        }

        // ==========================
        // Vérification du téléphone
        // ==========================

        // Vérifie si le champ est vide
        if (telephone.value.trim() === "") {
            errorTelephone.textContent = "Le téléphone est obligatoire.";
            valide = false;
        }

        // ==========================
        // Vérification du type
        // ==========================

        // Vérifie si aucune option n'est choisie
        if (type.value === "") {
            errorType.textContent = "Choisissez un type de participation.";
            valide = false;
        }
        // ==========================
        // Vérification du pays
        // ==========================

        // Vérifie si aucun pays n'est sélectionné
        if (pays.value === "") {
            errorPays.textContent = "Choisissez un pays.";
            valide = false;
        }
        // ==========================
        // Vérification du message
        // ==========================

        // Vérifie si le champ est vide
        if (message.value.trim() === "") {
            errorMessage.textContent = "La motivation est obligatoire.";
            valide = false;
        // Vérifie que le message contient au moins 20 caractères

        } else if (message.value.trim().length < 20) {
            errorMessage.textContent = "Minimum 20 caractères.";
            valide = false;
        }
        // ==========================
        // Validation finale
        // ==========================

        // Si aucune erreur n'a été détectée
        if (valide) {
            // Affiche un message de confirmation

            success.textContent = "Inscription envoyée avec succès !";
            // Met le message en vert

            success.style.color = "green";
            // Vide tous les champs du formulaire

            form.reset();
        }

    });

}
// ===================================================
// ANIMATIONS AU SCROLL
// Cette partie déclenche les animations Fade-in,
// Slide-in et Zoom-in lorsque les éléments
// deviennent visibles à l'écran.
// ===================================================

// Sélectionne tous les éléments ayant les classes
// fade-in, slide-in ou zoom-in

const elements = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");

if (elements.length > 0) {
// Crée un observateur qui surveille l'apparition
// des éléments dans la fenêtre du navigateur
    const fadeObserver = new IntersectionObserver((entries) => {
    // Parcourt tous les éléments observés

        entries.forEach(entry => {
        // Vérifie si l'élément est visible à l'écran

            if (entry.isIntersecting) {
                  // Ajoute la classe "show"
            // pour lancer l'animation CSS
                entry.target.classList.add("show");
            }

        });

    }, {
         // L'animation démarre lorsque 20 % de l'élément
    // est visible dans la fenêtre
        threshold: 0.2
    });
// Commence à observer chaque élément sélectionné

    elements.forEach(element => {
        fadeObserver.observe(element);
    });

}
// ===================================================
// COMPTEURS ANIMÉS
// Cette partie anime progressivement les statistiques
// lorsque la section devient visible.
// ===================================================

// Sélectionne tous les compteurs
const counters = document.querySelectorAll(".counter h3");
// Crée un observateur pour détecter
// l'apparition de la section
const countersSection = document.querySelector(".counters");

if (counters.length > 0 && countersSection) {

    const counterObserver = new IntersectionObserver((entries) => {
    // Parcourt les éléments observés

        entries.forEach(entry => {
        // Vérifie si la section est visible

            if (entry.isIntersecting) {
            // Parcourt tous les compteurs

                counters.forEach(counter => {
                // Récupère la valeur finale

                    const target = parseInt(counter.dataset.target);
                // Valeur de départ

                    let count = 0;
                // Définit la vitesse de l'animation

                    const increment = Math.ceil(target / 100);
                // Fonction qui anime le compteur

                    function updateCounter() {
                    // Ajoute progressivement la valeur

                        count += increment;
                    // Vérifie si la valeur finale est atteinte

                        if (count >= target) {
                        // Affiche la valeur finale

                            counter.textContent = target;
                        } else {
                        // Affiche la valeur actuelle

                            counter.textContent = count;
                        // Continue l'animation

                            requestAnimationFrame(updateCounter);
                        }

                    }
                // Lance l'animation

                    updateCounter();

                });
            // Arrête l'observation une fois l'animation terminée

                counterObserver.disconnect();

            }

        });

    }, {
        // Déclenche l'animation lorsque
         // 50 % de la section est visible
        threshold: 0.5
    });
// Commence à observer la section des statistiques

    counterObserver.observe(countersSection);

}

// ===================================================
// COMPTE À REBOURS
// Cette partie affiche en temps réel le nombre de
// jours, d'heures, de minutes et de secondes
// restants avant la conférence.
// ===================================================

// Définit la date et l'heure de la conférence
const conferenceDate = new Date("November 12, 2026 09:00:00").getTime();
// Fonction qui met à jour le compte à rebours

function updateCountdown() {

    const jour = document.getElementById("jour");
    const heures = document.getElementById("heures");
    const minutes = document.getElementById("minutes");
    const secondes = document.getElementById("secondes");

    if (!jour || !heures || !minutes || !secondes) return;
    // Récupère la date et l'heure actuelles

    const now = new Date().getTime();
    // Calcule le temps restant avant la conférence

    const distance = conferenceDate - now;
    // Si la date est dépassée

    if (distance <= 0) {
        // Affiche 00 partout

        jour.textContent = "00";
        heures.textContent = "00";
        minutes.textContent = "00";
        secondes.textContent = "00";
        // Arrête la fonction

        return;
    }
    // Calcule le nombre de jours restants

    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    // Calcule le nombre d'heures restantes

    const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Calcule le nombre de minutes restantes

    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // Calcule le nombre de secondes restantes

    const secs = Math.floor((distance % (1000 * 60)) / 1000);
    // Affiche les jours avec deux chiffres

    jour.textContent = String(jours).padStart(2, "0");
    // Affiche les heures avec deux chiffres

    heures.textContent = String(hrs).padStart(2, "0");
    // Affiche les minutes avec deux chiffres

    minutes.textContent = String(mins).padStart(2, "0");
    // Affiche les secondes avec deux chiffres

    secondes.textContent = String(secs).padStart(2, "0");
}
// Lance le compte à rebours dès le chargement de la page

updateCountdown();
// Met à jour le compte à rebours toutes les secondes

setInterval(updateCountdown, 1000);

// ================================filtrageee intervenanttt===============

// Récupère le menu déroulant des catégories

const categorySelect = document.getElementById("category-select");
// Vérifie que le menu existe sur la page

if (categorySelect) {
    // Récupère toutes les cartes des intervenants

    const cards = document.querySelectorAll(".intervenant-card");
    // Exécute le filtre lorsqu'une catégorie est sélectionnée

    categorySelect.addEventListener("change", function () {
        // Récupère la valeur choisie dans le menu

        const value = this.value;
        // Parcourt toutes les cartes

        cards.forEach(card => {
 // Affiche toutes les cartes si "all" est sélectionné
            // ou si la catégorie de la carte correspond au choix
            if (value === "all" || card.dataset.category === value) {
                card.style.display = "";
            } else {
                // Cache les cartes qui ne correspondent pas

                card.style.display = "none";
            }

        });

    });

}
// ================================filtragee tabbbbbbbb==================

// Récupère tous les boutons des onglets

const tabs = document.querySelectorAll(".tab");
// Récupère tous les tableaux de planning

const plannings = document.querySelectorAll(".planning");
// Vérifie que les onglets et les plannings existent

if (tabs.length > 0 && plannings.length > 0) {
    // Parcourt chaque bouton

    tabs.forEach(tab => {
        // Détecte le clic sur un onglet

        tab.addEventListener("click", () => {
            // Retire la classe active de tous les boutons

            tabs.forEach(btn => {
                btn.classList.remove("active");
            });
            // Ajoute la classe active au bouton cliqué

            tab.classList.add("active");
            // Récupère le jour associé à l'onglet

            const day = tab.dataset.day;
            // Parcourt tous les plannings

            plannings.forEach(planning => {
                // Affiche uniquement le planning correspondant

                if (planning.id === day) {
                    planning.classList.add("active");
                } else {
                    // Cache les autres plannings

                    planning.classList.remove("active");
                }

            });

        });

    });

}
// ============== copyright avec année dynamique=========

// Récupère l'élément qui affichera l'année

const year = document.getElementById("year");
// Vérifie que l'élément existe

if (year) {
    // Insère automatiquement l'année actuelle

    year.textContent = new Date().getFullYear();
}