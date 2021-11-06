'use strict';

const promoInfo = document.querySelector('.promo__info');
const getConsultationButton = promoInfo.querySelector('a');
const maxWidthMobile = window.matchMedia('(max-width: 767px)');
// const accordeonSwitchers = document.querySelectorAll('.accordeon-switch');
// const accordeons = document.querySelectorAll('.accordeon');

if (maxWidthMobile.matches) {
  getConsultationButton.textContent = 'Бесплатная консультация';
}

// $('.questions__item-title').on('click', function() {
//   if ($(this).hasClass("questions__item-title--active")) {
//     $(this).removeClass('questions__item-title--active');
//   } else {
//     $('.questions__item-title').removeClass('questions__item-title--active');
//     $(this).addClass('questions__item-title--active');
//   }
// });

// accordeonSwitchers.addEventListener('click', function (item) {
//   if (item.classList.contains('accordeon-switcher--active')) {
//     item.classList.remove('accordeon-switcher--active');
//   } else {
//     item.classList.add('accordeon-switcher--active');
//   }
// });

// Slider services

const accordeonSwitchers = document.querySelectorAll('.accordeon-switcher');
const accordeons = document.querySelectorAll('.accordeon');

const removeSwitcherActiveClass = () => {
  Array.from(accordeonSwitchers).forEach((item) => {
    item.classList.remove('accordeon-switcher--active');
  });
};

const removeAccordeonActiveClass = () => {
  Array.from(accordeons).forEach((item) => {
    item.classList.remove('accordeon--active');
  });
};

// Array.from(accordeonSwitchers).forEach((item, i) => {
//   item.addEventListener('click', () => {
//     removeSwitcherActiveClass();
//     removeAccordeonActiveClass();
//     accordeonSwitchers[i].classList.add('accordeon-switcher--active');
//     accordeons[i].classList.add('accordeon--active');
//   });
// });

Array.from(accordeonSwitchers).forEach((item, i) => {
  item.addEventListener('click', () => {
    // removeSwitcherActiveClass();
    // removeAccordeonActiveClass();
    if (accordeonSwitchers[i].classList.contains('accordeon-switcher--active')) {
      accordeonSwitchers[i].classList.remove('accordeon-switcher--active');
      accordeons[i].classList.remove('accordeon--active');
    } else {
      removeSwitcherActiveClass();
      removeAccordeonActiveClass();
      accordeonSwitchers[i].classList.add('accordeon-switcher--active');
      accordeons[i].classList.add('accordeon--active');
    }
  });
});

