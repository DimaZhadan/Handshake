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

setInterval(nextslide, 6000);

