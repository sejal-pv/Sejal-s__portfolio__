// =========================
// Navbar Background Change
// =========================

window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 15, 31, 0.98)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "rgba(10, 15, 31, 0.95)";
        navbar.style.boxShadow = "none";
    }
});


// =========================
// Active Navigation Link
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// =========================
// Fade In Animation
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.2
});


document.querySelectorAll(".card, .experience-item")
    .forEach(el => observer.observe(el));


// =========================
// Typing Effect
// =========================

const roles = [
    "Full Stack Developer",
    "MCA Student",
    "Cloud Enthusiast",
    "AI Explorer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeRole() {

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 50);

    } else {

        roleIndex = (roleIndex + 1) % roles.length;

        setTimeout(typeRole, 300);
    }
}

document.addEventListener("DOMContentLoaded", typeRole);
