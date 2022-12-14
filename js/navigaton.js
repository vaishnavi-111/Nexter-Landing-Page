const burg = document.querySelector(".burg-cont")
const sidebar = document.querySelector(".sidebar")
const container = document.querySelector(".container")
const navbox = document.querySelectorAll(".nav__link")


burg.addEventListener('click', ()=>{
    burg.classList.toggle('close')
    sidebar.classList.toggle('open')
    container.classList.toggle('open')
})


navbox.forEach(nav => {
        nav.addEventListener('click',()=>{
            burg.classList.toggle('close')
            sidebar.classList.toggle('open')
            container.classList.toggle('open')
        })
});
