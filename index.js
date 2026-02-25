/* empty css                      */import{a as m,S as q,i}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();m.defaults.baseURL="https://pixabay.com/api/";const v="54630922-1eaa7a66b1da14f358e990b9b";async function p(r,t=1){return(await m.get("",{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const h=document.querySelector(".loader"),g=document.querySelector(".gallery"),y=document.querySelector(".load-more-btn"),P=new q(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function f(r){let t=r.map(o=>`
        <li class="gallery-item">
            <a href="${o.largeImageURL}">
                <img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}"/>
            </a>
            <ul class="descr">
                <li class="descr-item">
                    <span class="descr-head">Likes</span>
                    <span class="descr-text">${o.likes}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Views</span>
                    <span class="descr-text">${o.views}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Comments</span>
                    <span class="descr-text">${o.comments}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Downloads</span>
                    <span class="descr-text">${o.downloads}</span>
                </li>
            </ul>
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),P.refresh()}function x(){g.innerHTML=""}function L(){h.classList.add("css-loader")}function b(){h.classList.remove("css-loader")}function E(){y.classList.remove("btn-hidden")}function w(){y.classList.add("btn-hidden")}function S(){const r=document.querySelector(".gallery-item");if(!r)return;const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const R=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let n,a,l,u;R.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.target.elements["search-text"].value.trim(),!n){i.error({title:"Error",message:"Введіть дані для пошуку",timeout:1e3,position:"topRight"});return}x(),w(),L(),a=1;try{const t=await p(n,a);u=t.totalHits,l=Math.ceil(u/15),t.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e3,position:"topRight"}):(f(t.hits),S(),a<l&&E())}catch{i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e3,position:"topRight"})}finally{b()}});M.addEventListener("click",async()=>{try{L(),a+=1;const r=await p(n,a);f(r.hits),S(),a>=l&&(w(),i.error({title:"Error",message:"We are sorry, but you have reached the end of search results.",timeout:1e3,position:"topRight"}))}catch{i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e3,position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
