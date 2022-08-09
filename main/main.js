//hamburger menu
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuList = document.querySelector('.header__nav');
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_activete');
      menuList.classList.toggle('_activete');
   })
}

//scroll up btn

const upBtn = document.getElementById('upbtn')

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      upBtn.style.display = "block";
   } else {
      upBtn.style.display = "none";
   }
}

if (upBtn) {
   upBtn.addEventListener('click', function (e) {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   })
}

//slider

const slides = document.querySelectorAll('.slide'),
   dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
   for (slide of slides) {
      slide.classList.remove('active');
   }
   slides[n].classList.add('active');
}

const activeDot = n => {
   for (dot of dots) {
      dot.classList.remove('active');
   }
   dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
   activeSlide(index);
   activeDot(index);
}

const nextslide = () => {
   if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
   } else {
      index++;
      prepareCurrentSlide(index);
   }
}

const prevslide = () => {
   if (index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
   } else {
      index--;
      prepareCurrentSlide(index);
   }

}

dots.forEach((item, indexDot) => {
   item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
   })
})

window.setInterval(nextslide, 9000);

//sviper

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   slidesPerView: 6,
   spaceBetween: 10,
   // Responsive breakpoints
   breakpoints: {
     // when window width is >= 320px
     320: {
       slidesPerView: 2,
       spaceBetween: 20
     },
     // when window width is >= 480px
     480: {
       slidesPerView: 3,
       spaceBetween: 30
     },
     // when window width is >= 640px
     640: {
       slidesPerView: 4,
       spaceBetween: 40
     }
   }
 });


//Modal Log In

var btnOpen = document.getElementById('logIn');
var modal = document.getElementById('wrapper-modal');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

top = ''; window. scrollTo(0, parseInt(scrollY || '0') * -1);
