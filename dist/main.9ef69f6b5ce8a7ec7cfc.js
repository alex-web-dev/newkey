(()=>{var e={3058:()=>{const e=document.querySelector(".popup-callback");if(e){e.querySelector(".popup-callback__close").addEventListener("click",(()=>{e.classList.add("popup-callback_hide")})),e.addEventListener("click",(t=>{t.target.className===e.className&&e.classList.add("popup-callback_hide")}));document.querySelectorAll(".btn-callback-popup").forEach((t=>{t.addEventListener("click",(()=>{e.classList.remove("popup-callback_hide")}))}))}},7797:()=>{const e=document.querySelectorAll(".product-item__dec"),t=document.querySelectorAll(".product-item__inc");e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".product-item").querySelector(".product-item__count-input");+t.value<=1||(t.value=+t.value-1)}))})),t.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".product-item").querySelector(".product-item__count-input");t.value=+t.value+1}))}));document.querySelectorAll(".product-item__btn").forEach((e=>{e.addEventListener("click",(()=>{!function(e,t){const c=e.getBoundingClientRect(),o=t.getBoundingClientRect(),r=e.cloneNode(!0);r.classList.add("product-item_fly"),r.querySelectorAll(".product-list-item-props, .product-item__btn, .product-item__counter").forEach((e=>e.remove())),r.style.width=`${e.offsetWidth}px`,r.style.left=`${c.x}px`,r.style.top=`${c.y}px`;const n=window.innerWidth>992?55:140,l=c.x+.5*c.width,i=c.y+n,s=o.x+.5*o.width-l,d=o.y-i;document.body.appendChild(r),setTimeout((()=>{r.style.transform="translateX("+s+"px)",r.style.transform+="translateY("+d+"px)",r.style.transform+="scale(0.02)"})),setTimeout((()=>document.body.removeChild(r)),750)}(e.closest(".product-item"),document.querySelector(".header__cart-btn"))}))}))},9299:(e,t,c)=>{"use strict";var o=c(4436);o.ZP.use([o.W_,o.tl,o.LW]);var r=["Название видео 1","Название видео 2","Название видео 3"];const n=new o.ZP(".slides__list",{direction:"vertical",pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+r[e]+"</span>"}},scrollbar:{el:".swiper-scrollbar",draggable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{993:{direction:"vertical"},320:{direction:"horizontal"}}});if(document.querySelector(".slides")){const e=document.querySelector(".slides__total"),t=document.querySelector(".slides__current");e.innerHTML="0"+n.slides.length,n.on("slideChange",(function(){const e=++n.realIndex;t.innerHTML="0"+e}))}c(3722),c(7797),c(3058);const l=document.querySelector(".header");let i=0;function s(e,t,c,o){const r=document.querySelector(`.${e}`),n=document.querySelector(`.${t}`),l=document.querySelector(`.${c}`);r&&n&&l&&(window.innerWidth<=o&&r.closest(`.${t}`)?l.append(r):window.innerWidth>o&&!r.closest(`.${t}`)&&n.append(r))}window.addEventListener("scroll",(()=>{window.pageYOffset>=200&&window.pageYOffset>i&&!l.className.includes("header_reduced")?l.classList.add("header_reduced"):window.pageYOffset<i&&l.className.includes("header_reduced")&&l.classList.remove("header_reduced"),i=window.pageYOffset})),s("footer__contacts","footer__right","footer__middle",1400),window.addEventListener("resize",(()=>{s("footer__contacts","footer__right","footer__middle",1400)}))},3722:()=>{const e=document.querySelector(".header").querySelector(".header__menu"),t=e.querySelector(".menu__toggle"),c=e.querySelector(".menu__close");t.addEventListener("click",(()=>{window.innerWidth>1200||(e.classList.toggle("menu_active"),document.body.classList.toggle("body_lock"))})),c.addEventListener("click",(()=>{window.innerWidth>1200||(e.classList.remove("menu_active"),document.body.classList.remove("body_lock"))}));const o=document.querySelectorAll(".menu__item_has-children"),r=document.querySelector(".menu__back"),n=document.querySelector(".menu__submenu");n.addEventListener("click",(e=>{if(e.target===n){document.querySelector(".menu__item_active").classList.remove("menu__item_active")}})),o.forEach((t=>{t.addEventListener("click",(c=>{c.target!==n&&(window.innerWidth<=1200?(t.classList.add("menu__item_active"),e.classList.add("menu_open")):t.classList.add("menu__item_active"))}))})),r.addEventListener("click",(()=>{document.querySelector(".menu__item_active").classList.remove("menu__item_active"),e.classList.remove("menu_open")}))}},t={};function c(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,c),r.exports}c.m=e,c.x=e=>{},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[2768,206],[9299,206]],o=e=>{},r=(r,n)=>{for(var l,i,[s,d,a,u]=n,_=0,m=[];_<s.length;_++)i=s[_],c.o(e,i)&&e[i]&&m.push(e[i][0]),e[i]=0;for(l in d)c.o(d,l)&&(c.m[l]=d[l]);for(a&&a(c),r&&r(n);m.length;)m.shift()();return u&&t.push.apply(t,u),o()},n=globalThis.webpackChunkdefault_webpack=globalThis.webpackChunkdefault_webpack||[];function l(){for(var o,r=0;r<t.length;r++){for(var n=t[r],l=!0,i=1;i<n.length;i++){var s=n[i];0!==e[s]&&(l=!1)}l&&(t.splice(r--,1),o=c(c.s=n[0]))}return 0===t.length&&(c.x(),c.x=e=>{}),o}n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n));var i=c.x;c.x=()=>(c.x=i||(e=>{}),(o=l)())})();c.x()})();