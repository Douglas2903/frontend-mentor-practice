
const sidebarPanel = document.getElementById('sidebar-panel');
const menuButton = document.querySelector('button.menu-button');
const menuIcon = menuButton.querySelector('img');

function setMenuOpen(isOpen){
    sidebarPanel.style.display = isOpen ? 'flex' : 'none';
    menuIcon.src = isOpen ? 'assets/images/icon-close.svg' : 'assets/images/icon-menu.svg';
    menuButton.setAttribute('aria-expanded', String(isOpen));
}

let isOpen = false;

menuButton.addEventListener("click", () => {
    isOpen = !isOpen;
    setMenuOpen(isOpen);
});