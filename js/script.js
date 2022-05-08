import SmoothScroll from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import TabNavegacao from "./modules/tab-navegacao.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import Dropdown from "./modules/dropdown.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/horario-funcionamento.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import SlideNav from "./modules/slide.js";

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const scrollSuave = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNavegacao = new TabNavegacao(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNavegacao.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const dropdown = new Dropdown("[data-dropdown]");
dropdown.init();

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="lista"]'
);
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("./animaisAPI.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
