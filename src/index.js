// import {fetchUsers, idUser} from './app.js';

// console.log(fetchUsers);
// console.log(idUser);
console.log('qwerty');

import colorCardsTpl from './template/color-cards.hbs';
import colors from './colors.json';
import './css/colorpicker.css';

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  // return colors.map(color => colorCardTpl(color)).join('');
  // return colors.map(colorCardTpl).join('');

   return colorCardsTpl(colors);
}

function onPaletteContainerClick(evt) {
const isColorSwatchEl = evt.target.classList.contains('color-swatch');

   if (!isColorSwatchEl) {
      return;
   }

const swatchEl = evt.target;
const parentColorCard = swatchEl.closest('.color-card');

   removeActiveCardClass();
   addActiveCardClass(parentColorCard);
   setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
   document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
const currentActiveCard = document.querySelector('.color-card.is-active');

   if (currentActiveCard) {
      currentActiveCard.classList.remove('is-active');
   }
}

function addActiveCardClass(card) {
   card.classList.add('is-active');
}
