!function(){var e=(e,t)=>{window[e]=t};const t=document.querySelector(".navLinks"),o=document.querySelector(".screenDarkener");function i(){const e=t.getElementsByTagName("li");let o=document.querySelector("title").innerText;"Silas Henrique"==o&&(o="Home");for(let t=0;t<e.length;++t)o.toUpperCase()==e[t].innerText&&e[t].classList.add("active")}e("closeElement",(e=>{const t=document.getElementById(e);t.style.opacity="0",setTimeout((()=>{t.style.visibility="collapse"}),300)})),document.querySelector("body").onload=i,e("openSidenav",(()=>{t.style.left="0px",o.style.visibility="visible",o.style.opacity=".2"})),e("closeSidenav",(()=>{t.style.left="-300px",o.style.opacity="0",setTimeout((function(){o.style.visibility="collapse"}),300)})),e("goToCurriculum",(()=>{const e=navigator.language||navigator.userLanguage;"p"==e[0]&&"t"==e[1]?window.location.pathname="/curriculo.html":window.location.pathname="/curriculum.html"}))}();
//# sourceMappingURL=resume.c88c5d5e.js.map