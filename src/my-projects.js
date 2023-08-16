'use strict';

const filterButton = document.querySelectorAll('.category');
const projects = document.querySelectorAll('.project');

filterButton.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-category');

    filterButton.forEach((button) => {
      button.classList.remove('category--selected');
    });
    button.classList.add('category--selected');

    projects.forEach((project) => {
      const projectCategory = project.getAttribute('data-category');

      if (selectedCategory === 'all' || selectedCategory === projectCategory) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
