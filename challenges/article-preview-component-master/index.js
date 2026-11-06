const shareButton = document.querySelector(".share-button");
const sharePanel = document.getElementById("share-panel");

shareButton.addEventListener("click", () => {
  const isExpanded = shareButton.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    shareButton.setAttribute("aria-expanded", "false");
    sharePanel.setAttribute("hidden", "");
  } else {
    shareButton.setAttribute("aria-expanded", "true");
    sharePanel.removeAttribute("hidden");
  }
});
