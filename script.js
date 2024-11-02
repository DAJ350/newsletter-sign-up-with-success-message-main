const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit-btn");
const errorStyles = [...document.getElementsByClassName("error")];
const errorMessage = document.getElementById("error-message");
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const customEmail = document.getElementById("email-value");

function formValidation(e) {
  if (emailInput.value == "") {
    e.preventDefault();
    console.log("No input value");
    errorMessage.innerHTML = "Please enter an email address";
    errorStyles.forEach((element) => (element.style.display = "inline-block"));
    emailInput.style.backgroundColor = "rgba(255, 97, 85, 15%)";
    emailInput.style.borderColor = "var(--vermellion)";
    emailInput.style.color = "var(--vermellion)";
  } else if (!emailInput.value.match(emailPattern)) {
    e.preventDefault();
    console.log("Email format incorrect");
    errorMessage.innerHTML = "Valid email required";
    errorStyles.forEach((element) => (element.style.display = "inline-block"));
    emailInput.style.backgroundColor = "rgba(255, 97, 85, 15%)";
    emailInput.style.borderColor = "var(--vermellion)";
    emailInput.style.color = "var(--vermellion)";
  } else {
    return localStorage.setItem("emailInput", `${emailInput.value}`);
  }
}

emailInput.addEventListener("input", (e) => {
  e.target.style.backgroundColor = "var(--white)";
  e.target.style.borderColor = "var(--grey-25)";
});

submitButton.addEventListener("click", formValidation);
