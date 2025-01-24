const plantsDatabase = [
    { name: "Cabina 86", location: "Molfetta", lat: 40.093479, lng: 16.195452 },
    { name: "Presa 63", location: "Lecce", lat: 41.046389, lng: 17.662041 },
    { name: "ISI 77", location: "Barletta", lat: 40.277828, lng: 17.758699 },
    { name: "Cabina 92", location: "Francavilla Fontana", lat: 41.401112, lng: 16.356020 },
    { name: "ISI 21", location: "Manfredonia", lat: 40.896629, lng: 17.787874 },
    // Altri 55 impianti precaricati...
];

function searchPlant() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    const matchedPlants = plantsDatabase.filter(plant => plant.name.toLowerCase().includes(input));

    if (matchedPlants.length > 0) {
        resultDiv.innerHTML = matchedPlants.map(plant => {
            const mapsLink = `https://www.google.com/maps?q=${plant.lat},${plant.lng}`;
            return `
                <p>Impianto trovato: ${plant.name} (${plant.location})</p>
                <a href="${mapsLink}" target="_blank">
                    <img src="static/IMMAGES/electric-factory.png" alt="Power Plant Icon" class="icon">
                    Apri in Google Maps
                </a>
            `;
        }).join('');
    } else {
        resultDiv.innerHTML = '<p>Nessun impianto trovato con questo nome.</p>';
    }
}
