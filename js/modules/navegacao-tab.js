export const iniciarNavegacaoPorTab = () => {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabConteudo = document.querySelectorAll(
    '[data-tab="conteudo"] section',
  );
  const classeAtivo = 'ativo';

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add(classeAtivo);
    const ativarTab = (index) => {
      tabConteudo.forEach((conteudo) => {
        conteudo.classList.remove(classeAtivo);
      });
      const direcao = tabConteudo[index].dataset.anime;
      tabConteudo[index].classList.add(classeAtivo, direcao);
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativarTab(index);
      });
    });
  }
};
