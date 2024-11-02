const emailInput = localStorage.getItem("emailInput");
const emailContainer = document.getElementById("email-value");

emailContainer.textContent = `${emailInput}`;