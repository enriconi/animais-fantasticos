export const iniciarScrollSuave = () => {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

  const scrollParaSecao = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const secao = document.querySelector(href);
    const topoSecao = secao.offsetTop;

    window.scrollTo({
      top: topoSecao,
      behavior: 'smooth',
    });
  };

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollParaSecao);
  });
};
