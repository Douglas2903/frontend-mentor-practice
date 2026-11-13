const form = document.querySelector("form.form");
const userInputs = document.querySelectorAll("input.form__input");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  userInputs.forEach((input) => {
    const errorMessage = input.nextElementSibling;
    if (input.value.trim() === "") {
      input.setAttribute("aria-invalid", "true");
      errorMessage.textContent = `${input.placeholder} cannot be empty`;
    }else if(input.type === "email" && !emailPattern.test(input.value.trim())){
      input.setAttribute("aria-invalid", "true");
      errorMessage.textContent = `Looks like this is not an email`;
    } else {
      input.removeAttribute("aria-invalid");
      errorMessage.textContent = "";
    }
  });
});
