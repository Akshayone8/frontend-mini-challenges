import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-mKzp6dDb.js";import"./ng-challenges-PKAY4EuH.js";import"./navbar-NpshRAZN.js";const c=document.getElementById("increment"),o=document.getElementById("decrement"),e=document.getElementById("changeBy"),r=document.getElementById("reset"),t=document.querySelector(".value");c.addEventListener("click",()=>{t.textContent=+t.textContent+e.valueAsNumber});o.addEventListener("click",()=>{t.textContent=parseInt(t.textContent)-parseInt(e.value)});e.addEventListener("change",()=>{const n=e.valueAsNumber;(Number.isNaN(n)||n<0)&&(e.value=1)});r.addEventListener("click",()=>{t.textContent=0});
