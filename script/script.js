// script for NAVBAR📝
let menuIcon=document.querySelector("#menu-icon");
let Navbar=document.querySelector(".nav-bottom");

menuIcon.addEventListener("click",()=>{
    if(menuIcon.name==="menu")
    {
        menuIcon.name="close";
        Navbar.classList.add("nav-active")
    }
    else
    {
        menuIcon.name="menu";
        Navbar.classList.remove("nav-active");
    }
})


// script for searchbar
let searchaIcon=document.querySelector("#nav-search-icon");
let searchSection=document.querySelector(".search-section");
let searchCloseIcon=document.querySelector("#close_icon");

searchaIcon.addEventListener("click",()=>{
    // searchSection.style.left="0%";
    searchSection.classList.add("search-active")
})

searchCloseIcon.addEventListener("click",()=>{
    searchSection.classList.remove("search-active")
})

