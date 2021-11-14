'use strict';

const accordeonSwitchers = document.querySelectorAll('.accordeon-trigger');
const accordeons = document.querySelectorAll('.accordeon-item');
const modal = document.querySelector('.modal');
const btnShowModal = document.querySelector('.header button');
const btnCloseModal = modal.querySelector('.modal__btn-close');
const pageBody = document.querySelector('.page-body');
const modalUserName = modal.querySelector('#name-modal');
const modalUserPhone = modal.querySelector('#phone-modal');
const modalUserQuestion = modal.querySelector('#question-modal');
const feedbackBlock = document.querySelector('.feedback');
const modalForm = modal.querySelector('.modal__form');
const feedbackForm = document.querySelector('.feedback__form');
const feedbackUserName = feedbackForm.querySelector('#name');
const feedbackUserPhone = feedbackForm.querySelector('#phone');
const feedbackUserQuestion = feedbackForm.querySelector('#question');
const consultationBtn = document.querySelector('.promo__info a');
const navTitle = document.querySelector('.nav__title');
const navList = document.querySelector('.nav-list');
const companyContactsTitle = document.querySelector('.company-contacts__title');
const companyContactsList = document.querySelector('.company-contacts__list');

let isStorageSupport = true;

const formStorage = {};

// Scroll to feedback block

consultationBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackBlock.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Modal handler

const onModalEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    hideModal();
  }
};

const onModalClick = (evt) => {
  if (evt.target.classList.contains('modal')) {
    hideModal();
  }
};

const showModal = () => {
  pageBody.classList.add('page-body--show-modal');
  modal.classList.add('modal--show');
  modalUserName.focus();
  window.addEventListener('keydown', onModalEscKeydown);
  window.addEventListener('click', onModalClick);
};

function hideModal() {
  pageBody.classList.remove('page-body--show-modal');
  modal.classList.remove('modal--show');
  window.removeEventListener('keydown', onModalEscKeydown);
  window.removeEventListener('click', onModalClick);
}

btnShowModal.addEventListener('click', (evt) => {
  evt.stopPropagation();
  showModal();
});

btnCloseModal.addEventListener('click', () => {
  hideModal();
});

// Local Storage

try {
  formStorage.name = localStorage.getItem('name');
  formStorage.phone = localStorage.getItem('phone');
  formStorage.question = localStorage.getItem('question');
} catch (err) {
  isStorageSupport = false;
}

const getStorageValue = (storageValue, input) => {
  if (storageValue) {
    input.value = storageValue;
  }
};

modalUserName.addEventListener('focus', (evt) => {
  evt.preventDefault();
  getStorageValue(formStorage.name, modalUserName);
});

modalUserPhone.addEventListener('focus', (evt) => {
  evt.preventDefault();
  getStorageValue(formStorage.phone, modalUserPhone);
});

modalUserQuestion.addEventListener('focus', (evt) => {
  evt.preventDefault();
  getStorageValue(formStorage.question, modalUserQuestion);
});

feedbackUserName.addEventListener('focus', (evt) => {
  evt.preventDefault();
  getStorageValue(formStorage.name, feedbackUserName);
});

feedbackUserPhone.addEventListener('focus', (evt) => {
  evt.preventDefault();
  getStorageValue(formStorage.phone, feedbackUserPhone);
});

feedbackUserQuestion.addEventListener('focus', (evt) => {
  evt.preventDefault();
  getStorageValue(formStorage.question, feedbackUserQuestion);
});

modalForm.addEventListener('submit', function (evt) {
  if (!modalUserName.value || !modalUserPhone.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', modalUserName.value);
      localStorage.setItem('phone', modalUserPhone.value);
      localStorage.setItem('question', modalUserQuestion.value);
    }
  }
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackUserName.value || !feedbackUserPhone.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', feedbackUserName.value);
      localStorage.setItem('phone', feedbackUserPhone.value);
      localStorage.setItem('question', feedbackUserQuestion.value);
    }
  }
});

// Accordeon

navTitle.classList.add('accordeon-switcher');
navList.classList.add('accordeon');
companyContactsTitle.classList.add('accordeon-switcher');
companyContactsList.classList.add('accordeon');

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

// Phone mask

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

iMask(modalUserPhone, maskOptions);
iMask(feedbackUserPhone, maskOptions);
