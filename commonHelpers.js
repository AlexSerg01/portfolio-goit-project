import{S as w,N as p,P as C,K as f,A as y,i as h}from"./assets/vendor-8a147555.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const b=document.querySelector(".header-menu-button"),d=document.querySelector(".header-menu-list");let m=1;b.addEventListener("click",e=>{e.preventDefault(),m+=1,m%2===0?d.classList.add("menu-is-visible"):d.classList.remove("menu-is-visible")});d.addEventListener("click",e=>{m+=1,d.classList.remove("menu-is-visible")});const R=document.querySelector(".swipper-and-button-wraper > .swiper"),I=document.querySelector(".swiper-next-button");new w(R,{modules:[p,C,f],modules:[p,f],navigation:{nextEl:I},direction:"horizontal",centeredSlides:!0,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:"auto",spaceBetween:18},767:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},slidesPerView:1});document.querySelector(".ac-trigger");new y(".accordion-container",{duration:600,collapse:!0,openOnInit:[0],showMultiple:!0});new w(".swiper",{cssMode:!0,spaceBetween:30,navigation:{nextEl:".SwButtonNext",prevEl:".SwButtonPrev"},mousewheel:!0,keyboard:!0,touch:!0});new y(".faq-list",{duration:400,showOne:!0,showMultiple:!0,onToggle:function(e){const t=e.target.closest(".qwestions");t&&t.classList.toggle("is-active")}});const g=document.querySelectorAll(".CoversImgContainer"),N=document.querySelector(".CoverBgContainer");window.addEventListener("scroll",T);function T(){B(N)?g.forEach(e=>e.classList.add("AnimationOn")):g.forEach(e=>e.classList.remove("AnimationOn"))}function B(e){const t=e.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.top<(window.innerHeight||document.documentElement.clientHeight)&&t.left<(window.innerWidth||document.documentElement.clientWidth)}async function P(e,t){const n="https://portfolio-js.b.goit.study/api"+"/requests",s={method:"POST",body:JSON.stringify({email:e,comment:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}};return await fetch(n,s).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function O(e,t){const i=document.getElementById("reviewsList");fetch("https://portfolio-js.b.goit.study/api/reviews").then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const n=r.map(s=>t(s)).join("");i.innerHTML=n,e()}).catch(r=>{console.error(r),h.error({title:"Помилка",message:"Не вдалося завантажити список відгуків"}),i.innerHTML="Not found"})}const c=window.innerWidth;let u;c>=1440?u=4:c>=768&&c<1440?u=2:c<768&&(u=1);function q(){new w(".reviews-swiper",{cssMode:!0,slidesPerView:u,slidesPerGroup:1,navigation:{disabledClass:"BtnOff",nextEl:".ButtonNext",prevEl:".ButtonPrev"},mousewheel:!0,keyboard:!0,touch:!0})}function x(e){return`
        <div class="Review swiper-slide">
        <img class="UserIcon" src="${e.avatar_url}" alt="Avatar">
          <h4 class="Name">${e.author}</h4>
          <p class="ReviewText">${e.review}</p>
        </div>
      `}O(q,x);const v=36,o={wtCoopForm:document.querySelector("#WtForm"),wtModal:document.querySelector(".WorkTogetherModalWrapper"),wtResultMsg:document.querySelector(".CoopResultMsg"),wtModalRespTitle:document.querySelector("#WtModalRespTitle"),wtModalRespMessage:document.querySelector("#WtModalRespMessage"),wtModalClose:document.querySelector(".WorkTogetherModalClose"),wtModalBox:document.querySelector(".WorkTogetherModal")};o.wtCoopForm.addEventListener("submit",F);o.wtCoopForm.elements.email.addEventListener("input",S);o.wtCoopForm.elements.email.addEventListener("blur",A);o.wtCoopForm.elements.email.addEventListener("blur",L);o.wtCoopForm.elements.email.addEventListener("focus",E);o.wtCoopForm.elements.comment.addEventListener("focus",E);o.wtCoopForm.elements.comment.addEventListener("blur",L);o.wtModal.addEventListener("click",M);window.addEventListener("keydown",M);async function F(e){e.preventDefault();try{const{email:t,comment:i}=o.wtCoopForm.elements,r=await P(t.value,i.value);k(r),o.wtCoopForm.reset(),t.classList.remove("Invalid"),t.classList.remove("Success"),o.wtResultMsg.textContent=""}catch{h.error({message:"Something went wrong! Please, try again.",position:"bottomCenter"})}}function k({title:e,message:t}){o.wtModalRespTitle.textContent=e,o.wtModalRespMessage.textContent=t,o.wtModal.classList.add("IsOpen")}function M(e){(!o.wtModalBox.contains(e.target)||o.wtModalClose.contains(e.target)||e.code==="Escape")&&(o.wtModal.classList.remove("IsOpen"),o.wtResultMsg.textContent="")}function A(e){e.target.value=e.target.value.trim();const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e.target.value){S(e);return}e.target.value.match(t)?W():V()}function W(){const{email:e}=o.wtCoopForm.elements;e.classList.remove("Invalid"),e.classList.add("Success"),o.wtResultMsg.textContent="Success!",o.wtResultMsg.classList.add("Success")}function V(){const{email:e}=o.wtCoopForm.elements;e.classList.remove("Success"),e.classList.add("Invalid"),o.wtResultMsg.textContent="Invalid email, try again",o.wtResultMsg.classList.remove("Success")}function S(e){e.target.name==="email"&&(o.wtResultMsg.textContent="",o.wtResultMsg.classList.remove("Success"));const{email:t}=o.wtCoopForm.elements;t.classList.remove("Invalid"),t.classList.remove("Success")}function L(e){console.log(e.target.value.length),e.target.setAttribute("data-value",e.target.value.trim()),e.target.value.length>v&&(e.target.value=e.target.value.slice(0,v-3).concat("..."))}function E(e){e.target.value&&(e.target.value=e.target.getAttribute("data-value"))}const l=document.getElementById("myModal"),_=document.querySelector("button"),U=document.getElementsByClassName("close")[0];_.onclick=function(){l.style.display="block"};U.onclick=function(){l.style.display="none"};window.onclick=function(e){e.target==l&&(l.style.display="none")};document.onkeydown=function(e){e.key==="Escape"&&(l.style.display="none")};
//# sourceMappingURL=commonHelpers.js.map
