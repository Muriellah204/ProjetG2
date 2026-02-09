const btnFormation = document.querySelector('.btn-formation');
// Objet bouton Initiale et Modulaire
const btn = [
    {balise: "button",contenue : "FORMATION INITIALE", classe : "btn-initiale btn-f"},
    {balise: "div",contenue : "", classe : "ligne-verticale"},
    {balise: "button",contenue : "FORMATION MODULAIRE", classe : "btn-modulaire btn-f"}
]
// Création bouton Initiale et Modulaire
btn.map((btnForm) => {
    const bouton = document.createElement(btnForm.balise);
    bouton.setAttribute("class",btnForm.classe);
    bouton.innerHTML = btnForm.contenue;
    btnFormation.appendChild(bouton);
    if (btnForm.contenue === "FORMATION INITIALE"){
        bouton.classList.add("actif-formation");
    }
    const btnModulaire = document.querySelector('.btn-modulaire');
})
// Bouton Initale et Modulaire
const formationInitiale = document.querySelector('.formation-initiale');
const formationModulaire = document.querySelector('.formation-modulaire');
const btnInitiale = document.querySelector('.btn-initiale');
const btnModulaire = document.querySelector('.btn-modulaire');
btnInitiale.addEventListener('click',() => {
    // actif et inactif
    btnInitiale.classList.add("actif-formation");
    btnModulaire.classList.remove("actif-formation");
    // afficher contenue formation initiale
    formationInitiale.style.display = "block";
    formationModulaire.style.display = "none";

})
btnModulaire.addEventListener('click',() => {
    // actif et inactif
    btnModulaire.classList.add("actif-formation");
    btnInitiale.classList.remove("actif-formation");
    // afficher contenue formation modulaire
    formationModulaire.style.display = "block";
    formationInitiale.style.display = "none";
})
