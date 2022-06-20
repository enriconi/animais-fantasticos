import { outsideClick } from './outside-click.js';

export const iniciarDropDownMenu = () => {
  const dropDownMenu = document.querySelector('[data-dropdown]');
  const eventos = ['touchstart', 'click'];

  const handleClick = (event) => {
    event.preventDefault();
    dropDownMenu.classList.add('ativo');

    outsideClick(dropDownMenu, eventos, () => {
      dropDownMenu.classList.remove('ativo');
    });
  };

  eventos.forEach((userEvent) => {
    dropDownMenu.addEventListener(userEvent, handleClick);
  });
};
