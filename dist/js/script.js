!function(){"use strict";const e=document.querySelector(".toggle"),t=document.querySelector(".content-main"),c=document.querySelector(".menu"),o=document.querySelector(".showcase");e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active"),c.classList.toggle("active")}));window.addEventListener("scroll",(function(t){o.getBoundingClientRect().bottom<=0?e.classList.add("dark"):e.classList.remove("dark")}),!1)}();