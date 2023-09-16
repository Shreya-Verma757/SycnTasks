// Change background header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Swiper
let swiperProducts = new Swiper(".products__container",{
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    SlidesPerView: 'auto',
    loop: true,

    navigation:{
        nextKl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      
        1024:{
           
            spaceBetween:72,
        },
    },
});

// scroll
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop  = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*='  + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const scrollUp =() =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
               : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
})

sr.reveal('.home__data, .products__container, .footer__container, .footer__info')
sr.reveal('.home__images',{delay: 600, origin: 'bottom'})
sr.reveal('.new__card, brand__img',{interval: 100})
sr.reveal('.collection__explore:nth-child(1)',{origin: 'right'})
sr.reveal('.collection__explore:nth-child(2)',{origin: 'left'})