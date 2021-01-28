

export default function displayMessage(messageType: string, message : string, targetElement : string) {
  const element = document.querySelector(targetElement) as HTMLElement;

  element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
