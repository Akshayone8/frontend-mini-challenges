import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-mKzp6dDb.js";import"./ng-challenges-PKAY4EuH.js";import"./navbar-NpshRAZN.js";const d=document.querySelector("#rows"),u=document.querySelector("#columns"),p=document.querySelector(".table-body");let m=+d.value,s=+u.value;function f(r,o){const l=Array.from(Array(r),()=>[]);let c=1,t=1,e=0,n=0;for(;n<o;){for(;e>=0&&e<r;)l[e][n]=c++,e+=t;t*=-1,e+=t,n+=1}return l}function h(r,o){const l=f(r,o),c=document.createDocumentFragment();for(let t=0;t<r;t++){const e=document.createElement("tr");for(let n=0;n<o;n++){const a=document.createElement("td");a.textContent=l[t][n],a.classList.add("cell"),e.appendChild(a)}c.appendChild(e)}return c}function i(){p.replaceChildren(h(m,s))}d.addEventListener("change",()=>{m=+d.value,i()});u.addEventListener("change",()=>{s=+u.value,i()});i();
