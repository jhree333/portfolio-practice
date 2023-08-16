// 스크롤시 해당 nav의 아이템이 해당 섹션에 도달하면 active 클래스가 추가되는 이벤트
const navItems = document.querySelectorAll('.header__menu__item');
const sections = document.querySelectorAll('.section');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8,
};

const observer = new IntersectionObserver(callback, options);

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      const targetId = entry.target.getAttribute('id');
      navItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${targetId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
