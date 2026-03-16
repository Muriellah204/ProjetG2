document.addEventListener("DOMContentLoaded", () => {

    const menuContainer = document.querySelector(".menuContainer");
    const menuResponsive = document.querySelector(".menuResponsive");
    const ParentMenuRspons = document.querySelector(".ParentMenuRspons");
    const links=document.querySelectorAll(".menuStyle a")

    /* menu actif */    
    links.forEach(link=>{        
        link.addEventListener("click",()=>{
            links.forEach(l=>l.classList.remove("actif"))            
            link.classList.add("actif")        
        })        
    })
    
    function checkScreen() {

        if (window.innerWidth >= 768) {
            menuResponsive.style.display = "none";
            ParentMenuRspons.style.display = "none";
            menuContainer.style.display = "flex";

        } else {
            menuResponsive.style.display = "flex";
            ParentMenuRspons.style.display = "none";

        }

    }

    checkScreen();

    window.addEventListener("resize", checkScreen);

    menuResponsive.addEventListener("click", () => {

        if (ParentMenuRspons.style.display === "flex") {
            ParentMenuRspons.style.display = "none";
        } else {
            ParentMenuRspons.style.display = "flex";
        }

    });

});