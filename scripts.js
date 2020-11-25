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

// Fucntionality to fix the navbar when scrolled
const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const handleScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
};

document.addEventListener('scroll', handleScroll, { passive: true });

// Functionality to close the navbar when a nav link is clicked
const closeNavbar = (e) => {
  // Checks if an acnhor tag is clicked
  if (e.target.tagName.toLowerCase() !== 'a') return;
  header.classList.remove('active');
};

document.querySelector('.nav-menu').addEventListener('click', closeNavbar);
