const screens = document.querySelector('#screens');
const slides = [...screens.querySelectorAll('.slide')];
const controls = document.querySelector('.gallery-controls');
const status = document.querySelector('#gallery-status');
const motion = matchMedia('(prefers-reduced-motion: reduce)');

function activeIndex() {
  const left = screens.getBoundingClientRect().left;
  return slides.reduce((closest, slide, index) =>
    Math.abs(slide.getBoundingClientRect().left - left) <
      Math.abs(slides[closest].getBoundingClientRect().left - left)
      ? index
      : closest, 0);
}

function updateStatus() {
  status.value = `${activeIndex() + 1} / ${slides.length}`;
}

controls.hidden = false;
screens.tabIndex = 0;
screens.setAttribute('aria-label', 'Capturas de tela. Use as setas para navegar.');
updateStatus();
screens.addEventListener('scroll', updateStatus, { passive: true });
window.addEventListener('resize', updateStatus);

function move(direction) {
  const index = (activeIndex() + direction + slides.length) % slides.length;
  const offset = slides[index].getBoundingClientRect().left -
    screens.getBoundingClientRect().left;
  screens.scrollTo({
    left: screens.scrollLeft + offset,
    behavior: motion.matches ? 'instant' : 'smooth',
  });
}

controls.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-direction]');
  if (button) move(Number(button.dataset.direction));
});

screens.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  move(event.key === 'ArrowRight' ? 1 : -1);
});
