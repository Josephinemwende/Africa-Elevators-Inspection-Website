const menuIcon = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const overlay = document.getElementById("overlay");
const closeIcon = document.getElementById("menu-close");

function openMenu() {
    mobileNav.classList.remove("d-none");
    overlay.classList.remove("d-none");
}

function closeMenu() {
    mobileNav.classList.add("d-none");
    overlay.classList.add("d-none");
}

function handleMenu() {
    menuIcon.addEventListener("click", openMenu);

    overlay.addEventListener("click", closeMenu);

    // Optional: close icon inside nav
    if (closeIcon) {
        closeIcon.addEventListener("click", closeMenu);
    }

    // Close menu when any nav link is clicked
    document.querySelectorAll("#mobile-nav a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

handleMenu();


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove("d-none");
    } else {
        scrollToTopBtn.classList.add("d-none");
    }
});

// Scroll to top on click
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

