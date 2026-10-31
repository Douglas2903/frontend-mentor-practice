
const questionButtons = document.querySelectorAll('button.question-button');

questionButtons.forEach((button) => {
    let isOpen = false;
    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    const icon = button.querySelector('img');

    button.addEventListener("click", () => {
        isOpen = !isOpen;
        button.setAttribute("aria-expanded", String(isOpen));
        icon.src = isOpen ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg';
        answer.style.display = isOpen ? "block" : "none";
    });
});