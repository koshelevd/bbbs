const headerMenu = document.querySelector('.header__menu-mobile');
const headerBtnBurger = document.querySelector('.header__burger-btn');
const headerAuthorization = document.querySelector('.header__authorization');
const headerBtnClose = document.querySelector('.header__close-btn');
const searchBtn = document.querySelector('.header__loupe');
const searchContainer = document.querySelector('.header__search');

function openMenu() {
  headerMenu.classList.add('header__menu_visible_on');
  headerAuthorization.classList.add('header__authorization_visible_on');
  headerBtnBurger.classList.add('header__burger-btn_visible_off');
  headerBtnClose.classList.add('header__close-btn_visible_on');
}

function closeMenu() {
  headerMenu.classList.remove('header__menu_visible_on');
  headerAuthorization.classList.remove('header__authorization_visible_on');
  headerBtnBurger.classList.remove('header__burger-btn_visible_off');
  headerBtnClose.classList.remove('header__close-btn_visible_on');
}

function handleSearchBtn() {
  searchContainer.classList.toggle('header__search_visible_on');
}

headerBtnBurger.addEventListener('click', openMenu);

headerBtnClose.addEventListener('click', closeMenu);

searchBtn.addEventListener('click', handleSearchBtn);