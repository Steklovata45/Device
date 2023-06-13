//popover
const popover = document.querySelector('.nav__popover')
const busketNav = document.querySelector('.nav__link__busket');

busketNav.addEventListener('click', () => {
  if (popover.classList.contains('hidden')) {
    popover.classList.remove('hidden');
  } else {
    popover.classList.add('hidden');
  }
});

//main page catalog
const catalogLink = document.querySelector('.menu__link-catalog');
const catalogList = document.querySelector('.product__list');
const catalogListButton = catalogLink.querySelector('.menu__link-button');

catalogLink.addEventListener('click', () => {
  if (catalogList.classList.contains('hidden')) {
    catalogList.classList.remove('hidden');
    catalogListButton.classList.remove('menu__link-button--open')
    catalogListButton.classList.add('menu__link-button--close');
  } else {
    catalogList.classList.add('hidden');
    catalogListButton.classList.remove('menu__link-button--close')
    catalogListButton.classList.add('menu__link-button--open');
  }
});

//modal

const modalDelivery = document.querySelector('.modal__container');
const modalCloseButton = modalDelivery.querySelector('.modal__close__button');
const modalOpenButton = document.querySelector('.delivery')

modalCloseButton.addEventListener('click', () => {
  modalDelivery.classList.add('modal__container--close');
});

modalOpenButton.addEventListener('click', () => {
  modalDelivery.classList.remove('modal__container--close');
});


