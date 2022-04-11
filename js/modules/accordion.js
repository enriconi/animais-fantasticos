export const iniciarAccordionList = () => {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );
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
