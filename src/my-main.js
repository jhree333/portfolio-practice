// header의 페이지 스크롤시 이벤트
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;
window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

// home의 페이지 스크롤시 이벤트
const home = document.querySelector('.home__contents');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  const opacity = 1 - scrollY / homeHeight;
  home.style.opacity = opacity;
});
