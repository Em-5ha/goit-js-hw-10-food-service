const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body 
// класс light - theme или dark - theme.
// Выбранная тема должна сохраняться между перезагрузками 
// страницы.Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь 
// поставить свойство checked у чекбокса #theme -switch-toggle в true,
// чтобы ползунок сдвинулся в правильное положение.
import menu from '../menu.json';
import menuTmpl from '../templates/menuTmpl.hbs';

const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('beforeend', menuTmpl(menu));


