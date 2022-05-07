import outClick from "./outClick.js";

export default function initDropdown() {
  const dropdowns = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }

  dropdowns.forEach((menu) => {
    ["touchstart", "click"].forEach((action) => {
      menu.addEventListener(action, handleClick);
    });
  });
}
