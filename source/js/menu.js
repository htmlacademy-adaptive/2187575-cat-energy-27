let navToggle = document.querySelector('.main-header__nav-toggle');
let siteList = document.querySelector('.site-list');

navToggle.onclick = function () {
  if (siteList.classList.contains('site-list--close')){
  siteList.classList.remove('site-list--close');
  } else {
  siteList.classList.add('site-list--close');
 }
};
