import{a as E,S as g,i as S}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const r={API_KEY:"42384910-73277182c896d015737fb8e33",API_URL:"https://pixabay.com/api/",PHOTO_ORIENTATION:"horizontal",IMAGE_TYPE:"photo",SAFESEARCH:!0,PHOTOS_PER_PAGE:15,ERROR_MESSAGES:{EMPTY_INPUT:"Input must not be empty. Please try again!",IMAGES_NOT_FOUND:"Sorry, there are no images matching your search query. Please try again!",RESOURSE_ERROR:"Requested resource is not found!"},POP_UP_CONFIG:{message:null,iconUrl:"/img/error-icon.png",messageColor:"white",backgroundColor:"#EF4040",position:"topRight"}};async function O(i,o){return await E.get(r.API_URL,{params:{key:r.API_KEY,q:i,image_type:r.IMAGE_TYPE,orientation:r.PHOTO_ORIENTATION,safesearch:r.SAFESEARCH,page:o,per_page:r.PHOTOS_PER_PAGE}})}function R(i){return i.map(o=>{const{largeImageURL:s,webformatURL:n,tags:e,likes:t,views:a,comments:m,downloads:f}=o;return`<li>
      <div class="gallery-photo">
        <a href="${s}"
          ><img src="${n}" alt="${e}"
        /></a>
      </div>
      <div class="text-wrapper">
        <div class="list-item-container">
          <p class="header-text">likes</p>
          <p>${t}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Views</p>
          <p>${a}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Comments</p>
          <p>${m}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Downloads</p>
          <p>${f}</p>
        </div>
      </div>
    </li>`}).join("")}const h=document.querySelector(".form"),l=document.querySelector(".input"),d=document.querySelector(".gallery"),p=document.querySelector(".loader");let c=1;h.addEventListener("submit",i=>{i.preventDefault();const o=new g(".gallery-photo a");d.innerHTML="",sessionStorage.getItem("previousInput")!==l.value&&(c=1),l.value?(p.classList.remove("hidden"),O(l.value,c).then(({data:{hits:s}})=>{s.length?(d.insertAdjacentHTML("beforeend",R(s)),o.refresh()):u(r.ERROR_MESSAGES.IMAGES_NOT_FOUND),p.classList.add("hidden")}).catch(s=>{console.debug(s),u(r.ERROR_MESSAGES.RESOURSE_ERROR)})):u(r.ERROR_MESSAGES.EMPTY_INPUT),sessionStorage.setItem("previousInput",l.value),c++});function u(i){S.show({...r.POP_UP_CONFIG,message:i})}
//# sourceMappingURL=commonHelpers.js.map
