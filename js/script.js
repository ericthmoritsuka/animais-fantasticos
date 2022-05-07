import SmoothScroll from "./modules/scroll-suave.js";
import initAnimaScroll from "./modules/anima-scroll.js";
import TabNavegacao from "./modules/tab-navegacao.js";
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

const tabNavegacao = new TabNavegacao("[data-tab='menu'] li", "[data-tab='content'] section")
tabNavegacao.init()

initModal();
initDropdown();
initAnimaScroll();
initTooltip();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
