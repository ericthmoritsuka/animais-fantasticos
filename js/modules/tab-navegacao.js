// isolei o bloco na função para evitar conflitos entre variáveis etc. É preciso ativar a função ao final.

export default function initTabNavegacao() {
  // selecionando o que será alterado
  const classeAtivo = "ativo";
  const tabSelection = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  tabContent[0].classList.add(classeAtivo);

  // só executa o código se houver algo nas listas
  if (tabSelection.length && tabContent.length) {
    // criando a função para o evento. Essa função vai pegar o index (remover a classe dos demais items) e mudar a classe do elemento com esse index para 'ativo'
    const activateTab = (index) => {
      tabContent.forEach((section) => {
        if (section.classList.contains(classeAtivo)) {
          section.classList.toggle(classeAtivo);
        }
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(classeAtivo, direcao);
    };

    // loop para adicionar o evento para todos os elementos de tabSelection
    tabSelection.forEach((item, index) => {
      // colocamos activateTab dentro de uma função genérica porque precisamos chamar a função passando um argumento dentro dela.
      item.addEventListener("click", () => {
        activateTab(index);
      });
    });
  }
}
