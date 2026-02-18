document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const menuResponsive = document.querySelector(".menuResponsive");
    const menuStyle = document.querySelector(".menuStyle");
    const ParentMenuRspons = document.querySelector(".ParentMenuRspons");
    const actif = document.querySelector(".actif");

    if (body.style.backgroundColor === "var(--bgc_dark)") {
        body.style.color = "var(--color_dark)";
    } else {
        body.style.color = "var(--color_light)";
    }

    menuResponsive.addEventListener("click", () => {
        ParentMenuRspons.style.display = "flex";
    });
});
