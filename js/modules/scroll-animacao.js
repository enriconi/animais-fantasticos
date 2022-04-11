export const iniciarScrollSecoes = () => {
  const secoes = document.querySelectorAll('[data-anime="scroll"]');

  if (secoes.length) {
    const metadeTela = window.innerHeight * 0.7;

    const animarScroll = () => {
      secoes.forEach((secao) => {
        const topoSecao = secao.getBoundingClientRect().top;
        const ehSecaoVisivel = topoSecao - metadeTela < 0;
        if (ehSecaoVisivel) secao.classList.add('ativo');
      });
    };

    animarScroll();

    window.addEventListener('scroll', animarScroll);
  }
};
