// імпортую шаблон
import itemsTemplate from '../templates/gallery-items.hbs';
// імпортую масив даних для шаблону
import menu from '../menu.json';

const markup = itemsTemplate(menu);
const ul = document.querySelector('.menu');
ul.insertAdjacentHTML('beforeend', markup);
