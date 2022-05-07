import outClick from "./outClick.js";

export default function initMenuMobile() {
  const menuBT = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="lista"]');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuBT.classList.toggle("ativo");
    menuList.classList.toggle("ativo");
    outClick(menuList, ["click", "touchStart"], () => {
      menuList.classList.remove("ativo");
      menuBT.classList.remove("ativo");
    });
  }

  if (menuBT) {
    eventos.forEach(() => {
      menuBT.addEventListener("click", openMenu);
    });
  }
}
