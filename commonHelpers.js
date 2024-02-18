import{a as f,S as E,i as g}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const r={API_KEY:"42384910-73277182c896d015737fb8e33",API_URL:"https://pixabay.com/api/",PHOTO_ORIENTATION:"horizontal",IMAGE_TYPE:"photo",SAFESEARCH:!0,ERROR_MESSAGES:{EMPTY_INPUT:"Input must not be empty. Please try again!",IMAGES_NOT_FOUND:"Sorry, there are no images matching your search query. Please try again!",RESOURSE_ERROR:"Requested resource is not found!"},POP_UP_CONFIG:{message:null,iconUrl:"/img/error-icon.png",messageColor:"white",backgroundColor:"#EF4040",position:"topRight"}};async function h(o){return await f.get(r.API_URL,{params:{key:r.API_KEY,q:o,image_type:r.IMAGE_TYPE,orientation:r.PHOTO_ORIENTATION,safesearch:r.SAFESEARCH}})}function R(o){return o.map(s=>{const{largeImageURL:i,webformatURL:a,tags:e,likes:t,views:n,comments:p,downloads:m}=s;return`<li>
      <div class="gallery-photo">
        <a href="${i}"
          ><img src="${a}" alt="${e}"
        /></a>
      </div>
      <div class="text-wrapper">
        <div class="list-item-container">
          <p class="header-text">likes</p>
          <p>${t}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Views</p>
          <p>${n}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Comments</p>
          <p>${p}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Downloads</p>
          <p>${m}</p>
        </div>
      </div>
    </li>`}).join("")}const S=document.querySelector(".form"),c=document.querySelector(".input"),d=document.querySelector(".gallery"),u=document.querySelector(".loader");S.addEventListener("submit",o=>{o.preventDefault();const s=new E(".gallery-photo a");d.innerHTML="",c.value?(u.classList.remove("hidden"),h(c.value).then(({data:{hits:i}})=>{i.length?(d.insertAdjacentHTML("beforeend",R(i)),s.refresh()):l(r.ERROR_MESSAGES.IMAGES_NOT_FOUND),u.classList.add("hidden")}).catch(i=>{console.debug(i),l(r.ERROR_MESSAGES.RESOURSE_ERROR)})):l(r.ERROR_MESSAGES.EMPTY_INPUT)});function l(o){g.show({...r.POP_UP_CONFIG,message:o})}
//# sourceMappingURL=commonHelpers.js.map
