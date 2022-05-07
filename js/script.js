import SmoothScroll from "./modules/scroll-suave.js";
import initAnimaScroll from "./modules/anima-scroll.js";
import initTabNavegacao from "./modules/tab-navegacao.js";
import Accordion from "./modules/accordion.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/horario-funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initModal();
initDropdown();
initTabNavegacao();
initAnimaScroll();
initTooltip();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
