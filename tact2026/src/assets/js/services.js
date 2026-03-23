const btnFormation = document.querySelector('.btn-formation');
// Objet bouton Initiale et Modulaire
const btn = [
    {balise: "button",contenue : " FORMATION INITIALE ", classe : "btn-initiale btn-f"},
    {balise: "div",contenue : "", classe : "ligne-verticale"},
    {balise: "button",contenue : "FORMATION MODULAIRE", classe : "btn-modulaire btn-f"}
]
// Création bouton Initiale et Modulaire
btn.map((btnForm) => {
    const bouton = document.createElement(btnForm.balise);
    bouton.setAttribute("class",btnForm.classe);
    bouton.innerHTML = btnForm.contenue;
    btnFormation.appendChild(bouton);
    if (btnForm.contenue.includes("FORMATION INITIALE")){
        bouton.classList.add("actif-formation");
    }
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

// clique responsive modulaire
// selection bouton
const btnWord = document.querySelector('.btn-word');
const btnExcel = document.querySelector('.btn-excel');
const btnPowerpoint = document.querySelector('.btn-powerpoint');
const btnInternet = document.querySelector('.btn-internet');
// selection description
const descWord = document.querySelector('.desc-mobile-word');
const descExcel = document.querySelector('.desc-mobile-excel');
const descPowerpoint = document.querySelector('.desc-mobile-powerpoint');
const descInternet = document.querySelector('.desc-mobile-internet');
// bouton clique
btnWord.addEventListener('click',() => {
    setTimeout(() => {
    descExcel.style.display = "none";
    descPowerpoint.style.display = "none";
    descInternet.style.display = "none";
    },400)
    descExcel.style.animation = "sortir-up 0.5s";
    descPowerpoint.style.animation = "sortir-down 0.5s";
    descInternet.style.animation = "sortir-down 0.5s";
    descWord.style.display = "block";
    descWord.style.animation = "up-down 0.5s"
})
btnExcel.addEventListener('click',() => {
    setTimeout(() => {
    descWord.style.display = "none";
    descPowerpoint.style.display = "none";
    descInternet.style.display = "none";
    },400)
    descWord.style.animation = "sortir-up 0.5s";
    descPowerpoint.style.animation = "sortir-down 0.5s";
    descInternet.style.animation = "sortir-down 0.5s";
    descExcel.style.display = "block";
    descExcel.style.animation = "up-down 0.5s"
})
btnPowerpoint.addEventListener('click',() => {
    setTimeout(() => {
    descExcel.style.display = "none";
    descWord.style.display = "none";
    descInternet.style.display = "none";
    },400)
    descExcel.style.animation = "sortir-up 0.5s";
    descWord.style.animation = "sortir-up 0.5s";
    descInternet.style.animation = "sortir-down 0.5s";
    descPowerpoint.style.display = "block";
    descPowerpoint.style.animation = "down-up 0.5s"
})
btnInternet.addEventListener('click',() => {
    setTimeout(() => {
    descExcel.style.display = "none";
    descWord.style.display = "none";
    descPowerpoint.style.display = "none";
    },400)
    descExcel.style.animation = "sortir-up 0.5s";
    descWord.style.animation = "sortir-up 0.5s";
    descPowerpoint.style.animation = "sortir-down 0.5s";
    descInternet.style.display = "block";
    descInternet.style.animation = "down-up 0.5s"
})