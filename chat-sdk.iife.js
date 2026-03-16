(function(){"use strict";(function(){let t=null,d=null,n=null,y="*",x=!1,m=[],r=null;const j=async({url:e,brandId:o,tenantId:i})=>{const s=await fetch(`${e}/public/v1/brands/${o}`,{method:"GET",headers:{"x-tenant-id":i}});if(!s.ok)throw new Error(`Failed to fetch brand config: ${s.status}`);return s.json()},B=(e,o=0,i=0)=>{const s={right:`bottom:${i}px;right:${o}px;`,left:`bottom:${i}px;left:${o}px;`};return s[e]||s.right},w=e=>{!t?.contentWindow||!y||t.contentWindow.postMessage(e,y)},_=()=>{m.forEach(e=>e()),m=[]},v=()=>{t&&(t.style.display="block")},u=()=>{t&&(t.style.display="none")},A=e=>{if(r)return;r=document.createElement("div"),r.id="chat-sdk-image-preview";const o=r.attachShadow({mode:"closed"});o.innerHTML=`
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
    `;const i=()=>{r?.parentNode&&r.remove(),r=null};o.querySelector(".overlay").addEventListener("click",s=>{s.target===s.currentTarget&&i()}),o.querySelector(".close-btn").addEventListener("click",i),document.body.appendChild(r)},I={init:async(e={})=>{const{theme:o,position:i,iframeSrc:s,tenantId:S,primaryColor:k,brandId:E,sideSpacing:C,bottomSpacing:$,logo:D,customerName:L}=e;let h=D,N=k,P=C,T=$,l=i||"right";d=document.getElementById("chat-sdk-container"),d||(d=document.createElement("div"),d.id="chat-sdk-container",document.body.appendChild(d)),t=document.getElementById("chat-sdk-iframe"),t||(t=document.createElement("iframe"),t.id="chat-sdk-iframe",t.src=`${s}/`,t.style.cssText=`
          border: none;
          width: 360px; height: 620px; max-width: calc(100vw - 32px); max-height: 100dvh;
          position: fixed;
          z-index: 9999;
          display: none;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        `,d.appendChild(t));const R=async b=>{if(b.source!==t.contentWindow)return;const{type:f,payload:p}=b.data;if(f==="IFRAME_READY"){try{const g=`${p.apiPath}/asset/public/v1/files?key=`,M=await j({url:p.apiPath,brandId:E,tenantId:S}),c=M?.data?.widget||{};h=c?.logo?`${g}${c.logo}`:`${g}${M?.data?.logo}`,N=c?.primaryColor??k,T=c?.bottomSpacing??$,P=c?.sideSpacing??C,l=c?.position||l}catch(g){console.warn("[ChatSDK] Could not fetch brand config, using defaults.",g)}const z=B(l,P,T);n.querySelector("img").src=h,n.style.cssText=`
            position: fixed;
            ${z}
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
            visibility: visible;
          `,t.style.cssText=`
            border: none;
            width: 360px; height: 620px; max-width: calc(100vw - 32px); max-height: 100dvh;
            position: fixed;
            ${z}
            z-index: 9999;
            display: none;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          `,x=!0,w({type:"INIT_PROPS",payload:{theme:o,position:l,tenantId:S,primaryColor:N,brandId:E,customerName:L,logo:h}}),_()}f==="CHAT_MINIMIZE"&&u(),f==="IMAGE_PREVIEW_OPEN"&&p?.imageUrl&&A(p.imageUrl)};window.addEventListener("message",R),n=document.getElementById("chat-sdk-toggle"),n||(n=document.createElement("button"),n.id="chat-sdk-toggle",n.innerHTML='<img src="" alt="Chat" style="width:54px;height:54px;object-fit:cover;border-radius:50%;display:block;">',n.setAttribute("aria-label","Open chat"),n.style.cssText=`
          position: fixed;
          visibility: hidden;
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
        `,n.onclick=()=>{t.style.display==="block"?u():v()},document.body.appendChild(n))},toggle:()=>{const e=document.getElementById("chat-sdk-toggle");(t||e)&&(t.style.display==="block"?u():v())},changeUserInfo:({customerName:e,customerId:o})=>{const i=()=>{w({type:"CHANGE_USER_INFO",payload:{customer:{customerName:e,customerId:o}}})};x?i():m.push(i)}};globalThis.ChatSDK=I;const a=document.currentScript;if(a){const e={theme:a.dataset.theme,position:a.dataset.position,tenantId:a.dataset.tenantId,iframeSrc:a.dataset.iframeSrc,primaryColor:a.dataset.primaryColor,brandId:a.dataset.brandId,sideSpacing:Number(a.dataset.sideSpacing)||20,bottomSpacing:Number(a.dataset.bottomSpacing)||20,customerName:a.dataset.customerName,logo:a.dataset.logo};e.tenantId&&e.brandId&&e.iframeSrc&&I.init(e)}})()})();
//# sourceMappingURL=chat-sdk.iife.js.map
