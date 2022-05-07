export default class Modal {
  constructor(btAbrir, btFechar, containerModal) {
    this.btAbrir = document.querySelector(btAbrir);
    this.btFechar = document.querySelector(btFechar);
    this.containerModal = document.querySelector(containerModal);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueFora(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvent() {
    this.btAbrir.addEventListener("click", this.eventToggleModal);
    this.btFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueFora);
  }

  init() {
    if (this.btAbrir && this.btFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
