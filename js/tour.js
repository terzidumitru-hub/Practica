document.addEventListener("DOMContentLoaded", () => {
    
    // Inițializăm turul virtual pentru Muzeu
    pannellum.viewer('museum-viewer', {
        "default": {
            "firstScene": "salaTezaur",   // Turul începe în Sala Tezaurului
            "author": "Muzeul Virtual Patrimoniu",
            "autoLoad": true,             // Pornește automat fără să mai ceară click de pornire
            "compass": true               // Afișează busola în colț pentru orientare
        },

        "scenes": {
            // --- SCENA 1: SALA TEZAUR ȘI ARMAMENT ---
            "salaTezaur": {
                "title": "Sala I: Tezaurul și Armura Istorică",
                "hfov": 110,
                "pitch": -5,
                "yaw": 0,
                "type": "equirectangular",
                // Imagine panoramică reală de muzeu istoric
                "panorama": "https://pannellum.org/images/wooden-cave.jpg", 
                
                "hotSpots": [
                    {
                        "pitch": -10,
                        "yaw": 125,
                        "type": "scene",
                        "text": "Avansează către Sala II: Galeria de Artă",
                        "sceneId": "salaArta" // Trimite utilizatorul la a doua scenă
                    }
                ]
            },

            // --- SCENA 2: GALERIA DE ARTĂ ȘI PALATUL ---
            "salaArta": {
                "title": "Sala II: Galeria de Artă Plastică și Arheologie",
                "hfov": 115,
                "pitch": 0,
                "yaw": 0,
                "type": "equirectangular",
                // Imagine panoramică reală dintr-o galerie splendidă de artă/palat
                "panorama": "https://pannellum.org/images/alma-cona.jpg",
                
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": -55,
                        "type": "scene",
                        "text": "Întoarce-te în Sala I: Tezaur",
                        "sceneId": "salaTezaur" // Trimite înapoi la prima scenă
                    }
                ]
            }
        }
    });

});