export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowShow = window.innerHeight * 0.65;
    this.scrollHandler = this.scrollHandler.bind(this)
  }

  scrollHandler = () => {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - this.windowShow < 0;
      if (sectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  };

  init(){
    this.scrollHandler();
    window.addEventListener("scroll", this.scrollHandler);
    return this
  }
}
