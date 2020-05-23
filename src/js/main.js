const slider = require('./plugins/slick');
const player = require('./plugins/video-player');

window.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.burger-menu-btn');
  const content = document.querySelector('.navigation__wrap');
  const links = document.querySelectorAll('.navigation__link');

  const toggleDispaly = (trigger, content) => {
    trigger.classList.toggle('burger-menu-btn--active');
    content.classList.toggle('navigation__wrap--active');
  };

  trigger.addEventListener('click', (e) => {
    toggleDispaly(trigger, content)
  });

  links.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      toggleDispaly(trigger, content)
    })
  });

  slider();
  player();
});