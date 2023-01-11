let navToggle = document.querySelector('.main-header__nav-toggle');
let siteList = document.querySelector('.site-list');

siteList.classList.add('site-list--close');
siteList.classList.add('site-list--active');
navToggle.classList.add('main-header__nav-toggle--active');

navToggle.onclick = function () {
  if (siteList.classList.contains('site-list--close')){
    siteList.classList.remove('site-list--close');
  } else {
    siteList.classList.add('site-list--close');
  }
  navToggle.classList.toggle('nav-toogle--close');
  navToggle.classList.toggle('nav-toogle--open');
};
