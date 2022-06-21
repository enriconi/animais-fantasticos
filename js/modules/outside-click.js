export const outsideClick = (elemento, eventos, callback) => {
  const html = document.documentElement;
  const outside = 'data-outside';

  const handleOutsideClick = (event) => {
    if (!elemento.contains(event.target)) {
      elemento.removeAttribute(outside);

      eventos.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });

      callback();
    }
  };

  if (!elemento.hasAttribute(outside)) {
    eventos.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });

    elemento.setAttribute(outside, '');
  }
};
