let button = document.querySelector('.menu-toggle');
let menu = document.querySelector('#menu-panel');

button.addEventListener('click', function () {
  menu.classList.toggle('open');

  let icon = button.querySelector('img');
  if (menu.classList.contains('open')) {
    icon.src = 'assets/images/icon-close.svg';
  } else {
    icon.src = 'assets/images/icon-menu.svg';
  }
});