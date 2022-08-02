const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuList = document.querySelector('.header__nav');
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_activete');
      menuList.classList.toggle('_activete');
   })
}