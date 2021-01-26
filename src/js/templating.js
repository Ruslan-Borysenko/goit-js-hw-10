import template from '../templates/gallery-items.hbs';
import foodMenu from '../menu.json';
import refs from './refs';

const markup = template(foodMenu);
refs.ul.insertAdjacentHTML('beforeend', markup);
