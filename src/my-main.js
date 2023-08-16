const header = document.querySelector('.header');
const headerHeight = header.clientHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});
