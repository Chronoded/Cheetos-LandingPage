// ============= MOSTRAR MENU =============
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// QUITAR EL MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cada que hacemos click en el nav link, se quita el menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//CAMBIO DE BACKGROUND DEL HEADER
function scrollHeader(){
    const header = document.getElementById('header')
    // Cuando el scroll es mayor que 50 del viewport height, se agrega un scroll header class al tag del header
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home_header,.section_tittle, .section_title',{delay: 600})
sr.reveal('.home_footer',{delay: 700})
sr.reveal('.home_img',{delay: 900,origin: 'top'})

sr.reveal('.sponsor_img, .producto_card, .footer_logo, .footer_content',{origin: 'top', interval: 100})
sr.reveal('.info_data, .discount_animate',{origin: 'left', interval: 100})
sr.reveal('.info_img, .discount_img',{origin: 'right'})
sr.reveal('.case_img',{origin: 'top'})
sr.reveal('.case_data')

