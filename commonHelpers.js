import{a as E,S as h,i as O}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o={API_KEY:"42384910-73277182c896d015737fb8e33",API_URL:"https://pixabay.com/api/",PHOTO_ORIENTATION:"horizontal",IMAGE_TYPE:"photo",SAFESEARCH:!0,PHOTOS_PER_PAGE:15,ERROR_MESSAGES:{EMPTY_INPUT:"Input must not be empty. Please try again!",IMAGES_NOT_FOUND:"Sorry, there are no images matching your search query. Please try again!",RESOURSE_ERROR:"Requested resource is not found!"},POP_UP_CONFIG:{message:null,iconUrl:"/img/error-icon.png",messageColor:"white",backgroundColor:"#EF4040",position:"topRight"}};async function R(n,s){return await E.get(o.API_URL,{params:{key:o.API_KEY,q:n,image_type:o.IMAGE_TYPE,orientation:o.PHOTO_ORIENTATION,safesearch:o.SAFESEARCH,page:s,per_page:o.PHOTOS_PER_PAGE}})}function S(n){return n.map(s=>{const{largeImageURL:i,webformatURL:l,tags:e,likes:t,views:a,comments:m,downloads:f}=s;return`<li>
      <div class="gallery-photo">
        <a href="${i}"
          ><img src="${l}" alt="${e}"
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
    </li>`}).join("")}const P=document.querySelector(".form"),d=document.querySelector(".input"),p=document.querySelector(".gallery"),g=document.querySelector(".loader");let c=1,r=[];P.addEventListener("submit",n=>{n.preventDefault();const s=new h(".gallery-photo a");p.innerHTML="",d.value?(g.classList.remove("hidden"),R(d.value,c).then(({data:{hits:i}})=>{i.length?(r.push(d.value),console.log(r),p.insertAdjacentHTML("beforeend",S(i)),s.refresh()):u(o.ERROR_MESSAGES.IMAGES_NOT_FOUND),g.classList.add("hidden")}).catch(i=>{console.debug(i),u(o.ERROR_MESSAGES.RESOURSE_ERROR)})):u(o.ERROR_MESSAGES.EMPTY_INPUT),r.length>=2&&(console.log(r[r.length-1],r[r.length-2]),r[r.length-1]!==r[r.length-2]&&(r=[],console.log(r),c=0)),c++,console.log(c)});function u(n){O.show({...o.POP_UP_CONFIG,message:n})}
//# sourceMappingURL=commonHelpers.js.map
