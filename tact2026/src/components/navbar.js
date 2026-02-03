document.addEventListener("DOMContentLoaded",()=>{
    const body=document.querySelector("body");
    const navBar=document.querySelector(".navBar");
    const menuContainer=document.querySelector(".menuContainer");
    const actif=document.querySelector("a");
    actif.addEventListener("click",()=>{
        actif.classList.toggle("actif");
    })
});