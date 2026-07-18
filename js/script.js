// ================================
// Mobile Navigation Toggle
// ================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
    } else {
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    });
});


// ================================
// Dark / Light Mode
// ================================

const themeBtn = document.getElementById("theme-btn");
const body = document.body;

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");
    }

});

// Load saved theme

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        body.classList.add("dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

});


// ================================
// Typing Text Effect
// ================================

const typing = document.querySelector(".typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "ECE Student",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ================================
// Scroll To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// Active Navbar Link
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Contact Form Validation
// ================================

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();

    const email = form.querySelector("input[type='email']").value.trim();

    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;

    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        alert("Please enter a valid email.");

        return;

    }

    alert("Message sent successfully!");

    form.reset();

});


// ================================
// Fade In Animation on Scroll
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .skill, .achievement").forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});


// ================================
// Navbar Shadow on Scroll
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";

    } else {

        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";

    }

});


// ================================
// Current Year in Footer (Optional)
// ================================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Sandeep | All Rights Reserved`;
