!function(){var e=(e,t)=>{window[e]=t};const t=document.querySelector(".navLinks"),i=document.querySelector(".screenDarkener");var a=()=>{!function(){const e=t.getElementsByTagName("li");let i=document.querySelector("title").innerText;"Silas Henrique"==i&&(i="Home");for(let t=0;t<e.length;++t)i.toUpperCase()==e[t].innerText&&e[t].classList.add("active")}(),e("openSidenav",(()=>{t.style.transform="translateX(300px)",i.style.visibility="visible",i.style.opacity=".2"})),e("closeSidenav",(()=>{t.style.transform="translateX(0)",i.style.opacity="0",setTimeout((function(){i.style.visibility="collapse"}),300)})),window.matchMedia("(min-width: 800px)").addEventListener("change",(e=>{e.matches&&closeSidenav()}))};window.addEventListener("load",(function(){a(),(()=>{if("serviceWorker"in navigator){const e="/service-worker.js";navigator.serviceWorker.register(e)}})(),e("closeDialog",(e=>{const t=document.getElementById(e);t.style.opacity="0",setTimeout((()=>{t.style.visibility="collapse"}),300)})),document.querySelectorAll(".imageModal").forEach((e=>{e.addEventListener("click",(()=>{(e=>{e.classList.contains("imageModal")?(e.classList.remove("imageModal"),e.id="imageModal_opened"):(e.id="",e.classList.add("imageModal"))})(e)}))}))})),e("goToCurriculum",(()=>{const e=navigator.language||navigator.userLanguage;"p"==e[0]&&"t"==e[1]?window.location.pathname="/curriculo.html":window.location.pathname="/curriculum.html"}))}();
//# sourceMappingURL=resume.974d9959.js.map