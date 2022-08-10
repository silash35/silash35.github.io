(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{5110:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return t(2606)}])},2629:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var i=t(4776),r=t(7038),a=t.n(r);function c(){return(0,i.tZ)("div",{className:a().background,children:(0,i.tZ)("img",{alt:"Black background with incandescent light bulbs",src:"/images/power.webp","aria-hidden":"true"})})}var o=t(63),s=t.n(o),l=t(615),h=t(6119),d=t.n(h);function u(e){var n=e.activePage,t=e.activeClass,r=n.home,a=n.resume,c=n.portfolio,o=n.contact;return(0,i.BX)(i.HY,{children:[(0,i.tZ)("li",{className:r?t:void 0,children:(0,i.tZ)(s(),{href:"/",children:(0,i.tZ)("a",{children:"Home"})})}),(0,i.tZ)("li",{className:a?t:void 0,children:(0,i.tZ)(s(),{href:"/resume",children:(0,i.tZ)("a",{children:"Resume"})})}),(0,i.tZ)("li",{className:c?t:void 0,children:(0,i.tZ)(s(),{href:"/portfolio",children:(0,i.tZ)("a",{children:"Portfolio"})})}),(0,i.tZ)("li",{className:o?t:void 0,children:(0,i.tZ)(s(),{href:"/contact",children:(0,i.tZ)("a",{children:"Contact"})})})]})}var m=t(7409),g=t(2479),p=t.n(g);function f(e){var n=e.isOpen,t=e.setIsOpen,r=e.activePage;return(0,i.tZ)(m.Z,{isOpen:n,setIsOpen:t,buttonProps:{"aria-label":"Close Menu"},transitionClassNames:{show:p().show,hide:p().hide,none:p().none},children:(0,i.tZ)("ul",{className:p().sideBar,children:(0,i.tZ)(u,{activeClass:p().active,activePage:r})})})}function _(e){var n=(0,l.useState)(!1),t=n[0],r=n[1];return(0,i.BX)("header",{className:d().header,children:[(0,i.BX)("nav",{children:[(0,i.tZ)("button",{"aria-label":"Open Menu",className:d().sidenavTrigger,onClick:function(){return r(!0)},children:(0,i.tZ)("img",{src:"/images/icons/white/menu.svg",alt:"menu Icon",width:"32",height:"32"})}),(0,i.tZ)(s(),{href:"/",children:(0,i.tZ)("a",{className:d().logoContainer,title:"Go to home page",children:(0,i.tZ)("img",{src:"/icon.svg",alt:"Silas Henrique Icon",width:"64",height:"64"})})}),(0,i.tZ)("ul",{className:d().navLinks,children:(0,i.tZ)(u,{activeClass:d().active,activePage:e.activePage})})]}),(0,i.tZ)(f,{isOpen:t,setIsOpen:r,activePage:e.activePage})]})}var v=t(7325),Z=t.n(v),b=function(e){var n=e.children;return(0,i.tZ)("main",{className:Z().main,children:n})},k=function(e){var n=e.children,t=e.activePage;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(_,{activePage:t}),(0,i.tZ)(b,{children:n}),(0,i.tZ)(c,{})]})}},5663:function(e,n,t){"use strict";var i=t(4737),r=t(4776),a=t(615),c=t(7409),o=t(8046),s=t.n(o);n.Z=function(e){var n=e.borderRadius,t=e.className,o=e.imageProps,l=(0,a.useState)(!1),h=l[0],d=l[1];return o.onClick=function(){d(!0)},(0,r.BX)(r.HY,{children:[(0,r.tZ)("div",{style:{borderRadius:n},className:"".concat(s().imageModal," ").concat(t),children:(0,r.tZ)("img",(0,i.Z)({},o))}),(0,r.tZ)(c.Z,{isOpen:h,setIsOpen:d,buttonProps:{"aria-label":"Close Image"},transitionClassNames:{show:s().show,hide:s().hide,none:s().none},children:(0,r.tZ)("img",(0,i.Z)({className:s().OpenedImageModal},o))})]})}},7409:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var i=t(4737),r=t(8316);function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=t(4776),o=t(615),s=t(8238),l=t.n(s),h=function(e){var n=e.isOpen,t=e.setIsOpen,s=e.transitionClassNames,h=a(e,["isOpen","setIsOpen","transitionClassNames"]),d=(0,o.useState)(!1),u=d[0],m=d[1],g=(0,o.useState)("".concat(l().none," ").concat(null===s||void 0===s?void 0:s.none)),p=g[0],f=g[1];(0,o.useEffect)((function(){u&&(f("".concat(l().show," ").concat(null===s||void 0===s?void 0:s.show)),m(!1))}),[u]);return(0,o.useEffect)((function(){n?(f("".concat(l().hide," ").concat(null===s||void 0===s?void 0:s.hide)),m(!0)):(f("".concat(l().hide," ").concat(null===s||void 0===s?void 0:s.hide)),setTimeout((function(){f("".concat(l().none," ").concat(null===s||void 0===s?void 0:s.none))}),300))}),[n]),(0,c.tZ)("button",(0,r.Z)((0,i.Z)({onClick:function(){return t(!1)},className:"".concat(l().screenDarkener," ").concat(p)},h.buttonProps),{children:h.children}))}},3873:function(e,n,t){"use strict";var i=t(4776),r=t(7065),a=t.n(r);n.Z=function(e){var n=e.children;return(0,i.tZ)("h1",{className:a().title,children:n})}},2606:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var i=t(4776),r=t(4464),a=t.n(r),c=t(3873),o=t(2629),s=t(4737),l=t(5663),h=t(9259),d=t.n(h),u=function(e){var n=e.children;return(0,i.tZ)("article",{className:d().card,children:n})};u.Image=function(e){return(0,i.tZ)("section",{className:d().image,children:(0,i.tZ)(l.Z,{imageProps:(0,s.Z)({width:"384",height:"216"},e)})})},u.Content=function(e){var n=e.children;return(0,i.tZ)("section",{className:d().text,children:n})},u.Actions=function(e){var n=e.children;return(0,i.tZ)("section",{className:d().actions,children:n})};var m=u,g=t(8316),p=t(1018),f=t.n(p),_=function(e){var n=e.linkProps,t=e.imgProps;return(0,i.tZ)("a",(0,g.Z)((0,s.Z)({className:f().iconLink,rel:"noopener noreferrer",target:"_blank"},n),{children:(0,i.tZ)("img",(0,s.Z)({width:"35",height:"35"},t))}))},v=t(5568),Z=t.n(v),b=function(){return(0,i.BX)("section",{className:Z().cards,children:[(0,i.BX)(m,{children:[(0,i.tZ)(m.Image,{src:"/images/projects/opensom.webp",alt:"Screenshot the OpenSOM demo instance"}),(0,i.BX)(m.Content,{children:[(0,i.tZ)("h2",{children:"OpenSOM"}),(0,i.tZ)("p",{children:"A self-hosted, open source service order manager. With it you can register customers, create budgets, send emails and much more."})]}),(0,i.BX)(m.Actions,{children:[(0,i.tZ)(_,{linkProps:{href:"https://opensom.herokuapp.com/",title:"access the OpenSOM demo instance"},imgProps:{src:"/images/icons/white/link.svg",alt:"link icon"}}),(0,i.tZ)(_,{linkProps:{href:"https://github.com/silash35/opensom",title:"access the OpenSOM project on github"},imgProps:{src:"/images/icons/white/github.svg",alt:"GitHub icon"}})]})]}),(0,i.BX)(m,{children:[(0,i.tZ)(m.Image,{src:"/images/projects/qpdftools.webp",alt:"Picture of the Qpdf Tools program home screen"}),(0,i.BX)(m.Content,{children:[(0,i.tZ)("h2",{children:"Qpdf Tools"}),(0,i.tZ)("p",{children:"Qpdf Tools is an easy-to-use Qt interface for Ghostscript and QPDF, which makes it possible for normal users to manage their PDFs."})]}),(0,i.BX)(m.Actions,{children:[(0,i.tZ)(_,{linkProps:{href:"https://github.com/silash35/qpdftools/wiki",title:"access the Qpdf Tools documentation on github"},imgProps:{src:"/images/icons/white/description.svg",alt:"documentation icon"}}),(0,i.tZ)(_,{linkProps:{href:"https://github.com/silash35/qpdftools",title:"access the Qpdf Tools project on github"},imgProps:{src:"/images/icons/white/github.svg",alt:"GitHub icon"}})]})]}),(0,i.BX)(m,{children:[(0,i.tZ)(m.Image,{src:"/images/projects/alis.webp",alt:"Screen shot of a QTotem question"}),(0,i.BX)(m.Content,{children:[(0,i.tZ)("h2",{children:"ALIS"}),(0,i.tZ)("p",{children:"An aggregator of accessible places for the deaf, such as stores with attendants who can speak ASL (American Sign Language)."})]}),(0,i.BX)(m.Actions,{children:[(0,i.tZ)(_,{linkProps:{href:"https://alis.vercel.app/",title:"access the ALIS page"},imgProps:{src:"/images/icons/white/link.svg",alt:"link icon"}}),(0,i.tZ)(_,{linkProps:{href:"https://github.com/silash35/ALIS",title:"access the ALIS project on github"},imgProps:{src:"/images/icons/white/github.svg",alt:"GitHub icon"}})]})]})]})},k=function(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(a(),{children:(0,i.tZ)("title",{children:"Portfolio"})}),(0,i.tZ)(c.Z,{children:"Some Things I\u2019ve Built"}),(0,i.tZ)(b,{})]})};k.getLayout=function(e){return(0,i.tZ)(o.Z,{activePage:{portfolio:!0},children:e})};var w=k},7038:function(e){e.exports={background:"background_background__7LEcH"}},6119:function(e){e.exports={header:"header_header__5Kp8v",sidenavTrigger:"header_sidenavTrigger__fkcGQ",navLinks:"header_navLinks__iqxDQ",active:"header_active__XjKfg"}},2479:function(e){e.exports={sideBar:"sidebar_sideBar__bPqpL",show:"sidebar_show__R2G05",hide:"sidebar_hide__tfItl",none:"sidebar_none__P9YrU",active:"sidebar_active__WOucQ"}},7325:function(e){e.exports={main:"main_main__dba_o"}},8046:function(e){e.exports={imageModal:"imageModal_imageModal__MrqX6",OpenedImageModal:"imageModal_OpenedImageModal__ZEdHm",show:"imageModal_show__3_hwy",hide:"imageModal_hide__yg2Ds",none:"imageModal_none__l9Mzl"}},8238:function(e){e.exports={screenDarkener:"screenDarkener_screenDarkener__RsycX",show:"screenDarkener_show__7ZWre",hide:"screenDarkener_hide__GmKqc",none:"screenDarkener_none__bs6pY"}},7065:function(e){e.exports={title:"title_title__TZl8Y"}},9259:function(e){e.exports={card:"card_card__CWJkJ",image:"card_image__hqGVA",text:"card_text__ghE7B",actions:"card_actions__CqmP_"}},1018:function(e){e.exports={iconLink:"iconLink_iconLink__egott"}},5568:function(e){e.exports={cards:"portfolioCards_cards__zXm5M"}}},function(e){e.O(0,[386,774,888,179],(function(){return n=5110,e(e.s=n);var n}));var n=e.O();_N_E=n}]);