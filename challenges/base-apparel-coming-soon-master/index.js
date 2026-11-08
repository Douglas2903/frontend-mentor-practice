const form = document.querySelector(".signup");
const input = document.querySelector(".signup__input");
const errorText = document.querySelector(".signup__error");
 
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = input.value;
 
  if (email === "") {
    errorText.textContent = "Please provide an email address";
    input.setAttribute("aria-invalid", "true");
  } else if (input.checkValidity() === false) {
    errorText.textContent = "Please provide a valid email";
    input.setAttribute("aria-invalid", "true");
  } else {
    errorText.textContent = "";
    input.removeAttribute("aria-invalid");
  }
});