// Basculer entre les sections connexion et inscription
const lienInscription = document.getElementById('lien-inscription');
const lienConnexion = document.getElementById('lien-connexion');
const sectionConnexion = document.getElementById('connexion');
const sectionInscription = document.getElementById('inscription');

if (lienInscription) {
    lienInscription.addEventListener('click', (e) => {
        e.preventDefault();
        sectionConnexion.style.display = 'none';
        sectionInscription.style.display = 'block';
    });
}

if (lienConnexion) {
    lienConnexion.addEventListener('click', (e) => {
        e.preventDefault();
        sectionInscription.style.display = 'none';
        sectionConnexion.style.display = 'block';
    });
}
