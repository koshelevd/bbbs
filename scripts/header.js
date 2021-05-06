const headerMenu = document.querySelector('.header__menu-mobile');
const headerBtnBurger = document.querySelector('.header__burger-btn');
const headerAuthorizationMobile = document.querySelector('.header__authorization_screen_mobile');
const headerAuthorizationDesktop = document.querySelector('.header__authorization_screen_desktop');
const headerBtnClose = document.querySelector('.header__close-btn');
const searchBtnMobile = document.querySelector('.header__loupe_screen_mobile');
const searchContainerMobile = document.querySelector('.search_screen_mobile');
const searchBtnDesktop = document.querySelector('.header__loupe_screen_desktop');
const searchContainerDesktop = document.querySelector('.search_screen_desktop');
const searchBlockLoupe = document.querySelector('.header__search-authorization');
const menuDesktop = document.querySelector('.header__menu-desktop');
const popupAuthorization = document.querySelector('.popup_type_authorization');
const popupAuthorizationClose = popupAuthorization.querySelector('.popup__close');
const popupChangeCity = document.querySelector('.popup_type_city');
const changeCity = document.querySelector('.header__change-city');

function openMenu() {
  headerMenu.classList.add('header__menu_visible_on');
  headerAuthorizationMobile.classList.add('header__authorization_visible_on');
  headerBtnBurger.classList.add('header__burger-btn_visible_off');
  headerBtnClose.classList.add('header__close-btn_visible_on');
}

function closeMenu() {
  headerMenu.classList.remove('header__menu_visible_on');
  headerAuthorizationMobile.classList.remove('header__authorization_visible_on');
  headerBtnBurger.classList.remove('header__burger-btn_visible_off');
  headerBtnClose.classList.remove('header__close-btn_visible_on');
}

function handleSearchBtnMobile() {
  searchContainerMobile.classList.toggle('search_visible_on');
}

function handleSearchBtnDesktop() {
  searchContainerDesktop.classList.toggle('search_visible_on');
  menuDesktop.classList.toggle('header__menu-desktop_visible_off');
  searchBlockLoupe.classList.toggle('header__search-authorization_container_opened');
}

function openPopup(elem) {
  elem.classList.add('popup_visible_on');
}

function closePopup(elem) {
  elem.classList.remove('popup_visible_on');
}

headerBtnBurger.addEventListener('click', openMenu);

headerBtnClose.addEventListener('click', closeMenu);

searchBtnMobile.addEventListener('click', handleSearchBtnMobile);

searchBtnDesktop.addEventListener('click', handleSearchBtnDesktop);

headerAuthorizationMobile.addEventListener('click', () => { openPopup(popupAuthorization) });

headerAuthorizationDesktop.addEventListener('click', () => { openPopup(popupAuthorization) });

popupAuthorizationClose.addEventListener('click', () => { openPopup(popupAuthorization) });

changeCity.addEventListener('click', () => { openPopup(popupChangeCity) });