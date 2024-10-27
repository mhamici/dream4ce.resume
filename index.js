import{i as I,S,a as O,A}from"./assets/vendor-DFi10nYr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();let n=[],c=0;async function C(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Помилка сервера");n=await e.json(),console.log(n),b(n)}catch(e){console.error(e),I.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте пізніше."}),document.querySelector(".menu-reviews").innerHTML='<li class="menu-item-reviews">Not found</li>'}}function b(e){const t=document.querySelector(".menu-reviews");t.innerHTML="",e.slice(c,c+2).forEach(o=>{const s=`
      <li class="menu-item-reviews">
        <p class="para-reviews">${o.review}</p>
        <div class="container-reviews">
          <img class="feat-icon" src="${o.avatar_url}" alt="${o.author}">
          <p class="para-img">${o.author}</p>
        </div>
      </li>
    `;t.innerHTML+=s}),G()}function G(){const e=document.querySelector(".icon-arrow-rigth"),t=document.querySelector(".icon-arrow-left");c+2>=n.length?(e.classList.add("icon-disabled"),e.classList.remove("icon-active")):(e.classList.remove("icon-disabled"),e.classList.add("icon-active")),c<=0?(t.classList.add("icon-disabled"),t.classList.remove("icon-active")):(t.classList.remove("icon-disabled"),t.classList.add("icon-active"))}function N(){const e=document.querySelector(".icon-arrow-rigth"),t=document.querySelector(".icon-arrow-left");e.addEventListener("click",()=>{c+2<n.length&&(c+=2,b(n))}),t.addEventListener("click",()=>{c-2>=0&&(c-=2,b(n))})}C();N();const $=document.getElementById("menu-open-btn"),P=document.querySelector("[data-menu-button-close]"),j=document.querySelector(".mob-menu");function F(){j.classList.add("is-open"),document.body.style.overflow="hidden"}function T(){j.classList.remove("is-open"),document.body.style.overflow="auto"}$.addEventListener("click",F);P.addEventListener("click",T);const H=document.querySelectorAll(".mob-nav-link");H.forEach(e=>{e.addEventListener("click",T)});const k=document.getElementById("change-theme");localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),document.querySelector("header").classList.add("dark-theme"),k.checked=!0);k.addEventListener("change",function(){k.checked?(document.body.classList.add("dark-theme"),document.querySelector("header").classList.add("dark-theme"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-theme"),document.querySelector("header").classList.remove("dark-theme"),localStorage.setItem("theme","light"))});document.getElementById("theme-toggle");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="dark"&&document.body.classList.add("dark-theme")});const l=document.querySelector(".scroll-btn");let p=0,v=!0;window.addEventListener("scroll",e=>{let t=window.scrollY;t<p&&v?(l.classList.add("is-active-scroll"),v=!1):t>p&&!v?(l.classList.remove("is-active-scroll"),v=!0):t===0&&l.classList.remove("is-active-scroll"),p=t<=0?0:t});l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),l.classList.remove("is-active-scroll")});const u=document.querySelector(".work-backdrop"),Q=document.querySelector(".work-modal-close"),L=document.querySelector(".work-form"),i=document.querySelector(".work-input"),y=document.querySelector(".work-message"),g=document.querySelector(".work-success-icon"),d=document.querySelector(".error-input"),f=document.querySelector(".work-loader"),w=document.querySelector(".error-input-msg");Q.addEventListener("click",()=>{u.classList.add("visually-hidden"),document.body.style.overflow="auto"});window.addEventListener("keydown",e=>{e.key==="Escape"&&(u.classList.add("visually-hidden"),document.body.style.overflow="auto")});u.addEventListener("click",e=>{u.classList.add("visually-hidden"),document.body.style.overflow="auto"});document.addEventListener("DOMContentLoaded",()=>{const e=S({origin:"bottom",distance:"50px",duration:2e3,delay:0,reset:!1});[".work-text",".work-list",".work-bg",".work-right"].forEach((a,o)=>e.reveal(a,{delay:200+o*100}))});const D=()=>{if(i.validity.valid)return g.style.display="block",d.style.display="none",!0;g.style.display="none",i.value===""&&(g.style.display="none"),i!==""&&!i.validity.valid&&(d.style.display="block",d.textContent="Invalid email, try again")};i.addEventListener("input",D);L.addEventListener("submit",async e=>{if(e.preventDefault(),i.value.trim()===""){d.style.display="block",d.textContent="All fields must be filled";return}if(y.value.trim()===""){w.style.display="block";return}else w.style.display="none";if(i.value.trim()!==""&&y.value.trim()!==""&&D()){f.classList.remove("visually-hidden");const t={email:i.value.trim(),comment:y.value.trim()};try{const a=await O.post("https://portfolio-js.b.goit.study/api/requests",t);f.classList.remove("visually-hidden"),u.classList.remove("visually-hidden"),l.classList.remove("is-active-scroll"),document.body.style.overflow="hidden";const o=document.querySelector(".work-modal-title"),s=document.querySelector(".work-modal-text");o.textContent=a.data.title,s.textContent=a.data.message,d.style.display="none",g.style.display="none",L.reset(),f.classList.add("visually-hidden")}catch(a){console.log(a),f.classList.add("visually-hidden"),I.error({message:a.message,title:"Error",position:"center",timeout:2e3,overlay:!0,color:"#f24d4c",image:"linear-gradient(to right, #f24d4c55, #22242F 30% )"})}}});const Y=document.querySelector(".faq-content-list");new A(Y,{duration:600,showMultiple:!1,openOnInit:[0]});const x=document.querySelectorAll(".ac-faq-title");x.forEach(e=>{e.addEventListener("click",function(){x.forEach(o=>{if(o!==e){const s=o.querySelector(".faq-item-icon"),r=o.nextElementSibling;s.classList.remove("faq-is-active"),r.classList.add("hidden")}});const t=e.querySelector(".faq-item-icon"),a=e.nextElementSibling;t.classList.toggle("faq-is-active"),a.classList.toggle("hidden")}),document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".hidden-element"),a=new IntersectionObserver((o,s)=>{o.forEach(r=>{r.isIntersecting&&(r.target.classList.add("visible-element"),s.unobserve(r.target))})});t.forEach(o=>{a.observe(o)})})});const U="/dream4ce.resume/assets/maneger-finance-2He33Q2A.avif",W="/dream4ce.resume/assets/maneger-finance-2x-B6-evgUi.avif",V="/dream4ce.resume/assets/vegetables-DR2RoQ1G.avif",Z="/dream4ce.resume/assets/vegetables-2x-Dy6sjMVY.avif",_="/dream4ce.resume/assets/discover-DeqYDVGB.avif",z="/dream4ce.resume/assets/discover-2x-wiEc02RF.avif",K="/dream4ce.resume/assets/transform-your-DxA74bH6.avif",X="/dream4ce.resume/assets/transform-your-2x-OkqVjb4Q.avif",ee="/dream4ce.resume/assets/traditions-ukarain-2oc9lilg.avif",te="/dream4ce.resume/assets/traditions-ukarain-2x-DderEc6f.avif",se="/dream4ce.resume/assets/get-body-DQQxb0i1.avif",oe="/dream4ce.resume/assets/get-body-2x-P9AI9cLf.avif",re="/dream4ce.resume/assets/mimino-CZZ8r4U2.avif",ae="/dream4ce.resume/assets/mimino-2x-Cm_-1A12.avif",ce="/dream4ce.resume/assets/brand-CdxdCGtM.avif",ie="/dream4ce.resume/assets/brand-2x-KqqWAPLi.avif",ne="/dream4ce.resume/assets/fresh-CS4zHlp6.avif",le="/dream4ce.resume/assets/fresh-2x--tY9N8QL.avif",de="/dream4ce.resume/assets/turn-your-tIQOGBgQ.avif",me="/dream4ce.resume/assets/turn-your-2x-jlDZux0X.avif",ue="/dream4ce.resume/assets/icons-D82s-bJO.svg",q=[{title:"Wallet Webservice",image:U,image2x:W,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Wallet Webservice Project"},{title:"Green harvest webservice",image:V,image2x:Z,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Green harvest"},{title:"English Exellence webservice",image:_,image2x:z,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"English Exellence"},{title:"Transform your webservice",image:K,image2x:X,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Transform your"},{title:"Ukraine traditions webservice",image:ee,image2x:te,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Ukraine traditions"},{title:"Stay Healthy webservice",image:se,image2x:oe,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Stay Healthy"},{title:"Mimino webservice",image:re,image2x:ae,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Mimino"},{title:"Transformation with a Touch of the Brush webservice",image:ce,image2x:ie,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Transformation with a Touch of the Brush"},{title:"Fresh harvest box webservice",image:ne,image2x:le,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Fresh harvest box"},{title:"Transform your business webservice",image:de,image2x:me,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/alex-usenko325/project-Dream4ce",alt:"Transform your business"}];let h=0;const E=3;function R(){const e=document.querySelector(".project-list"),a=q.slice(h,h+E).map(({image:s,image2x:r,alt:m,techStack:J,title:B,link:M,svg:ve},fe)=>`
            <li class="project-item">
                <img  srcset="${s} 1x, ${r} 2x" src="${s}"  alt="${m}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${J}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${B}</h3>
                        <div class="centered">
                                <a href="${M}" class="project-link" target="_blank">VISIT
                                 <svg class="project-icon" width="15" height="15">
                                        <use href="${ue}#icon-vector"></use>
                                    </svg>
                                </a>
                                
                        </div>
                    </div>
                </div>
            </li>
            `).join("");e.innerHTML+=a,document.querySelectorAll(".project-item:not(.show)").forEach((s,r)=>{setTimeout(()=>{s.classList.add("show")},r*200)}),h+=E,h>=q.length&&(document.querySelector(".load-more").style.display="none")}document.querySelector(".load-more").addEventListener("click",R);R();document.addEventListener("DOMContentLoaded",()=>{const e=S({origin:"bottom",distance:"50px",duration:1400,delay:0,reset:!0});[".hero-bg-wrapper",".title-names-one",".img-hero-people",".title-names-two",".hero-button-link",".text-hero"].forEach((a,o)=>e.reveal(a,{delay:200+o*100}))});document.addEventListener("DOMContentLoaded",()=>{const e=S({origin:"bottom",distance:"50px",duration:1400,delay:0,reset:!1});[".benefits-title",".benefits-list"].forEach(a=>e.reveal(a,{delay:200}))});
//# sourceMappingURL=index.js.map
