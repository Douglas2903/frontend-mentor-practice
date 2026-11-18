const menuButton = document.querySelector("button.menu-toggle");
const imgButton = document.querySelector("img.menu-toggle__icon");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", (!isOpen));
  imgButton.src = !isOpen ? "assets/images/icon-menu-close.svg" : "assets/images/icon-menu.svg"; 
});
