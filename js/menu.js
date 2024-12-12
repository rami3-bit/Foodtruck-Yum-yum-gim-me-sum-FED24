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


const menuItems = document.querySelectorAll('.menu-category');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'selected' class from previously selected item
        document.querySelector('.menu-category.selected')?.classList.remove('selected');

        // Add 'selected' class to the clicked item
        item.classList.add('selected');
    });
});


const apiUrl = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu";
const apiKey = "DIN_API_NYCKEL_HÄR"; // Byt ut med din API-nyckel

async function hämtaMeny() {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "x-zocom": apiKey,
            },
        });

        if (response.ok) {
            const menyData = await response.json();
            visaMeny(menyData); // Skicka datan för att renderas
        } else {
            console.error("Kunde inte hämta menyn:", response.statusText);
        }
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av menyn:", error);
    }
}

function visaMeny(menyData) {
    const menuContainer = document.querySelector(".menu");

    // Skapa HTML för varje menyobjekt
    menuContainer.innerHTML = menyData.map(item => `
        <div class="menu-category">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p class="price">${item.price} SEK</p>
            <button data-id="${item.id}">Lägg till</button>
        </div>
    `).join("");
}

// Kör funktionen för att hämta menyn
hämtaMeny();
