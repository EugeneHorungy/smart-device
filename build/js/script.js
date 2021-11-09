'use strict';

const promoInfo = document.querySelector('.promo__info');
const getConsultationButton = promoInfo.querySelector('a');
const maxWidthMobile = window.matchMedia('(max-width: 767px)');
const accordeonSwitchers = document.querySelectorAll('.accordeon-switcher');
const accordeons = document.querySelectorAll('.accordeon');

if (maxWidthMobile.matches) {
  getConsultationButton.textContent = 'Бесплатная консультация';
}

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

Array.from(accordeonSwitchers).forEach((item, i) => {
  item.addEventListener('click', () => {
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

