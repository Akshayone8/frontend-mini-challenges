import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-mKzp6dDb.js";import"./ng-challenges-PKAY4EuH.js";import"./navbar-NpshRAZN.js";const s=document.getElementById("balance-amount"),l=document.getElementById("transaction-list"),o=document.getElementById("description"),c=document.getElementById("amount"),u=document.getElementById("transaction-type"),m=document.getElementById("add-button");let i=0;function d(){s.textContent=`$${i.toFixed(2)}`}function r(n,t,e){const a=document.createElement("li");a.classList.add(e),a.innerHTML=`
        <span>${n}</span>
        <span>$${t.toFixed(2)}</span>
    `,l.appendChild(a),i+=e==="income"?t:-t,d()}m.addEventListener("click",()=>{const n=o.value,t=parseFloat(c.value),e=u.value;if(n.trim()===""||isNaN(t)||t<=0){alert("Please enter a valid description and amount.");return}r(n,t,e),o.value="",c.value=""});d();
