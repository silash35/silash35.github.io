(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5019:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2649)}])},9470:function(e,t,n){"use strict";var r=n(8354),i=n(6577),a=n(1011),c=n(9657),o=n.n(c);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}t.Z=function(e){var t=e.borderRadius,n=e.className,c=e.imageProps,s=(0,i.useState)(!1),u=s[0],d=s[1];return c.onClick=function(){d(!0)},(0,r.BX)(r.HY,{children:[(0,r.tZ)("div",{style:{borderRadius:t},className:"".concat(o().imageModal," ").concat(n),children:(0,r.tZ)("img",l({},c))}),(0,r.tZ)(a.Z,{isOpen:u,setIsOpen:d,buttonProps:{"aria-label":"Close Image"},transitionClassNames:{enter:o().enter,enterActive:o().enterActive,enterDone:o().enterDone,exit:o().exit,exitActive:o().exitActive},children:(0,r.tZ)("img",l({className:o().OpenedImageModal},c))})]})}},1011:function(e,t,n){"use strict";var r=n(8354),i=n(6577),a=n(1108),c=n(106),o=n.n(c);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){var t=e.isOpen,n=e.setIsOpen,c=e.transitionClassNames,s=u(e,["isOpen","setIsOpen","transitionClassNames"]),d=(0,i.useRef)(null);return(0,r.tZ)(a.Z,{in:t,timeout:300,nodeRef:d,unmountOnExit:!0,classNames:{enter:"".concat(o().enter," ").concat(null===c||void 0===c?void 0:c.enter),enterActive:"".concat(o().enterActive," ").concat(null===c||void 0===c?void 0:c.enterActive),enterDone:"".concat(o().enterDone," ").concat(null===c||void 0===c?void 0:c.enterDone),exit:"".concat(o().exit," ").concat(null===c||void 0===c?void 0:c.exit),exitActive:"".concat(o().exitActive," ").concat(null===c||void 0===c?void 0:c.exitActive)},children:(0,r.tZ)("button",l({ref:d,onClick:function(){return n(!1)},className:o().screenDarkener},s.buttonProps,{children:s.children}))})}},8033:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(8354),i=n(8049),a=n.n(i);function c(){return(0,r.tZ)("div",{className:a().background,children:(0,r.tZ)("img",{alt:"Black background with incandescent light bulbs",src:"/images/power.webp","aria-hidden":"true"})})}var o=n(2720),s=n(6577),l=n(3768),u=n.n(l);function d(e){var t=e.activePage,n=e.activeClass,i=t.home,a=t.resume,c=t.portfolio,s=t.contact;return(0,r.BX)(r.HY,{children:[(0,r.tZ)("li",{className:i?n:void 0,children:(0,r.tZ)(o.default,{href:"/",children:(0,r.tZ)("a",{children:"Home"})})}),(0,r.tZ)("li",{className:a?n:void 0,children:(0,r.tZ)(o.default,{href:"/resume",children:(0,r.tZ)("a",{children:"Resume"})})}),(0,r.tZ)("li",{className:c?n:void 0,children:(0,r.tZ)(o.default,{href:"/portfolio",children:(0,r.tZ)("a",{children:"Portfolio"})})}),(0,r.tZ)("li",{className:s?n:void 0,children:(0,r.tZ)(o.default,{href:"/contact",children:(0,r.tZ)("a",{children:"Contact"})})})]})}var _=n(1011),v=n(6310),h=n.n(v);function f(e){var t=e.isOpen,n=e.setIsOpen,i=e.activePage;return(0,r.tZ)(_.Z,{isOpen:t,setIsOpen:n,buttonProps:{"aria-label":"Close Menu"},transitionClassNames:{enter:h().enter,enterActive:h().enterActive,enterDone:h().enterDone,exit:h().exit,exitActive:h().exitActive},children:(0,r.tZ)("ul",{className:h().sideBar,children:(0,r.tZ)(d,{activeClass:h().active,activePage:i})})})}function m(e){var t=(0,s.useState)(!1),n=t[0],i=t[1];return(0,r.BX)("header",{className:u().header,children:[(0,r.BX)("nav",{children:[(0,r.tZ)("button",{"aria-label":"Open Menu",className:u().sidenavTrigger,onClick:function(){return i(!0)},children:(0,r.tZ)("img",{src:"/images/icons/white/menu.svg",alt:"menu Icon",width:"32",height:"32"})}),(0,r.tZ)(o.default,{href:"/",children:(0,r.tZ)("a",{className:u().logoContainer,title:"Go to home page",children:(0,r.tZ)("img",{src:"/icon.svg",alt:"Silas Henrique Icon",width:"64",height:"64"})})}),(0,r.tZ)("ul",{className:u().navLinks,children:(0,r.tZ)(d,{activeClass:u().active,activePage:e.activePage})})]}),(0,r.tZ)(f,{isOpen:n,setIsOpen:i,activePage:e.activePage})]})}var g=n(9690),p=n.n(g),b=function(e){var t=e.children;return(0,r.tZ)("main",{className:p().main,children:t})},Z=function(e){var t=e.children,n=e.activePage;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(m,{activePage:n}),(0,r.tZ)(b,{children:t}),(0,r.tZ)(c,{})]})}},2649:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(8354),i=n(2102),a=n(9470),c=n(9523),o=n.n(c),s=function(){return(0,r.BX)("article",{className:o().presentation,children:[(0,r.tZ)("section",{className:"presentationPhoto imageModal",children:(0,r.tZ)(a.Z,{borderRadius:"50%",imageProps:{src:"/images/profile.webp",alt:"Photo of silas Henrique Alves Ara\xfajo",width:"256",height:"256"}})}),(0,r.BX)("section",{className:o().presentationText,children:[(0,r.tZ)("h1",{children:"Silas Henrique"}),(0,r.tZ)("p",{children:"Free software enthusiast"}),(0,r.tZ)("p",{children:"Front-end Developer"}),(0,r.tZ)("p",{children:"C++ Programmer"}),(0,r.tZ)("p",{children:"Technician in Electromechanics"})]})]})},l=n(8033),u=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(i.default,{children:(0,r.tZ)("title",{children:"Silas Henrique"})}),(0,r.tZ)(s,{})]})};u.getLayout=function(e){return(0,r.tZ)(l.Z,{activePage:{home:!0},children:e})};var d=u},9657:function(e){e.exports={imageModal:"imageModal_imageModal__0uF7J",OpenedImageModal:"imageModal_OpenedImageModal__nKGka",enter:"imageModal_enter__8Th8e",enterActive:"imageModal_enterActive__NaZnW",enterDone:"imageModal_enterDone__Y90Sj",exit:"imageModal_exit__O_RTb",exitActive:"imageModal_exitActive__bMZav"}},106:function(e){e.exports={screenDarkener:"screenDarkener_screenDarkener__mz1CS",enter:"screenDarkener_enter__s_G6z",enterActive:"screenDarkener_enterActive__yVXDB",enterDone:"screenDarkener_enterDone__tHV2O",exit:"screenDarkener_exit__T5Tmp",exitActive:"screenDarkener_exitActive__deBZy"}},9523:function(e){e.exports={presentation:"presentation_presentation__3kaz5",presentationText:"presentation_presentationText__fWCdu"}},8049:function(e){e.exports={background:"background_background__jzj_W"}},3768:function(e){e.exports={header:"header_header__zXy1G",sidenavTrigger:"header_sidenavTrigger__ag_8a",navLinks:"header_navLinks__klZSE",active:"header_active__A3R_B"}},6310:function(e){e.exports={sideBar:"sidebar_sideBar__008GK",enter:"sidebar_enter__UC7aN",enterActive:"sidebar_enterActive__T6LKq",enterDone:"sidebar_enterDone__mSjRB",exit:"sidebar_exit___GgGK",exitActive:"sidebar_exitActive__F0k6Y",active:"sidebar_active__J2O0J"}},9690:function(e){e.exports={main:"main_main___i3bt"}}},function(e){e.O(0,[545,888,179],(function(){return t=5019,e(e.s=t);var t}));var t=e.O();_N_E=t}]);