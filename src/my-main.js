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

// home의 페이지 절반정보 스크롤시 arrow button 보이는 이벤트
const homeHeightHalf = homeHeight / 2;
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeightHalf) {
    arrowUp.classList.add('arrow-up--visible');
  } else {
    arrowUp.classList.remove('arrow-up--visible');
  }
});

// 모바일 버튼 클릭시 메뉴가 나오는 이벤트
const mobileButton = document.querySelector('.header__mobile__menu');
const headerMenu = document.querySelector('.header__menu');
mobileButton.addEventListener('click', () => {
  headerMenu.classList.toggle('header__menu--visible');
});
headerMenu.addEventListener('click', () => {
  headerMenu.classList.remove('header__menu--visible');
});

// arrow 버튼을 클릭하면 부드럽게 해당 섹션으로 이동하는 이벤트
arrowUp.addEventListener('click', (event) => {
  event.preventDefault();
  const targetTop = event.target.getAttribute('href');
  window.scrollTo({
    top: targetTop,
    behavior: 'smooth',
  });
});
