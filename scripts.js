// Functionality to open and close the navigation menu
const navToggleBtn = document.querySelector('.nav-toggle');
const header = document.querySelector('.header');

navToggleBtn.addEventListener('click', () => {
  const navIsFixed = Array.from(header.classList).includes('fixed');
  header.classList.toggle('active');
  if (!navIsFixed) {
    header.classList.add('fixed');
  }
});
