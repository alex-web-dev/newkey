(()=>{var e={3058:()=>{const e=document.querySelector(".popup-callback");if(e){e.querySelector(".popup-callback__close").addEventListener("click",(()=>{e.classList.add("popup-callback_hide")})),e.addEventListener("click",(t=>{t.target.className===e.className&&e.classList.add("popup-callback_hide")}));document.querySelectorAll(".btn-callback-popup").forEach((t=>{t.addEventListener("click",(()=>{e.classList.remove("popup-callback_hide")}))}))}},7797:()=>{function e(){const e=document.querySelector(".cart__sum"),t=document.querySelector(".cart__discount"),c=document.querySelector(".cart__total"),r=document.querySelectorAll(".cart__item");let o=0,n=0;r.forEach((e=>{if(!e.querySelector(".checkbox__input").checked)return;const t=+e.dataset.price,c=+e.querySelector(".product-item__count-input").value;o+=t*c,n+=+e.dataset.discount*c}));const l=o-n;e.innerHTML=`${o} ₽`,t.innerHTML=`${n} ₽`,c.innerHTML=`${l} ₽`}window.addEventListener("load",(()=>{const t=document.querySelectorAll(".product-item__dec"),c=document.querySelectorAll(".product-item__inc");t.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".product-item").querySelector(".product-item__count-input");+t.value<=1||(t.value=+t.value-1)}))})),c.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".product-item").querySelector(".product-item__count-input");t.value=+t.value+1}))}));document.querySelectorAll(".product-item__btn").forEach((e=>{e.addEventListener("click",(()=>{!function(e,t){const c=e.getBoundingClientRect(),r=t.getBoundingClientRect(),o=e.cloneNode(!0);o.classList.add("product-item_fly"),o.querySelectorAll(".product-list-item-props, .product-item__btn, .product-item__counter").forEach((e=>e.remove())),o.style.width=`${e.offsetWidth}px`,o.style.left=`${c.x}px`,o.style.top=`${c.y}px`;const n=window.innerWidth>992?55:140,l=c.x+.5*c.width,i=c.y+n,d=r.x+.5*r.width-l,s=r.y-i;document.body.appendChild(o),setTimeout((()=>{o.style.transform="translateX("+d+"px)",o.style.transform+="translateY("+s+"px)",o.style.transform+="scale(0.02)"})),setTimeout((()=>document.body.removeChild(o)),750)}(e.closest(".product-item"),document.querySelector(".header__cart-btn"))}))}));if(document.querySelector(".cart")){e();document.querySelectorAll(".cart-update-total").forEach((t=>{t.addEventListener("click",(()=>{setTimeout((()=>{e()}))}))}));const t=document.querySelector(".cart-select-all");t.addEventListener("click",(()=>{document.querySelectorAll(".product-item__checkbox .checkbox__input").forEach((e=>e.checked=t.checked))}))}}))},9299:(e,t,c)=>{"use strict";var r=c(4436);r.ZP.use([r.W_,r.tl,r.LW]);var o=["Название видео 1","Название видео 2","Название видео 3"];const n=new r.ZP(".slides__list",{direction:"vertical",pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+o[e]+"</span>"}},scrollbar:{el:".swiper-scrollbar",draggable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{993:{direction:"vertical"},320:{direction:"horizontal"}}});if(document.querySelector(".slides")){const e=document.querySelector(".slides__total"),t=document.querySelector(".slides__current");e.innerHTML="0"+n.slides.length,n.on("slideChange",(function(){const e=++n.realIndex;t.innerHTML="0"+e}))}c(3722),c(7797),c(3058);const l=document.querySelector(".header");let i=0;function d(e,t,c,r){const o=document.querySelector(`.${e}`),n=document.querySelector(`.${t}`),l=document.querySelector(`.${c}`);o&&n&&l&&(window.innerWidth<=r&&o.closest(`.${t}`)?l.append(o):window.innerWidth>r&&!o.closest(`.${t}`)&&n.append(o))}window.addEventListener("scroll",(()=>{window.pageYOffset>=200&&window.pageYOffset>i&&!l.className.includes("header_reduced")?l.classList.add("header_reduced"):window.pageYOffset<i&&l.className.includes("header_reduced")&&l.classList.remove("header_reduced"),i=window.pageYOffset})),d("footer__contacts","footer__right","footer__middle",1400),window.addEventListener("resize",(()=>{d("footer__contacts","footer__right","footer__middle",1400)}))},3722:()=>{const e=document.querySelector(".header").querySelector(".header__menu"),t=e.querySelector(".menu__toggle"),c=e.querySelector(".menu__close");t.addEventListener("click",(()=>{window.innerWidth>1200||(e.classList.toggle("menu_active"),document.body.classList.toggle("body_lock"))})),c.addEventListener("click",(()=>{window.innerWidth>1200||(e.classList.remove("menu_active"),document.body.classList.remove("body_lock"))}));const r=document.querySelectorAll(".menu__item_has-children"),o=document.querySelector(".menu__back"),n=document.querySelector(".menu__submenu");n.addEventListener("click",(e=>{if(e.target===n){document.querySelector(".menu__item_active").classList.remove("menu__item_active")}})),r.forEach((t=>{t.addEventListener("click",(c=>{c.target!==n&&(window.innerWidth<=1200?(t.classList.add("menu__item_active"),e.classList.add("menu_open")):t.classList.add("menu__item_active"))}))})),o.addEventListener("click",(()=>{document.querySelector(".menu__item_active").classList.remove("menu__item_active"),e.classList.remove("menu_open")}))}},t={};function c(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,c),o.exports}c.m=e,c.x=e=>{},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[2768,206],[9299,206]],r=e=>{},o=(o,n)=>{for(var l,i,[d,s,a,u]=n,_=0,m=[];_<d.length;_++)i=d[_],c.o(e,i)&&e[i]&&m.push(e[i][0]),e[i]=0;for(l in s)c.o(s,l)&&(c.m[l]=s[l]);for(a&&a(c),o&&o(n);m.length;)m.shift()();return u&&t.push.apply(t,u),r()},n=globalThis.webpackChunkdefault_webpack=globalThis.webpackChunkdefault_webpack||[];function l(){for(var r,o=0;o<t.length;o++){for(var n=t[o],l=!0,i=1;i<n.length;i++){var d=n[i];0!==e[d]&&(l=!1)}l&&(t.splice(o--,1),r=c(c.s=n[0]))}return 0===t.length&&(c.x(),c.x=e=>{}),r}n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n));var i=c.x;c.x=()=>(c.x=i||(e=>{}),(r=l)())})();c.x()})();