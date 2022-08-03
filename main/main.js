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