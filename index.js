/* empty css                      */import{a as m,S as v,i as a}from"./assets/vendor-D8JM3d_r.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";const q="54630922-1eaa7a66b1da14f358e990b9b";async function p(s,t=1){return(await m.get("",{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const h=document.querySelector(".loader"),g=document.querySelector(".gallery"),f=document.querySelector(".load-more-btn"),P=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s){let t=s.map(o=>`
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
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),P.refresh()}function R(){g.innerHTML=""}function L(){h.classList.add("css-loader")}function b(){h.classList.remove("css-loader")}function w(){f.classList.remove("btn-hidden")}function S(){f.classList.add("btn-hidden")}const x=document.querySelector(".form"),E=document.querySelector(".load-more-btn");let n,i,l,u;x.addEventListener("submit",async s=>{if(s.preventDefault(),n=s.target.elements["search-text"].value.trim(),!n){a.error({title:"Error",message:"Введіть дані для пошуку",timeout:1e3,position:"topRight"});return}R(),S(),L(),i=1;try{const t=await p(n,i);u=t.totalHits,l=Math.ceil(u/15),t.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e3,position:"topRight"}):(y(t.hits),i<l?w():a.info({message:"We are sorry, but you have reached the end of search results.",timeout:1e3,position:"topRight"}))}catch{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e3,position:"topRight"})}finally{b()}});E.addEventListener("click",async()=>{try{S(),L(),i+=1;const s=await p(n,i);y(s.hits),M(),i<l?w():a.info({message:"We are sorry, but you have reached the end of search results.",timeout:1e3,position:"topRight"})}catch{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e3,position:"topRight"})}finally{b()}});function M(){const s=document.querySelector(".gallery-item");if(!s)return;const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
