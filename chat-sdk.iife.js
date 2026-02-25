var ChatSDK=(function(){"use strict";const m={init:(r={})=>{const{theme:s,position:a,iframeSrc:u,tenantId:b,primaryColor:l,brandId:h,sideSpacing:p,bottomSpacing:g,logo:x}=r,f=t=>{const e={right:`bottom: ${g}px; right: ${p}px;`,left:`bottom: ${g}px; right: auto; left: ${p}px;`};return e[t]||e["bottom-right"]};let d=document.getElementById("chat-sdk-container");d||(d=document.createElement("div"),d.id="chat-sdk-container",document.body.appendChild(d));let o=document.getElementById("chat-sdk-iframe");o||(o=document.createElement("iframe"),o.id="chat-sdk-iframe",o.src=`${u}/`,o.style.cssText=`
        border: none;
        width: 360px; height: 620px; max-width: calc(100vw - 32px); max-height: 100dvh;
        position: fixed;
        ${f(a)}
        z-index: 9999;
        display: none;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      `,d.appendChild(o));let n=null;const w=t=>{if(n)return;n=document.createElement("div"),n.id="chat-sdk-image-preview";const e=n.attachShadow({mode:"closed"});e.innerHTML=`
        <style>
          :host {
            position: fixed;
            inset: 0;
            z-index: 99999;
          }
          .overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.2s ease-out;
            cursor: zoom-out;
          }
          .overlay img {
            max-width: 90vw;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            animation: scaleIn 0.2s ease-out;
            cursor: default;
          }
          .close-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: none;
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(4px);
            transition: background 0.2s;
          }
          .close-btn:hover {
            background: rgba(255, 255, 255, 0.3);
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { transform: scale(0.92); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        </style>
        <div class="overlay">
          <img src="${t}" alt="preview" />
          <button class="close-btn" aria-label="Close preview">&times;</button>
        </div>
      `;const c=()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null};e.querySelector(".overlay").addEventListener("click",y=>{y.target===y.currentTarget&&c()}),e.querySelector(".close-btn").addEventListener("click",c),document.body.appendChild(n)},k=t=>{if(t.source!==o.contentWindow)return;const{type:e,payload:c}=t.data;e==="IFRAME_READY"?o.contentWindow.postMessage({type:"INIT_PROPS",payload:{theme:s,position:a,tenantId:b,primaryColor:l,brandId:h}},"*"):e==="CHAT_MINIMIZE"?o.style.display="none":e==="IMAGE_PREVIEW_OPEN"&&c?.imageUrl&&w(c.imageUrl)};if(window.addEventListener("message",k),!document.getElementById("chat-sdk-toggle")){const t=document.createElement("button");t.id="chat-sdk-toggle",t.innerHTML=`<img src="${x}" alt="Chat" style="width:54px;height:54px;object-fit:cover;border-radius:50%;display:block;">`,t.setAttribute("aria-label","Open chat"),t.style.cssText=`
        position: fixed;
        ${f(a)}
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
        padding: 0;
      `,t.onclick=()=>{const e=o.style.display==="block";o.style.display=e?"none":"block",e||o.contentWindow.postMessage({type:"TOGGLE",payload:{open:!0}},"*")},document.body.appendChild(t)}},toggle:()=>{const r=document.getElementById("chat-sdk-iframe"),s=document.getElementById("chat-sdk-toggle");if(r&&s){const a=r.style.display==="block";r.style.display=a?"none":"block"}}};window.ChatSDK=m;const i=document.currentScript;if(i){const r=i.getAttribute("data-theme")||"light",s=i.getAttribute("data-position")||"right",a=i.getAttribute("data-tenant-id"),u=i.getAttribute("data-iframe-src")||"https://dinhcunuocngoai.com.vn/fe/chat-sdk",b=i.getAttribute("data-primary-color"),l=i.getAttribute("data-brand-id"),h=i.getAttribute("data-side-spacing")||20,p=i.getAttribute("data-bottom-spacing")||20,g=i.getAttribute("data-logo")||"https://cdn.jsdelivr.net/gh/liam861/fe-chat-web-sdk@v0.0.3/chat-logo.svg";a&&l?m.init({theme:r,position:s,tenantId:a,iframeSrc:u,primaryColor:b,brandId:l,sideSpacing:h,bottomSpacing:p,logo:g}):console.warn("tenantId & brandId required")}return m})();
//# sourceMappingURL=chat-sdk.iife.js.map
