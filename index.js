import{a as d,S as f,i as s}from"./assets/vendor-DA0uMjGz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(o){return d.get("https://pixabay.com/api/",{params:{key:"52255318-c301db47a64feee351027f4f6",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}var m=new f(".gallery a",{captionData:"alt"});const u=document.querySelector(".gallery");function g(o){let t=[];o.map(i=>{t.push(`
      <a href="${i.largeImageURL}" class="gallery-item" style="background-image: url('${i.webformatURL}')">
        <ul class="gallery-item-info">
          <li>Likes<br><span>${i.likes}</span></li>
          <li>Views<br><span>${i.views}</span></li>
          <li>Comments<br><span>${i.comments}</span></li>
          <li>Downloads<br><span>${i.downloads}</span></li>
        </ul>
      </a>
    `)}),u.innerHTML=t.join(""),m.refresh()}function y(){u.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}const L=document.querySelector(".form"),c=document.querySelector(".formInput");L.addEventListener("submit",o=>{o.preventDefault(),c.value.trim()==""?s.warning({title:"😱",message:"Enter text in input",position:"topRight"}):(y(),h(),p(c.value).then(t=>t.data).then(t=>{t.hits.length==0?(s.warning({title:"⛔",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l()):(g(t.hits),l())}).catch(t=>console.log(t)))});
//# sourceMappingURL=index.js.map
