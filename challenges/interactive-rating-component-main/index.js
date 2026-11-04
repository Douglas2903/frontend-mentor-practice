
const form = document.querySelector('form.rate-card__form');
const rateCard = document.querySelector('section.rate-card');
const thankCard = document.querySelector('section.thank-card');
const userEvaluation = document.getElementById('userEvaluation');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    userEvaluation.textContent = document.querySelector('input[type="radio"]:checked').value;
    rateCard.setAttribute('hidden', '');
    thankCard.removeAttribute('hidden');
});