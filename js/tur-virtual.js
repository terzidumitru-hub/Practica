document.addEventListener("DOMContentLoaded", () => {
    const iframeMuzeu = document.getElementById('iframe-muzeu');
    const btnTurComplet = document.getElementById('btn-tur-complet');
    const btnSiteOficial = document.getElementById('btn-site-oficial');

    // Când se apasă pe butonul de Reîncărcare / Resetare tur
    btnTurComplet.addEventListener('click', () => {
        iframeMuzeu.src = "https://www.nationalmuseum.md/3Dtur-muzeu/index.html";
        
        // Efect vizual de buton activ
        btnTurComplet.classList.add('active');
    });

    // Buton utilitar care deschide turul mare separat, în caz de nevoie pe ecrane mici
    btnSiteOficial.addEventListener('click', () => {
        window.open("https://www.nationalmuseum.md/3Dtur-muzeu/index.html", "_blank");
    });
});