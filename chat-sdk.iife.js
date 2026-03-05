(function(){"use strict";(function(){let t=null,d=null,i=null,m="*",g=!1,c=[],s=null;const f=(e,o,a)=>{const r={right:`bottom:${a}px;right:${o}px;`,left:`bottom:${a}px;left:${o}px;`};return r[e]||r.right},b=e=>{!t?.contentWindow||!m||t.contentWindow.postMessage(e,m)},v=()=>{c.forEach(e=>e()),c=[]},h=()=>{t&&(t.style.display="block")},l=()=>{t&&(t.style.display="none")},E=e=>{if(s)return;s=document.createElement("div"),s.id="chat-sdk-image-preview";const o=s.attachShadow({mode:"closed"});o.innerHTML=`
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
        <img src="${e}" alt="preview" />
        <button class="close-btn" aria-label="Close preview">&times;</button>
      </div>
    `;const a=()=>{s?.parentNode&&s.remove(),s=null};o.querySelector(".overlay").addEventListener("click",r=>{r.target===r.currentTarget&&a()}),o.querySelector(".close-btn").addEventListener("click",a),document.body.appendChild(s)},y={init:(e={})=>{const{theme:o,position:a,iframeSrc:r,tenantId:S,primaryColor:C,brandId:M,sideSpacing:x,bottomSpacing:I,logo:w,username:$}=e;d=document.getElementById("chat-sdk-container"),d||(d=document.createElement("div"),d.id="chat-sdk-container",document.body.appendChild(d)),t=document.getElementById("chat-sdk-iframe"),t||(t=document.createElement("iframe"),t.id="chat-sdk-iframe",t.src=`${r}/`,t.style.cssText=`
          border: none;
          width: 360px; height: 620px; max-width: calc(100vw - 32px); max-height: 100dvh;
          position: fixed;
         ${f(a,x,I)}
          z-index: 9999;
          display: none;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        `,d.appendChild(t));const N=p=>{if(p.source!==t.contentWindow)return;const{type:u,payload:k}=p.data;u==="IFRAME_READY"&&(g=!0,b({type:"INIT_PROPS",payload:{theme:o,position:a,tenantId:S,primaryColor:C,brandId:M,username:$,logo:w}}),v()),u==="CHAT_MINIMIZE"&&l(),u==="IMAGE_PREVIEW_OPEN"&&k?.imageUrl&&E(k.imageUrl)};window.addEventListener("message",N),i=document.getElementById("chat-sdk-toggle"),i||(i=document.createElement("button"),i.id="chat-sdk-toggle",i.innerHTML=`<img src="${w}" alt="Chat" style="width:54px;height:54px;object-fit:cover;border-radius:50%;display:block;">`,i.setAttribute("aria-label","Open chat"),i.style.cssText=`
          position: fixed;
      ${f(a,x,I)}
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
        `,i.onclick=()=>{t.style.display==="block"?l():h()},document.body.appendChild(i))},toggle:()=>{const e=document.getElementById("chat-sdk-toggle");(t||e)&&(t.style.display==="block"?l():h())},changeUserInfo:e=>{const o=()=>{b({type:"CHANGE_USER_INFO",payload:{user:e}})};g?o():c.push(o)}};globalThis.ChatSDK=y;const n=document.currentScript;if(n){const e={theme:n.dataset.theme,position:n.dataset.position,tenantId:n.dataset.tenantId,iframeSrc:n.dataset.iframeSrc,primaryColor:n.dataset.primaryColor,brandId:n.dataset.brandId,sideSpacing:Number(n.dataset.sideSpacing)||20,bottomSpacing:Number(n.dataset.bottomSpacing)||20,username:n.dataset.username,logo:n.dataset.logo};e.tenantId&&e.brandId&&e.iframeSrc&&y.init(e)}})()})();
//# sourceMappingURL=chat-sdk.iife.js.map
