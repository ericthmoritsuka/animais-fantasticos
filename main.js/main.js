(()=>{"use strict";function t(t,e,o){const i=document.documentElement,n="data-outside";function s(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{i.removeEventListener(t,s)})),o())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,s)}))})),t.setAttribute(n,""))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection=t=>{t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)};addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.classeAtivo="ativo"}toggleAccordion(t){t.classList.toggle(this.classeAtivo),t.nextElementSibling.classList.toggle(this.classeAtivo)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}("[data-anime='accordion'] dt").init(),new class{constructor(t,e){this.tabSelection=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activateTab(t){this.tabContent.forEach((t=>{t.classList.contains(this.activeClass)&&t.classList.toggle(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabEvent(){this.tabSelection.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activateTab(e)))}))}init(){return this.tabSelection.length&&this.tabContent.length&&(this.activateTab(0),this.addTabEvent()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t,e,o){this.btAbrir=document.querySelector(t),this.btFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueFora=this.cliqueFora.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueFora(t){t.target===this.containerModal&&this.toggleModal()}addModalEvent(){this.btAbrir.addEventListener("click",this.eventToggleModal),this.btFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueFora)}init(){return this.btAbrir&&this.btFechar&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}criarTooltipBox(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),function(){function e(e){e.preventDefault(),this.classList.add("ativo"),t(this,["click","touchstart"],(()=>{this.classList.remove("ativo")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((o=>{t.addEventListener(o,e)}))}))}(),function(){const t=document.querySelectorAll("[data-anime='scroll']");if(t.length){const e=.65*window.innerHeight,o=()=>{t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))};o(),window.addEventListener("scroll",o)}}(),function(){const e=document.querySelector('[data-menu="button"]'),o=document.querySelector('[data-menu="lista"]');function i(){e.classList.toggle("ativo"),o.classList.toggle("ativo"),t(o,["click","touchStart"],(()=>{o.classList.remove("ativo"),e.classList.remove("ativo")}))}e&&["click","touchstart"].forEach((()=>{e.addEventListener("click",i)}))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),i=new Date,n=i.getDay(),s=i.getHours(),a=-1!==e.indexOf(n),c=s>=o[0]&&s<o[1];a&&c&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./animaisAPI.json"),e=await t.json(),o=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)})),function(){let t;const e=document.querySelector(".numeros");t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,o=Math.floor(e/100);let i=0;const n=setInterval((()=>{i+=o,t.innerText=i,i>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())})),t.disconnect())})),t.observe(e,{attributes:!0})}()}catch(t){console.log(t)}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(50/t.BRL.sell).toFixed(5)})).catch((t=>{console.log(Error(t))}))})();