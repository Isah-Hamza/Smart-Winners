console.log("start");
const menuBtn = document.querySelector("[data-menu]");
const closeBtn = document.querySelector("[data-close]");
const navBar = document.querySelector("nav");

menuBtn.addEventListener('click', () => {
    navBar.classList.add('open');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('open')
})


console.log("end");
