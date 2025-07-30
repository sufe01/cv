let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");
let body = document.body;

function openPopup(){
    popup.classList.add("open-popup");
    overlay.classList.add("active");
    body.style.overflow = "hidden";  // disable scroll
}

function closePopup(){
    popup.classList.remove("open-popup");
    overlay.classList.remove("active");
    body.style.overflow = "";        // enable scroll
}
overlay.addEventListener('click', closePopup);
    
// let popup = document.getElementById("popup");
// function openPopup(){
//     popup.classList.add("open-popup");
// }
// function closePopup(){
//     popup.classList.remove("open-popup");
// }