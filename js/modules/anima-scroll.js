export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowShow = window.innerHeight * 0.65;

    const scrollHandler = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - windowShow < 0;
        if (sectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
  }
}
