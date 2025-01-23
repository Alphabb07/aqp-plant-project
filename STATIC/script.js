const plantsDatabase = [
    { name: "ISI BARI", lat: 41.125, lng: 16.866 },
    { name: "ISI MODUGNO", lat: 41.057, lng: 16.774 } // Coordinate randomiche
];

function searchPlant() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    const matchedPlants = plantsDatabase.filter(plant => plant.name.toLowerCase().includes(input));

    if (matchedPlants.length > 0) {
        resultDiv.innerHTML = matchedPlants.map(plant => {
            const mapsLink = `https://www.google.com/maps?q=${plant.lat},${plant.lng}`;
            return `
                <p>Impianto trovato: ${plant.name}</p>
                <a href="${mapsLink}" target="_blank">
                    <img src="https://img.icons8.com/external-flat-juicy-fish/64/external-map-location-flat-flat-juicy-fish.png" alt="Mappa" class="icon">
                    Apri in Google Maps
                </a>
            `;
        }).join('');
    } else {
        resultDiv.innerHTML = '<p>Nessun impianto trovato con questo nome.</p>';
    }
}
