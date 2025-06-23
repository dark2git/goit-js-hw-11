import{a as p,S as m,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function f(r){const s="50853437-9ef5a88e343e45432612d628f",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get("https://pixabay.com/api/",{params:a}).then(o=>o.data)}const c=document.querySelector(".loader"),l=document.querySelector(".gallery"),g=new m(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(r){const s=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:n,comments:u,downloads:d})=>`
    <li class="image-box">
        <a href="${o}">
        <img src="${a}" alt="${e}" width="300">
        </a>
        <div class="image-stats">
            <div class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${t}</span>
            </div>
            <div class="image-stat">
                <span class="label">Views</span>
                <span class="value">${n}</span>
            </div>
            <div class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${u}</span>
            </div>
            <div class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${d}</span>
            </div>
        </div>
    </li>`).join("");l.innerHTML=s,g.refresh()}function y(){l.innerHTML=""}function v(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",S);function S(r){r.preventDefault();const s=r.currentTarget.elements["search-text"].value.trim();if(!s){i.warning({message:"Введіть ключове слово для пошуку.",position:"topRight"});return}y(),v(),f(s).then(({hits:a})=>{if(a.length===0){i.info({message:"Нічого не знайдено. Спробуйте інший запит.",position:"topRight"});return}h(a)}).catch(a=>{console.error("Fetch error:",a),i.error({message:"Не вдалося отримати зображення. Спробуйте пізніше.",position:"topRight"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
