const form = document.getElementById("contact-form");
let username = document.querySelector(".username");
let emailId = document.querySelector(".emailId");
let message = document.querySelector(".message");
const emailError = document.querySelector(".error-email");
const messageError = document.querySelector(".error-message");
const copyright = document.querySelector(".copyright");

copyright.textContent += new Date().getFullYear();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const emailIdValue = emailId.value.trim();
  const messageValue = message.value.trim();
  let error = false;

  if (!isValidEmail(emailIdValue)) {
    emailError.textContent = "Invalid Email Address";
    emailError.style.display = "block";
    emailError.style.animation = "error-animate .3s";
    error = true;
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
    emailError.style.animation = "";
  }

  if (messageValue == "") {
    messageError.textContent = "Please Enter something";
    messageError.style.display = "block";
    messageError.style.animation = "error-animate .3s";
    error = true;
  } else {
    messageError.textContent = "";
    messageError.style.display = "none";
    messageError.style.animation = "";
  }

  if (!error) {
    window.open(
      `mailto:ajithdr8311@gmail.com?subject=New Connection from Website | ${
        usernameValue != "" ? usernameValue : emailIdValue
      }&body=${messageValue}`
    );

    username.value = "";
    emailId.value = "";
    message.value = "";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = emailRegex.test(email);
  return isValid;
}
