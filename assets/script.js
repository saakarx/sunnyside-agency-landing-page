const navbarToggleButton = document.querySelector('.navbar-button__toggle');
const navbarLinksContainer = document.querySelector('.navbar-links__container');

const handleNavbarToggle = () => {
  navbarLinksContainer.classList.toggle('show');
  !navbarLinksContainer.classList.contains('show')
    ? navbarToggleButton.classList.add('collapsed')
    : navbarToggleButton.classList.remove('collapsed');
};

navbarToggleButton.addEventListener('click', handleNavbarToggle);
