const menuItems = document.querySelectorAll(".menu-category");
const sauceButtons = document.querySelectorAll(".sauce-button");
const drinkButtons = document.querySelectorAll(".drink-button");

// Funktion som växlar "selected"-klassen
function toggleSelection(elements) {
    elements.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("selected");
        });
    });
}

// Använd funktionen för alla tre typer
toggleSelection(menuItems);
toggleSelection(sauceButtons);
toggleSelection(drinkButtons);
