const menuItems = document.querySelectorAll(".menu-category");

// Lägg till klickhändelse för varje meny-kategori
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Växla "selected"-klassen
        item.classList.toggle("selected");
    });
});
