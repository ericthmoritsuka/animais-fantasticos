import outClick from "./outClick.js";

export default class Dropdown {
  constructor(menus, events) {
    this.dropdowns = document.querySelectorAll(menus);

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = "ativo";
    this.activateDropdown = this.activateDropdown.bind(this);
  }

  activateDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add("ativo");
    outClick(element, this.events, () => {
      element.classList.remove("ativo");
    });
  }

  addDropdownEvent() {
    this.dropdowns.forEach((menu) => {
      ["touchstart", "click"].forEach((action) => {
        menu.addEventListener(action, this.activateDropdown);
      });
    });
  }

  init() {
    if (this.dropdowns.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
