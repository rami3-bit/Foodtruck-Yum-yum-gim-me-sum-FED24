//Den här delen skickar en begäran och hämtar nyckel



async function getApiKey() {						// asynchronous, väntar på svar ifrån servern, utan den krashar det.
	try {										// try är till för att fånga fel om de uppstår
	  const response = await fetch("https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys", {								//hämtar nyckel ifrån api
		method: "POST", 				// Method innebär vilken typ av HTTP som ska skickas eller method. POST innebär att skicka data
		headers: {
		  "content-type": "application/json"
		}
	  });
  
	  if (response.ok) {				// kollar om svar från servern är ok
		const data = await response.json();		//	hämtar nyckel i json format och sparar det i variabel data
		console.log("api-nyckel:", data);			 // här får jag  nyckel, visas i console log
		return data;							//
	  } else {
		console.error("Fel vid hämtning av API-nyckel");  // Fel om API-svaret inte är okej
	  }
	} catch (error) {  // catch block för att fånga fel om de uppstår
	  console.error("fel:", error);  // Skriver ut felmeddelandet om något går fel
	}
  }
  







// Funktion för att skapa en tenant
async function skapaTenant(apiKey) {
    const uniqueName = 'Mr.Rami' + Date.now();  // Skapa ett unikt namn baserat på tiden
    const bodyToSend = { name: uniqueName };  // Använd unikt namn för varje tenant
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-zocom': apiKey  // Använd den API-nyckeln du hämtade
        },
        body: JSON.stringify(bodyToSend)  // Skicka data som JSON
    };

    try {
        const response = await fetch('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants', options);
        const data = await response.json();
        console.log('Tenant skapad:', data);  // Skriv ut information om den skapade tenanten
    } catch (error) {
        console.error('Fel vid skapande av tenant:', error);
    }
}

// Hämta API-nyckel och skapa tenant när den är tillgänglig
async function init() {
    const apiKey = await getApiKey(); // Hämta ny API-nyckel
    if (apiKey) {
        skapaTenant(apiKey);  // Skapa tenant med den nyckeln
    }
}

// Starta processen
init();
