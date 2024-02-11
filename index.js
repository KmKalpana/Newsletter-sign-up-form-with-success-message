// @ts-nocheck
const form = document.getElementById("form");
const gmailAddress = document.getElementById("email-address");
const errorMessage = document.querySelector(".error-message");
const successContainer = document.querySelector(".success-container");
const Container = document.querySelector(".container");
const dismissButton = document.getElementById("dismiss-button");
const input = document.querySelector("input");
const mailNameSpan = document.getElementById("mail-name");
form.addEventListener("submit", (e) => {
  let gmail = gmailAddress.value;
  console.log(gmail);
  e.preventDefault();

  if (!gmail || !gmail.includes("@") || !gmail.includes(".com")) {
    errorMessage.style.display = "block";
    gmailAddress.classList.add("error");
    input.style.border = "1px solid red";
    input.style.color = "red"; 
  } else {
     mailNameSpan.textContent = gmail;
    successContainer.style.display = "block";
    Container.style.display = "none";
  }
});

dismissButton.addEventListener("click", () => {
  Container.style.display = "flex";
  successContainer.style.display = "none";
  gmailAddress.classList.remove("error");
  input.style.border = ""; 
  input.style.color = ""; 
});
