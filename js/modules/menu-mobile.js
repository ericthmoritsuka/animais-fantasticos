import outClick from "./outClick.js";

export default class MenuMobile {
  constructor(menuBT, menuList, events) {
    this.menuBT = document.querySelector(menuBT);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "ativo";
    if (events === undefined) {
      this.events = ["click", "touchstart"];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuBT.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);
    outClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBT.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach(() => {
      this.menuBT.addEventListener("click", this.openMenu);
    });
  }

  init() {
    if (this.menuBT && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
