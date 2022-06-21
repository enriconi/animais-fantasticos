export const iniciarAnimaNumeros = () => {
  const numeros = document.querySelectorAll('[data-numero]');

  const animaNumeros = () => {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let inicio = 0;

      const timer = setInterval(() => {
        inicio = inicio + incremento;
        numero.innerText = inicio;

        if (inicio > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  };

  const handleMutacao = (mutacao) => {
    if (mutacao[0].target.classList.contains('ativo')) {
      observacao.disconnect();
      animaNumeros();
    }
  };

  const secaoNumeros = document.querySelector('.numeros');
  const observacao = new MutationObserver(handleMutacao);

  observacao.observe(secaoNumeros, { attributes: true });
};
