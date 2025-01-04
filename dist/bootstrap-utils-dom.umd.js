!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).BootstrapUtilsDom={})}(this,(function(t){"use strict";const e=new Map;var n={set(t,n,i){e.has(t)||e.set(t,new Map);const s=e.get(t);s.has(n)||0===s.size?s.set(n,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const i=e.get(t);i.delete(n),0===i.size&&e.delete(t)}};const i="transitionend",s=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(s(t)):null,l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),a=(t,e=[],n=t)=>"function"==typeof t?t.call(...e):n,c=(t,e,n=!0)=>{if(!n)return void a(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),s=Number.parseFloat(n);return i||s?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(e)+5;let o=!1;const r=({target:n})=>{n===e&&(o=!0,e.removeEventListener(i,r),a(t))};e.addEventListener(i,r),setTimeout((()=>{o||e.dispatchEvent(new Event(i))}),s)},u=/[^.]*(?=\..*)\.|.*/,d=/\..*/,f=/::\d+$/,h={};let p=1;const m={mouseenter:"mouseover",mouseleave:"mouseout"},g=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function b(t,e){return e&&`${e}::${p++}`||t.uidEvent||p++}function _(t){const e=b(t);return t.uidEvent=e,h[e]=h[e]||{},h[e]}function v(t,e,n=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===n))}function y(t,e,n){const i="string"==typeof e,s=i?n:e||n;let o=C(t);return g.has(o)||(o=t),[i,s,o]}function E(t,e,n,i,s){if("string"!=typeof e||!t)return;let[o,r,l]=y(e,n,i);if(e in m){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const a=_(t),c=a[l]||(a[l]={}),d=v(c,r,o?n:null);if(d)return void(d.oneOff=d.oneOff&&s);const f=b(r,e.replace(u,"")),h=o?function(t,e,n){return function i(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const l of o)if(l===r)return S(s,{delegateTarget:r}),i.oneOff&&k.off(t,s.type,e,n),n.apply(r,[s])}}(t,n,r):function(t,e){return function n(i){return S(i,{delegateTarget:t}),n.oneOff&&k.off(t,i.type,e),e.apply(t,[i])}}(t,r);h.delegationSelector=o?n:null,h.callable=r,h.oneOff=s,h.uidEvent=f,c[f]=h,t.addEventListener(l,h,o)}function A(t,e,n,i,s){const o=v(e[n],i,s);o&&(t.removeEventListener(n,o,Boolean(s)),delete e[n][o.uidEvent])}function w(t,e,n,i){const s=e[n]||{};for(const[o,r]of Object.entries(s))o.includes(i)&&A(t,e,n,r.callable,r.delegationSelector)}function C(t){return t=t.replace(d,""),m[t]||t}const k={on(t,e,n,i){E(t,e,n,i,!1)},one(t,e,n,i){E(t,e,n,i,!0)},off(t,e,n,i){if("string"!=typeof e||!t)return;const[s,o,r]=y(e,n,i),l=r!==e,a=_(t),c=a[r]||{},u=e.startsWith(".");if(void 0===o){if(u)for(const n of Object.keys(a))w(t,a,n,e.slice(1));for(const[n,i]of Object.entries(c)){const s=n.replace(f,"");l&&!e.includes(s)||A(t,a,r,i.callable,i.delegationSelector)}}else{if(!Object.keys(c).length)return;A(t,a,r,o,s?n:null)}},trigger(t,e,n){if("string"!=typeof e||!t)return null;const i=window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null;let s=null,o=!0,r=!0,l=!1;e!==C(e)&&i&&(s=i.Event(e,n),i(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),l=s.isDefaultPrevented());const a=S(new Event(e,{bubbles:o,cancelable:!0}),n);return l&&a.preventDefault(),r&&t.dispatchEvent(a),a.defaultPrevented&&s&&s.preventDefault(),a}};function S(t,e={}){for(const[n,i]of Object.entries(e))try{t[n]=i}catch{Object.defineProperty(t,n,{configurable:!0,get:()=>i})}return t}function T(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function D(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const N={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${D(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${D(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1),e[n]=T(t.dataset[i])}return e},getDataAttribute:(t,e)=>T(t.getAttribute(`data-bs-${D(e)}`))},O=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e?e.split(",").map((t=>s(t))).join(","):null},j={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let i=t.parentNode.closest(e);for(;i;)n.push(i),i=i.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&(t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const e=t.closest("summary");if(e&&e.parentNode!==n)return!1;if(null===e)return!1}return e})(t)))},getSelectorFromElement(t){const e=O(t);return e&&j.findOne(e)?e:null},getElementFromSelector(t){const e=O(t);return e?j.findOne(e):null},getMultipleElementsFromSelector(t){const e=O(t);return e?j.find(e):[]}};class x{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=o(e)?N.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...o(e)?N.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,s]of Object.entries(e)){const e=t[i],r=o(e)?"element":null==(n=e)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)}var n}}const $="backdrop",M="show",P=`mousedown.bs.${$}`,L={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},F={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};const z={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},X=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),W=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,I=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?!X.has(n)||Boolean(W.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(n)))};function V(t,e,n){if(!t.length)return t;if(n&&"function"==typeof n)return n(t);const i=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const t of s){const n=t.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){t.remove();continue}const i=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[n]||[]);for(const e of i)I(e,s)||t.removeAttribute(e.nodeName)}return i.body.innerHTML}const q=".bs.focustrap",B=`focusin${q}`,H=`keydown.tab${q}`,R="backward",K={autofocus:!0,trapElement:null},U={autofocus:"boolean",trapElement:"element"};const Q=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Y=".sticky-top",J="padding-right",Z="margin-right";const G=".bs.swipe",tt=`touchstart${G}`,et=`touchmove${G}`,nt=`touchend${G}`,it=`pointerdown${G}`,st=`pointerup${G}`,ot={endCallback:null,leftCallback:null,rightCallback:null},rt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class lt extends x{constructor(t,e){super(),this._element=t,t&&lt.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"swipe"}dispose(){k.off(this._element,G)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),a(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&a(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(k.on(this._element,it,(t=>this._start(t))),k.on(this._element,st,(t=>this._end(t))),this._element.classList.add("pointer-event")):(k.on(this._element,tt,(t=>this._start(t))),k.on(this._element,et,(t=>this._move(t))),k.on(this._element,nt,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const at={allowList:z,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ct={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ut={entry:"(string|element|function|null)",selector:"(string|element)"};const dt={data:n,eventHandler:k,manipulator:N,selectorEngine:j},ft={backdrop:class extends x{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return L}static get DefaultType(){return F}static get NAME(){return $}show(t){if(!this._config.isVisible)return void a(t);this._append();const e=this._getElement();this._config.isAnimated&&(t=>{t.offsetHeight})(e),e.classList.add(M),this._emulateAnimation((()=>{a(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(M),this._emulateAnimation((()=>{this.dispose(),a(t)}))):a(t)}dispose(){this._isAppended&&(k.off(this._element,P),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),k.on(t,P,(()=>{a(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){c(t,this._getElement(),this._config.isAnimated)}},sanitizeHtml:V,enableDismissTrigger:(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,i=t.NAME;k.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),l(this))return;const s=j.getElementFromSelector(this)||this.closest(`.${i}`);t.getOrCreateInstance(s)[e]()}))},config:x,focusTrap:class extends x{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return K}static get DefaultType(){return U}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),k.off(document,q),k.on(document,B,(t=>this._handleFocusin(t))),k.on(document,H,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,k.off(document,q))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=j.focusableChildren(e);0===n.length?e.focus():this._lastTabNavDirection===R?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?R:"forward")}},scrollBar:class{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,J,(e=>e+t)),this._setElementAttributes(Q,J,(e=>e+t)),this._setElementAttributes(Y,Z,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,J),this._resetElementAttributes(Q,J),this._resetElementAttributes(Y,Z)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${n(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&N.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const n=N.getDataAttribute(t,e);null!==n?(N.removeDataAttribute(t,e),t.style.setProperty(e,n)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const n of j.find(t,this._element))e(n)}},swipe:lt,templateFactory:class extends x{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return at}static get DefaultType(){return ct}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,n]of Object.entries(this._config.content))this._setContent(t,n,e);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},ut)}_setContent(t,e,n){const i=j.findOne(n,t);i&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),i):this._config.html?i.innerHTML=this._maybeSanitize(e):i.textContent=e:i.remove())}_maybeSanitize(t){return this._config.sanitize?V(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return a(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}};t.Dom=dt,t.Util=ft}));