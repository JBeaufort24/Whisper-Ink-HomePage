/*Show & Close Menus*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
/*Show menu*/
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*Hide menu*/
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*Remove Mobile Menu*/
const navLink = document.querySelectorAll('nav-link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n=> n.addEventListener('click', linkAction))

/*Change Header Style*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 
  ? header.classList.add('scroll-header')
  : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*Swiper Works*/
const swiperWork = new Swiper('.work-swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 24,
  grabCursor: true,
  
  pagination: {
    el: '.work-data .swiper-pagination',
    type: 'fraction',
  },
})