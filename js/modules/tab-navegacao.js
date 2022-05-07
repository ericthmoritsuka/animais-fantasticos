// isolei o bloco na função para evitar conflitos entre variáveis etc. É preciso ativar a função ao final.

export default class TabNavegacao {
  constructor(menu, content) {
    // selecionando o que será alterado
    this.tabSelection = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // criando a função para o evento. Essa função vai pegar o index (remover a classe dos demais items) e mudar a classe do elemento com esse index para 'ativo'
  activateTab(index) {
    this.tabContent.forEach((section) => {
      if (section.classList.contains(this.activeClass)) {
        section.classList.toggle(this.activeClass);
      }
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // loop para adicionar o evento para todos os elementos de this.tabSelection
  addTabEvent() {
    this.tabSelection.forEach((item, index) => {
      // colocamos activateTab dentro de uma função genérica porque precisamos chamar a função passando um argumento dentro dela.
      item.addEventListener("click", () => this.activateTab(index));
    });
  }

  init() {
    // só executa o código se houver algo nas listas
    if (this.tabSelection.length && this.tabContent.length) {
      this.activateTab(0);
      this.addTabEvent();
    }
    return this;
  }
}
