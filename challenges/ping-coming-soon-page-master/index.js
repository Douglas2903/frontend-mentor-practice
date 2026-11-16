const form = document.querySelector("form.subscribe");
const userEmail = document.getElementById("userEmail");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  const errorMessage = userEmail.nextElementSibling;
  event.preventDefault();
  if (userEmail.value.trim() === "") {
    errorMessage.textContent = `Whoops! It looks like you forgot to add your email`;
    userEmail.setAttribute('aria-invalid', "true");
  } else if (!emailPattern.test(userEmail.value.trim())) {
    errorMessage.textContent = `Please provide a valid email address`;
    userEmail.setAttribute('aria-invalid', "true");
  }else{
    errorMessage.textContent = ``;
    userEmail.removeAttribute('aria-invalid');
  }
});
