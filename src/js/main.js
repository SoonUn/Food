import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import forms from './modules/forms';
import cards from './modules/cards';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
        
      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 10000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-01-10');
    forms('form', modalTimerId);
    cards();
    slider({
      container: '.offer__slider',
      slide: '.offer__slide',
      prevArrow: '.offer__slider-prev',
      nextArrow: '.offer__slider-next',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner'
    });
    calc();

  });