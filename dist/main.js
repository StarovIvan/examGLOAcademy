(()=>{"use strict";const e=()=>{document.querySelector(".top-menu").addEventListener("click",(e=>{(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})(e)}))};e();const t=e;(()=>{const e=document.querySelector(".header"),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-close"),c=document.querySelector(".modal-overlay"),s=document.querySelector(".button-services");console.log(s),e.addEventListener("click",(e=>{e.target.classList.contains("callback-btn")&&(t.style.display="block",c.style.display="block")})),s.addEventListener("click",(e=>{t.style.display="block",c.style.display="block"})),l.addEventListener("click",(()=>{t.style.display="none",c.style.display="none"})),c.addEventListener("click",(()=>{t.style.display="none",c.style.display="none"}))})(),t(),(()=>{const e=document.querySelector(".top-slider").querySelectorAll(".item");let t,l=0;const c=()=>{e[l].classList.remove("slide_active"),e[l].style.display="none",e[l].classList.remove("slide_active"),l++,l>=e.length&&(l=0),e[l].classList.add("slide_active"),e[l].style.display="block",e[l].classList.add("slide_active")};((e=1500)=>{t=setInterval(c,e)})()})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element");e.querySelectorAll(".element-content"),t.forEach((e=>{e.addEventListener("click",(t=>{e.classList.toggle("active"),e.querySelector(".element-content").style.display="block",e.classList.contains("active")||(e.querySelector(".element-content").style.display="none")}))}))})()})();