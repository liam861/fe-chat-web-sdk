var ChatSDK=(function(){"use strict";const s={init:(o={})=>{const{apiKey:i,theme:d="light",position:r="bottom-right",iframeSrc:h="https://dinhcunuocngoai.com.vn/fe/chat-sdk"}=o;if(!i)return console.warn("ChatSDK: apiKey required");let n=document.getElementById("chat-sdk-container");n||(n=document.createElement("div"),n.id="chat-sdk-container",document.body.appendChild(n));let t=document.getElementById("chat-sdk-iframe");t||(t=document.createElement("iframe"),t.id="chat-sdk-iframe",t.src=`${h}/`,t.style.cssText=`
        border: none;
        width: 360px; height: 620px; max-width: calc(100vw - 32px); max-height: 100vh;
        position: fixed;
        bottom: 20px; right: 16px;
        z-index: 9999;
        display: none;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        ${r==="bottom-left"?"right: auto; left: 20px;":""}
      `,n.appendChild(t));const p=e=>{if(e.source!==t.contentWindow)return;const{type:a}=e.data;a==="IFRAME_READY"?t.contentWindow.postMessage({type:"INIT_PROPS",payload:{theme:d,apiKey:i,position:r}},"*"):a==="CHAT_MINIMIZE"&&(t.style.display="none")};if(window.addEventListener("message",p),!document.getElementById("chat-sdk-toggle")){const e=document.createElement("button");e.id="chat-sdk-toggle";const a="https://raw.githubusercontent.com/liam861/fe-chat-web-sdk/refs/heads/main/chat-logo.svg";e.innerHTML=`<img src="${a}" alt="Chat" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;">`,e.setAttribute("aria-label","Open chat"),e.style.cssText=`
        position: fixed;
        bottom: 20px; right: 16px;
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
        ${r==="bottom-left"?"right: auto; left: 20px;":""}
        transition: all 0.2s;
      `,e.onclick=()=>{const l=t.style.display==="block";t.style.display=l?"none":"block",l||t.contentWindow.postMessage({type:"TOGGLE",payload:{open:!0}},"*")},document.body.appendChild(e)}},toggle:()=>{const o=document.getElementById("chat-sdk-iframe"),i=document.getElementById("chat-sdk-toggle");if(o&&i){const d=o.style.display==="block";o.style.display=d?"none":"block"}}};window.ChatSDK=s;const c=document.currentScript;if(c){const o=c.getAttribute("data-apikey"),i=c.getAttribute("data-theme")||"light";o&&s.init({apiKey:o,theme:i,iframeSrc})}return s})();
//# sourceMappingURL=chat-sdk.iife.js.map
