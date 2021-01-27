export default function displayMessage(messageType : string, message : string, targetElement) {
  const element = document.querySelector(targetElement);

  element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
