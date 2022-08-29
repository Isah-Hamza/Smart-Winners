const menuBtn = document.querySelector("[data-menu]");
const closeBtn = document.querySelector("[data-close]");
const navBar = document.querySelector("nav");
const logoDiv = document.querySelector("[data-logo]");

menuBtn.addEventListener('click', () => {
    navBar.classList.add('open');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('open')
})

document.addEventListener('scroll',(e) => {
    if(window.scrollY >= 50){
        logoDiv.classList.add('border')
    }else{
        logoDiv.classList.remove('border')
    }
})