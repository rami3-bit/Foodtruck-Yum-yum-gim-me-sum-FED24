const apiUrl = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants";
const apiKey = "DIN_API_NYCKEL_HÄR"; // Byt ut med din API-nyckel

async function skapaTenant(namn) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-zocom": apiKey,
            },
            body: JSON.stringify({ name: namn }), // Skicka "namn" som en sträng
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Tenant skapad:", data); // Visa svar från API:t
        } else {
            console.error("Fel vid skapande av tenant:", response.statusText);
        }
    } catch (error) {
        console.error("Något gick fel:", error);
    }
}

// Anropa funktionen med ditt namn
skapaTenant("Rami");
