const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

import menu from '../menu.json';
import menuTmpl from '../templates/menuTmpl.hbs';

const refs = {
  bodyEl : document.querySelector('body'),
  themeChange : document.querySelector('#theme-switch-toggle'),
};
const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('beforeend', menuTmpl(menu));
refs.themeChange.addEventListener('change', onCheckboxClick);

actualTheme();

function onCheckboxClick(evt) {
  const themeCheked = evt.target.checked;
  themeSwitch(themeCheked);
  localStorage.setItem('theme-id', themeCheked);
}

function themeSwitch (check){
  if (check) refs.bodyEl.classList.add(`${Theme.DARK}`);
  else {
    refs.bodyEl.classList.add(`${Theme.LIGHT}`),
    refs.bodyEl.classList.remove(`${Theme.DARK}`)
  }
}

function actualTheme() {
  const checker = localStorage.getItem('theme-id');
  if (checker === 'true'){
    refs.themeChange.checked = true;
    refs.bodyEl.classList.add(`${Theme.DARK}`);}
}