// API Bas-URL
const baseUrl = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

// Din API-nyckel (sätt den när du har hämtat den)
let apiKey = "";

// Hämta API-nyckel och spara den
export async function hämtaApiNyckel() {
    const url = `${baseUrl}/keys`;
    try {
        const response = await fetch(url, { method: "POST" });
        if (response.ok) {
            const data = await response.json();
            apiKey = data.apiKey; // Spara API-nyckeln för framtida användning
            console.log("Din API-nyckel:", apiKey);
        } else {
            console.error("Misslyckades att hämta API-nyckel:", response.statusText);
        }
    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av API-nyckeln:", error);
    }
}

// Generell funktion för API-anrop
export async function apiAnrop(endpoint, method = "GET", body = null) {
    const url = `${baseUrl}${endpoint}`;
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "x-zocom": apiKey, // Använd API-nyckeln
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            return await response.json();
        } else {
            console.error("API-anrop misslyckades:", response.statusText);
        }
    } catch (error) {
        console.error("Ett fel uppstod vid API-anrop:", error);
    }
}
