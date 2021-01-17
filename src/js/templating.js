// імпортую шаблон
import template from '../templates/gallery-items.hbs';
// імпортую масив даних для шаблону
import foodMenu from '../menu.json';

const markup = template(foodMenu);
const ul = document.querySelector('.menu');
ul.insertAdjacentHTML('beforeend', markup);
