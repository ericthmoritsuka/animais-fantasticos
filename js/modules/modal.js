export default function initModal() {
  const btAbrir = document.querySelector('[data-modal="abrir"]');
  const btFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function cliqueFora(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (btAbrir && btFechar && containerModal) {
    btAbrir.addEventListener("click", toggleModal);
    btFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueFora);
  }
}
