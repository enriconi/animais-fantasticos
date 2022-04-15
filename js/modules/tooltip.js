export const iniciarTooltip = () => {
  const tooltip = document.querySelector('[data-tooltip]');

  const onMouseOver = () => {
    const tooltipBox = criarTooltipBox(tooltip);

    const onMouseLeave = () => {
      tooltipBox.remove();
      tooltip.removeEventListener('mouseleave', onMouseLeave);
      tooltip.removeEventListener('mousemove', onMouseMove);
    };
    tooltip.addEventListener('mouseleave', onMouseLeave);

    const onMouseMove = (event) => {
      tooltipBox.style.top = event.pageY + 20 + 'px';
      tooltipBox.style.left = event.pageX + 20 + 'px';
    };
    tooltip.addEventListener('mousemove', onMouseMove);
  };
  tooltip.addEventListener('mouseover', onMouseOver);

  const criarTooltipBox = (element) => {
    const tooltipBox = document.createElement('div');
    const texto = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);

    return tooltipBox;
  };
};
