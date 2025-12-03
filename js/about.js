//About us form
let contactUsForm = document.getElementById("contact-us-form");

contactUsForm.addEventListener("submit", () => submitNewsLetter());

function submitNewsLetter() {
  alert(`Thank you for your message, ${contactUsForm[0].value}`);
}
