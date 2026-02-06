var ChatSDK=(function(){"use strict";const g={init:(a={})=>{const{theme:s,position:n,iframeSrc:p,tenantId:h,primaryColor:c,brandId:m,sideSpacing:r,bottomSpacing:l,logo:u}=a,b=e=>{const i={right:`bottom: ${l}px; right: ${r}px;`,left:`bottom: ${l}px; right: auto; left: ${r}px;`};return i[e]||i["bottom-right"]};let d=document.getElementById("chat-sdk-container");d||(d=document.createElement("div"),d.id="chat-sdk-container",document.body.appendChild(d));let t=document.getElementById("chat-sdk-iframe");t||(t=document.createElement("iframe"),t.id="chat-sdk-iframe",t.src=`${p}/`,t.style.cssText=`
        border: none;
        width: 360px; height: 620px; max-width: calc(100vw - 32px); max-height: 100dvh;
        position: fixed;
        ${b(n)}
        z-index: 9999;
        display: none;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      `,d.appendChild(t));const y=e=>{if(e.source!==t.contentWindow)return;const{type:i}=e.data;i==="IFRAME_READY"?t.contentWindow.postMessage({type:"INIT_PROPS",payload:{theme:s,position:n,tenantId:h,primaryColor:c,brandId:m}},"*"):i==="CHAT_MINIMIZE"&&(t.style.display="none")};if(window.addEventListener("message",y),!document.getElementById("chat-sdk-toggle")){const e=document.createElement("button");e.id="chat-sdk-toggle",e.innerHTML=`<img src="${u}" alt="Chat" style="width:54px;height:54px;object-fit:cover;border-radius:50%;display:block;">`,e.setAttribute("aria-label","Open chat"),e.style.cssText=`
        position: fixed;
        ${b(n)}
        background: #0C0E12; color: white;
        border: none; border-radius: 50%;
        width: 54px; height: 54px;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.2s;
      `,e.onclick=()=>{const i=t.style.display==="block";t.style.display=i?"none":"block",i||t.contentWindow.postMessage({type:"TOGGLE",payload:{open:!0}},"*")},document.body.appendChild(e)}},toggle:()=>{const a=document.getElementById("chat-sdk-iframe"),s=document.getElementById("chat-sdk-toggle");if(a&&s){const n=a.style.display==="block";a.style.display=n?"none":"block"}}};window.ChatSDK=g;const o=document.currentScript;if(o){const a=o.getAttribute("data-theme")||"light",s=o.getAttribute("data-position")||"right",n=o.getAttribute("data-tenant-id"),p=o.getAttribute("data-iframe-src")||"https://dinhcunuocngoai.com.vn/fe/chat-sdk",h=o.getAttribute("data-primary-color"),c=o.getAttribute("data-brand-id"),m=o.getAttribute("data-side-spacing")||20,r=o.getAttribute("data-bottom-spacing")||20,l=o.getAttribute("data-logo")||"https://cdn.jsdelivr.net/gh/liam861/fe-chat-web-sdk@v0.0.3/chat-logo.svg";n&&c?g.init({theme:a,position:s,tenantId:n,iframeSrc:p,primaryColor:h,brandId:c,sideSpacing:m,bottomSpacing:r,logo:l}):console.warn("tenantId & brandId required")}return g})();
//# sourceMappingURL=chat-sdk.iife.js.map
