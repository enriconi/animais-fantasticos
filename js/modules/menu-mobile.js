import { outsideClick } from './outside-click.js';

export const iniciarMenuMobile = () => {
  const botaoMenu = document.querySelector('[data-menu="button"]');
  const listaMenu = document.querySelector('[data-menu="lista"]');
  const eventos = ['touchstart', 'click'];

  const abrirMenu = () => {
    listaMenu.classList.add('ativo');
    botaoMenu.classList.add('ativo');

    outsideClick(listaMenu, eventos, () => {
      listaMenu.classList.remove('ativo');
      botaoMenu.classList.remove('ativo');
    });
  };

  eventos.forEach((userEvent) => {
    botaoMenu.addEventListener(userEvent, abrirMenu);
  });
};
