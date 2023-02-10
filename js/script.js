const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const menuItems = Array.from(navMenu.children);

menuIcon.addEventListener("click", () =>{
    navMenu.classList.toggle("show");
});

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", ()=>{
        navMenu.classList.remove("show");
    });
});
