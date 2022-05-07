(()=>{"use strict";function t(t,e,s){const i=document.documentElement,o="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((t=>{i.removeEventListener(t,n)})),s())}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,n)}))})),t.setAttribute(o,""))}class e{constructor(t,e,s){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=s,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,s=Math.floor(e/100);let i=0;const o=setInterval((()=>{i+=s,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>{this.constructor.incrementarNumero(t)}))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.animaNumeros(),this.observer.disconnect())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowShow=.6*window.innerHeight,this.checkDistance=function(t,e){let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{t(...e),s=null}),100)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e)-this.windowShow}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anime='scroll']").init(),new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection=t=>{t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)};addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.classeAtivo="ativo"}toggleAccordion(t){t.classList.toggle(this.classeAtivo),t.nextElementSibling.classList.toggle(this.classeAtivo)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}("[data-anime='accordion'] dt").init(),new class{constructor(t,e){this.tabSelection=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activateTab(t){this.tabContent.forEach((t=>{t.classList.contains(this.activeClass)&&t.classList.toggle(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabEvent(){this.tabSelection.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activateTab(e)))}))}init(){return this.tabSelection.length&&this.tabContent.length&&(this.activateTab(0),this.addTabEvent()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t,e,s){this.btAbrir=document.querySelector(t),this.btFechar=document.querySelector(e),this.containerModal=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueFora=this.cliqueFora.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueFora(t){t.target===this.containerModal&&this.toggleModal()}addModalEvent(){this.btAbrir.addEventListener("click",this.eventToggleModal),this.btFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueFora)}init(){return this.btAbrir&&this.btFechar&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}criarTooltipBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=s,document.body.appendChild(e),this.tooltipBox=e}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),new class{constructor(t,e){this.dropdowns=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="ativo",this.activateDropdown=this.activateDropdown.bind(this)}activateDropdown(e){e.preventDefault();const s=e.currentTarget;s.classList.add("ativo"),t(s,this.events,(()=>{s.classList.remove("ativo")}))}addDropdownEvent(){this.dropdowns.forEach((t=>{["touchstart","click"].forEach((e=>{t.addEventListener(e,this.activateDropdown)}))}))}init(){return this.dropdowns.length&&this.addDropdownEvent(),this}}("[data-dropdown]").init(),new class{constructor(t,e,s){this.menuBT=document.querySelector(t),this.menuList=document.querySelector(e),this.activeClass="ativo",this.events=void 0===s?["click","touchstart"]:s,this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuBT.classList.toggle(this.activeClass),this.menuList.classList.toggle(this.activeClass),t(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuBT.classList.remove(this.activeClass)}))}addMenuMobileEvent(){this.events.forEach((()=>{this.menuBT.addEventListener("click",this.openMenu)}))}init(){return this.menuBT&&this.menuList&&this.addMenuMobileEvent(),this}}('[data-menu="button"]','[data-menu="lista"]').init(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),s=t.dataset.horario.split(",").map(Number),i=new Date,o=i.getDay(),n=i.getHours(),a=-1!==e.indexOf(o),r=n>=s[0]&&n<s[1];a&&r&&t.classList.add("aberto")}(),function(t,s){const i=document.querySelector(".numeros-grid");!async function(){try{const t=await fetch("./animaisAPI.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);i.appendChild(e)}(t))),new e("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t)}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(50/t.BRL.sell).toFixed(5)})).catch((t=>{console.log(Error(t))}))})();