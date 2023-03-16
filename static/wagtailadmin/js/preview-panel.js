(()=>{"use strict";var e,t={7314:(e,t,r)=>{var n=r(9408);document.addEventListener("DOMContentLoaded",(function(){!function(){var e=document.querySelector('[data-side-panel="preview"]');if(e){var t=JSON.parse(document.getElementById("wagtail-preview-settings").textContent),r=e.querySelector("[data-preview-panel]"),a=r.querySelectorAll("[data-device-width]"),o=r.querySelector("[data-default-size]"),i=function(e){var t=r.classList.contains("preview-panel--unavailable"),n=e;e&&!t||(n=o.dataset.deviceWidth),r.style.setProperty("--preview-device-width",n)},c=function(e){var t=e.target.value,n=e.target.dataset.deviceWidth;i(n),a.forEach((function(e){r.classList.toggle("preview-panel--".concat(e.value),e.value===t)}))};a.forEach((function(e){return e.addEventListener("change",c)})),new ResizeObserver((function(e){return r.style.setProperty("--preview-panel-width",e[0].contentRect.width)})).observe(r);var l,s,d=r.querySelector("[data-preview-new-tab]"),u=r.querySelector("[data-refresh-preview]"),v=r.querySelector("[data-preview-spinner]"),f=document.querySelector("[data-edit-form]"),h=r.dataset.action,w=document.querySelector("[data-preview-mode-select]"),p=r.querySelector("[data-preview-iframe]"),m=!1,g=function(){clearTimeout(l),v.classList.add("w-hidden"),m=!1},y=function(){var e=document.createElement("iframe");e.style.width=0,e.style.height=0,e.style.opacity=0,e.style.position="absolute",e.src=p.src,p.insertAdjacentElement("afterend",e);var t=function(){Array.from(p.attributes).forEach((function(t){"src"!==t.nodeName&&e.setAttribute(t.nodeName,t.nodeValue)})),e.contentWindow.scroll(p.contentWindow.scrollX,p.contentWindow.scrollY),p.remove(),p=e,e.style=null,g(),e.removeEventListener("load",t)};e.addEventListener("load",t)},b=function(){return m=!0,l=setTimeout((function(){return v.classList.remove("w-hidden")}),2e3),fetch(h,{method:"POST",body:new FormData(f)}).then((function(e){return e.json()})).then((function(e){return r.classList.toggle("preview-panel--has-errors",!e.is_valid),r.classList.toggle("preview-panel--unavailable",!e.is_available),e.is_valid?y():g(),e.is_valid})).catch((function(e){throw g(),e}))},E=function(){return b().catch((function(){window.alert((0,n.gettext)("Error while sending preview data."))}))};if(d.addEventListener("click",(function(e){e.preventDefault();var t=window.open("",h);t.focus(),E().then((function(e){if(e){var r=new URL(d.href);t.document.location=r.toString()}else window.focus(),t.close()}))})),u&&u.addEventListener("click",E),t.WAGTAIL_AUTO_UPDATE_PREVIEW){var S,L=new URLSearchParams(new FormData(f)).toString(),O=function(){var e,t;!m&&(e=new URLSearchParams(new FormData(f)).toString(),t=L!==e,L=e,t)&&b()};e.addEventListener("show",(function(){O(),S=setInterval(O,t.WAGTAIL_AUTO_UPDATE_PREVIEW_INTERVAL)})),e.addEventListener("hide",(function(){clearInterval(S)}))}w&&w.addEventListener("change",(function(e){var t=e.target.value,r=new URL(p.src);r.searchParams.set("mode",t),p.src=r.toString(),r.searchParams.delete("in_preview_panel"),d.href=r.toString(),E()})),(s=document.querySelector('input[name="csrfmiddlewaretoken"]').value,fetch(h,{headers:{"X-CSRFToken":s},method:"DELETE"})).then((function(){return b()})).then((function(){return y()})),i()}}()}))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=673,(()=>{var e={673:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,c,l]=r,s=0;if(i.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var d=l(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[751],(()=>n(7314)));a=n.O(a)})();