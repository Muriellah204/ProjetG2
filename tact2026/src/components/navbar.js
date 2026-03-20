document.addEventListener("DOMContentLoaded",()=>{
    const body=document.querySelector("body");
    const navBar=document.querySelector("#navBar");
    const menuContainer=document.querySelector(".menuContainer");
    const menuStyle = document.querySelector(".menuStyle");
    const menuResponsive = document.querySelector(".menuResponsive")
    const ParentMenuRspons = document.querySelector(".ParentMenuRspons");
    const actif=document.querySelector("a");

    /*affichage des menus en responsive*/
    menuResponsive.addEventListener('click',()=>{
        ParentMenuRspons.classList.toggle('active');
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            ParentMenuRspons.classList.remove('active');
        }
    });
});
