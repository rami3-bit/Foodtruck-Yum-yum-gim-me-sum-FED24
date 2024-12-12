const orderButton = document.getElementById('order-button');
const menuSection = document.querySelector('.menu');
const bodyContent = document.querySelectorAll('body > *:not(.menu)'); // Allt utom menyn

if (orderButton && menuSection) {
    orderButton.addEventListener('click', () => {
        const isMenuVisible = menuSection.style.display === "block";

        if (isMenuVisible) {
            // Dölj menyn och visa resten av innehållet
            menuSection.style.display = "none";
            bodyContent.forEach((element) => {
                element.style.display = "block";
            });
        } else {
            // Visa menyn och dölj resten av innehållet
            menuSection.style.display = "block";
            bodyContent.forEach((element) => {
                element.style.display = "none";
            });
        }
    });
}
