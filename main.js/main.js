/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n// função para ajustar o accordion do FAQ\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.classeAtivo = \"ativo\";\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.classeAtivo);\n    item.nextElementSibling.classList.toggle(this.classeAtivo);\n  }\n\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n\n  init() {\n    if (this.accordionList.length) {\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll(\"[data-numero]\");\r\n\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if (start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n\r\n  let observer;\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      animaNumeros();\r\n      observer.disconnect();\r\n    }\r\n  }\r\n  const target = document.querySelector(\".numeros\");\r\n  observer = new MutationObserver(handleMutation);\r\n  observer.observe(target, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/anima-scroll.js":
/*!************************************!*\
  !*** ./js/modules/anima-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaScroll)\n/* harmony export */ });\nfunction initAnimaScroll() {\r\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\r\n\r\n  if (sections.length) {\r\n    const windowShow = window.innerHeight * 0.65;\r\n\r\n    const scrollHandler = () => {\r\n      sections.forEach((section) => {\r\n        const sectionTop = section.getBoundingClientRect().top;\r\n        const sectionVisible = sectionTop - windowShow < 0;\r\n        if (sectionVisible) {\r\n          section.classList.add(\"ativo\");\r\n        } else if (section.classList.contains(\"ativo\")) {\r\n          section.classList.remove(\"ativo\");\r\n        }\r\n      });\r\n    };\r\n    scrollHandler();\r\n    window.addEventListener(\"scroll\", scrollHandler);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\n/* harmony import */ var _outClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outClick.js */ \"./js/modules/outClick.js\");\n\r\n\r\nfunction initDropdown() {\r\n  const dropdowns = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add(\"ativo\");\r\n    (0,_outClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\", \"touchstart\"], () => {\r\n      this.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  dropdowns.forEach((menu) => {\r\n    [\"touchstart\", \"click\"].forEach((action) => {\r\n      menu.addEventListener(action, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown.js?");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  \r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJSON = await animaisResponse.json();\r\n      const numerosGrid = document.querySelector(\".numeros-grid\");\r\n\r\n      animaisJSON.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n\r\n  fetchAnimais(\"./animaisAPI.json\");\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchAnimais.js?");

/***/ }),

/***/ "./js/modules/fetchBitcoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((response) => response.json())\r\n    .then((btc) => {\r\n      const btcPreco = document.querySelector(\".btc-preco\");\r\n      btcPreco.innerText = (50 / btc.BRL.sell).toFixed(5 );\r\n    })\r\n    .catch((erro) => {\r\n      console.log(Error(erro));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchBitcoin.js?");

/***/ }),

/***/ "./js/modules/horario-funcionamento.js":
/*!*********************************************!*\
  !*** ./js/modules/horario-funcionamento.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\r\n  const horarioAberto =\r\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\r\n\r\n  if (semanaAberto && horarioAberto) {\r\n    funcionamento.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/horario-funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outClick.js */ \"./js/modules/outClick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuBT = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"lista\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  function openMenu() {\r\n    menuBT.classList.toggle(\"ativo\");\r\n    menuList.classList.toggle(\"ativo\");\r\n    (0,_outClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, [\"click\", \"touchStart\"], () => {\r\n      menuList.classList.remove(\"ativo\");\r\n      menuBT.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  if (menuBT) {\r\n    eventos.forEach(() => {\r\n      menuBT.addEventListener(\"click\", openMenu);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(btAbrir, btFechar, containerModal) {\r\n    this.btAbrir = document.querySelector(btAbrir);\r\n    this.btFechar = document.querySelector(btFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueFora = this.cliqueFora.bind(this);\r\n  }\r\n\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  cliqueFora(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.toggleModal();\r\n    }\r\n  }\r\n\r\n  addModalEvent() {\r\n    this.btAbrir.addEventListener(\"click\", this.eventToggleModal);\r\n    this.btFechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.containerModal.addEventListener(\"click\", this.cliqueFora);\r\n  }\r\n\r\n  init() {\r\n    if (this.btAbrir && this.btFechar && this.containerModal) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outClick.js":
/*!********************************!*\
  !*** ./js/modules/outClick.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outClick)\n/* harmony export */ });\nfunction outClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((action) => {\r\n        html.removeEventListener(action, handleOutClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((action) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(action, handleOutClick);\r\n      });\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outClick.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection = (event) => {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  };\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tab-navegacao.js":
/*!*************************************!*\
  !*** ./js/modules/tab-navegacao.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNavegacao)\n/* harmony export */ });\n// isolei o bloco na função para evitar conflitos entre variáveis etc. É preciso ativar a função ao final.\r\n\r\nclass TabNavegacao {\r\n  constructor(menu, content) {\r\n    // selecionando o que será alterado\r\n    this.tabSelection = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  // criando a função para o evento. Essa função vai pegar o index (remover a classe dos demais items) e mudar a classe do elemento com esse index para 'ativo'\r\n  activateTab(index) {\r\n    this.tabContent.forEach((section) => {\r\n      if (section.classList.contains(this.activeClass)) {\r\n        section.classList.toggle(this.activeClass);\r\n      }\r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, direcao);\r\n  }\r\n\r\n  // loop para adicionar o evento para todos os elementos de this.tabSelection\r\n  addTabEvent() {\r\n    this.tabSelection.forEach((item, index) => {\r\n      // colocamos activateTab dentro de uma função genérica porque precisamos chamar a função passando um argumento dentro dela.\r\n      item.addEventListener(\"click\", () => this.activateTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    // só executa o código se houver algo nas listas\r\n    if (this.tabSelection.length && this.tabContent.length) {\r\n      this.activateTab(0);\r\n      this.addTabEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tab-navegacao.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  function criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  function onMouseOver(event) {\r\n    const tooltipBox = criarTooltipBox(this);\r\n    tooltipBox.style.top = `${event.pageY}px`;\r\n    tooltipBox.style.left = `${event.pageX}px`;\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/anima-scroll.js */ \"./js/modules/anima-scroll.js\");\n/* harmony import */ var _modules_tab_navegacao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-navegacao.js */ \"./js/modules/tab-navegacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./js/modules/dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_horario_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/horario-funcionamento.js */ \"./js/modules/horario-funcionamento.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./js/modules/fetchBitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-anime='accordion'] dt\");\r\naccordion.init();\r\n\r\nconst tabNavegacao = new _modules_tab_navegacao_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-tab='menu'] li\", \"[data-tab='content'] section\")\r\ntabNavegacao.init()\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\r\nmodal.init();\r\n\r\n(0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_horario_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;