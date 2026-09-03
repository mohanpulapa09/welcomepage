```javascript
// =============================
// MOBILE MENU
// =============================

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


// =============================
// GET STARTED BUTTON
// =============================

function showWelcome() {

    alert(
        "Welcome! 🚀\n\n" +
        "You are ready to get started."
    );

}


// =============================
// SCROLL TO SECTION
// =============================

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =============================
// CONTACT BUTTON
// =============================

function contactMessage() {

    alert(
        "Thank you for your interest! 😊\n\n" +
        "We will contact you soon."
    );

}


// =============================
// CLOSE MOBILE MENU
// WHEN LINK IS CLICKED
// =============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});
```
