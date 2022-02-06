const iniciarNavegacaoPorTab = () => {
  const tabMenu = document.querySelectorAll('.js-tab-menu li');
  const tabConteudo = document.querySelectorAll('.js-tab-conteudo section');
  const classeAtivo = 'ativo';

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add(classeAtivo);
    const ativarTab = (index) => {
      tabConteudo.forEach((conteudo) => {
        conteudo.classList.remove(classeAtivo);
      });
      tabConteudo[index].classList.add(classeAtivo);
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativarTab(index);
      });
    });
  }
};

iniciarNavegacaoPorTab();

const iniciarAccordionList = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const classeAtivo = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(classeAtivo);
    accordionList[0].nextElementSibling.classList.add(classeAtivo);

    const ativarAccordion = (event) => {
      event.currentTarget.classList.toggle(classeAtivo);
      event.currentTarget.nextElementSibling.classList.toggle(classeAtivo);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', ativarAccordion);
    });
  }
};

iniciarAccordionList();

const iniciarScrollSuave = () => {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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

iniciarScrollSuave();

const iniciarScrollSecoes = () => {
  const secoes = document.querySelectorAll('.js-scroll');

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

iniciarScrollSecoes();
