
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-btn--open'),
    closeMenuBtn: document.querySelector('.menu-btn--close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    contact: document.querySelector('[data-contacts]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.contact.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();