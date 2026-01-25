var ChatSDK=(function(){"use strict";const l={init:(i={})=>{const{apiKey:s,theme:r="light",position:a="bottom-right",iframeSrc:p="https://dinhcunuocngoai.com.vn/fe/chat-sdk",tenantId:d,primaryColor:m}=i;if(!d)return console.warn("tenantId: apiKey required");const h=e=>{const n={"bottom-right":"bottom: 20px; right: 16px;","bottom-left":"bottom: 20px; right: auto; left: 20px;","top-right":"top: 20px; right: 16px; bottom: auto;","top-left":"top: 20px; right: auto; left: 20px; bottom: auto;"};return n[e]||n["bottom-right"]};let c=document.getElementById("chat-sdk-container");c||(c=document.createElement("div"),c.id="chat-sdk-container",document.body.appendChild(c));let t=document.getElementById("chat-sdk-iframe");t||(t=document.createElement("iframe"),t.id="chat-sdk-iframe",t.src=`${p}/`,t.style.cssText=`
        border: none;
        width: 360px; height: 620px; max-width: calc(100vw - 32px); max-height: 100dvh;
        position: fixed;
        ${h(a)}
        z-index: 9999;
        display: none;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      `,c.appendChild(t));const u=e=>{if(e.source!==t.contentWindow)return;const{type:n}=e.data;n==="IFRAME_READY"?t.contentWindow.postMessage({type:"INIT_PROPS",payload:{theme:r,apiKey:s,position:a,tenantId:d,primaryColor:m}},"*"):n==="CHAT_MINIMIZE"&&(t.style.display="none")};if(window.addEventListener("message",u),!document.getElementById("chat-sdk-toggle")){const e=document.createElement("button");e.id="chat-sdk-toggle";const n="https://raw.githubusercontent.com/liam861/fe-chat-web-sdk/refs/heads/main/chat-logo.svg";e.innerHTML=`<img src="${n}" alt="Chat" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;">`,e.setAttribute("aria-label","Open chat"),e.style.cssText=`
        position: fixed;
        ${h(a)}
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
      `,e.onclick=()=>{const g=t.style.display==="block";t.style.display=g?"none":"block",g||t.contentWindow.postMessage({type:"TOGGLE",payload:{open:!0}},"*")},document.body.appendChild(e)}},toggle:()=>{const i=document.getElementById("chat-sdk-iframe"),s=document.getElementById("chat-sdk-toggle");if(i&&s){const r=i.style.display==="block";i.style.display=r?"none":"block"}}};window.ChatSDK=l;const o=document.currentScript;if(o){const i=o.getAttribute("data-apikey"),s=o.getAttribute("data-theme")||"light",r=o.getAttribute("data-position")||"bottom-right",a=o.getAttribute("data-tenant-id"),p=o.getAttribute("data-iframe-src")||"https://dinhcunuocngoai.com.vn/fe/chat-sdk",d=o.getAttribute("data-primary-color");a&&l.init({apiKey:i,theme:s,position:r,tenantId:a,iframeSrc:p,primaryColor:d})}return l})();
//# sourceMappingURL=chat-sdk.iife.js.map
