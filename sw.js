if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const r=e=>s(e,c),t={module:{uri:c},exports:o,require:r};i[c]=Promise.all(a.map((e=>t[e]||r(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3d9e5b44"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WMhwqSFoEb74AbidM7nJ5/_buildManifest.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/WMhwqSFoEb74AbidM7nJ5/_middlewareManifest.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/WMhwqSFoEb74AbidM7nJ5/_ssgManifest.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/545-d9c65efb56ad639d.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/622-e6a16f9f22f4b137.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/749-7014250588fd27a7.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/main-aac090f73e13bd10.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/pages/_app-4c6dca43429a5e83.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/pages/_error-5124cf05d643af1e.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/pages/contact-c3dd0b54e414d5c5.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/pages/curriculo-cb3c3cd99221e84b.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/pages/curriculum-34d180bfbaac5806.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/pages/index-72aef188e21a2192.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/pages/portfolio-63b24de1081c7b07.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/pages/resume-5e0a3e5faccf04bf.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/css/61a0fb3d95e26408.css",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/css/66ea4b6cca620cc7.css",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/css/8833729e586f87cb.css",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/css/b299584bdd8e2b22.css",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/css/d16c573bb1e37ef6.css",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/_next/static/css/de6356640d3b2e33.css",revision:"WMhwqSFoEb74AbidM7nJ5"},{url:"/card.png",revision:"3867fa22a30d6d0821b44c4b3a645e97"},{url:"/favicon.ico",revision:"a553a54baa997dfb9de96a6670a34aae"},{url:"/fonts/roboto-v29-latin-300.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"/fonts/roboto-v29-latin-300.woff2",revision:"80fe119e5efa3911b9d61b265f723b3d"},{url:"/fonts/roboto-v29-latin-500.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"/fonts/roboto-v29-latin-500.woff2",revision:"f00e7e4432f7c70d8c97efbe2c50d43b"},{url:"/fonts/roboto-v29-latin-700.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"/fonts/roboto-v29-latin-700.woff2",revision:"bf28241e67511184c14dbd0ef7d39f91"},{url:"/fonts/roboto-v29-latin-regular.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"/fonts/roboto-v29-latin-regular.woff2",revision:"aa23b7b4bcf2b8f0e876106bb3de69c6"},{url:"/google0b9f4b250a67ac0e.html",revision:"f1f324a9a4ab6f9503aa4f733ecfaeb6"},{url:"/icon.svg",revision:"891840cf37fd67d97f0aa2dbb74266d1"},{url:"/icons/android-chrome-192x192.png",revision:"f3eca6735dd951738c9356e3b14a7cb0"},{url:"/icons/android-chrome-512x512.png",revision:"75c5caa5b9a2d26ea9b51fd6f44fee34"},{url:"/icons/apple-touch-icon.png",revision:"7f982b763a837c9eca819e7602c5de25"},{url:"/icons/browserconfig.xml",revision:"844224b3cc8cd356b326c1f61eb8ebe5"},{url:"/icons/favicon-16x16.png",revision:"c0de141281c912c861c92c6c51ba4908"},{url:"/icons/favicon-32x32.png",revision:"129f4363fc48d586e1a5469d120cc9d9"},{url:"/icons/favicon.ico",revision:"a553a54baa997dfb9de96a6670a34aae"},{url:"/icons/maskable/maskable_icon.png",revision:"72457c1f80625e978702d1772adb9f81"},{url:"/icons/maskable/maskable_icon_x128.png",revision:"cd29f7ba52d95e6d8a5b3c0a623987e8"},{url:"/icons/maskable/maskable_icon_x192.png",revision:"2b176de995b396aa22fdb77003c5c39e"},{url:"/icons/maskable/maskable_icon_x384.png",revision:"d63a88fad5729d304dac7f670258b661"},{url:"/icons/maskable/maskable_icon_x48.png",revision:"a2bc725905779fb7be99d163dae8ab0f"},{url:"/icons/maskable/maskable_icon_x512.png",revision:"d157071be1276e0ced45e64cf15777d1"},{url:"/icons/maskable/maskable_icon_x72.png",revision:"81b09f050520c2dc17787635199d1005"},{url:"/icons/maskable/maskable_icon_x96.png",revision:"acecc95eecaf367c655a1bd3ac70daaa"},{url:"/icons/mstile-144x144.png",revision:"239c538372a2211c080468d26ad0f9e9"},{url:"/icons/mstile-150x150.png",revision:"801e473af5ab4b84dba5847e660fecb4"},{url:"/icons/mstile-310x150.png",revision:"0965d17897260e5559b7924cd5d15bdb"},{url:"/icons/mstile-310x310.png",revision:"3b1e86752e2ca3ebee50fb46d11e5a4b"},{url:"/icons/mstile-70x70.png",revision:"1fca0cf795534f072ceecf6671a35259"},{url:"/icons/safari-pinned-tab.svg",revision:"39ae517cacca25dd41ba73f7b4b54159"},{url:"/icons/site.webmanifest",revision:"a98294b893919307f25627990b994337"},{url:"/images/icons/black/cake-variant.svg",revision:"2880fa9e28d4fcf75c01213ad9a4532d"},{url:"/images/icons/black/description.svg",revision:"5198d5d81b2c33f9cf258a64b6a03f03"},{url:"/images/icons/black/email.svg",revision:"7a349497aef715910c3813e342e98d2c"},{url:"/images/icons/black/github.svg",revision:"1b1dd03f6e5a992868c812e355bca4f4"},{url:"/images/icons/black/icon.svg",revision:"302cffe9fcb82dbe2148d50154b60bbc"},{url:"/images/icons/black/instagram.svg",revision:"7aa9e8f5d0a6ae6b95e3c1b92a995761"},{url:"/images/icons/black/link.svg",revision:"98f4f6841f3d482b15c3a9d79c8db50f"},{url:"/images/icons/black/map-marker.svg",revision:"6aa36ac6ae2f0d96448e2e476d4272eb"},{url:"/images/icons/black/menu.svg",revision:"c8a278bbdfec39534778da9ae956c83e"},{url:"/images/icons/black/phone.svg",revision:"a33922ae04a06e014a39ea6defdde481"},{url:"/images/icons/black/send.svg",revision:"546bd80fa2cb3a0c48adea035b99e8ad"},{url:"/images/icons/black/twitter.svg",revision:"b6984c16c964495e28af3323565f9ef4"},{url:"/images/icons/black/whatsapp.svg",revision:"22a6b80f12cbf0b7ee8fccbfeb0a3382"},{url:"/images/icons/white/cake-variant.svg",revision:"c61a3e7d9402f3b5fb8c32f272f03df5"},{url:"/images/icons/white/description.svg",revision:"5e14b8cdca7ff498f1da4b528589596b"},{url:"/images/icons/white/email.svg",revision:"1e2517c890452e4f5e100a70edee9e37"},{url:"/images/icons/white/github.svg",revision:"6b1276a07e98e29db80334738b123fc1"},{url:"/images/icons/white/icon.svg",revision:"b38d2a37cefe83679b25f5e4f5585af4"},{url:"/images/icons/white/instagram.svg",revision:"b90c3979e7f2cbb65175205b88135fdd"},{url:"/images/icons/white/link.svg",revision:"2aae185b877fd1675277331663207433"},{url:"/images/icons/white/map-marker.svg",revision:"943608587f522a3955a9a6f20e0841ee"},{url:"/images/icons/white/menu.svg",revision:"63b2558806b2dc66179af1be385c44bc"},{url:"/images/icons/white/phone.svg",revision:"ca1e40edacef5d4bb9479fa048c3a672"},{url:"/images/icons/white/send.svg",revision:"4144c9c35c9dc46a7283b60d34fe9c63"},{url:"/images/icons/white/twitter.svg",revision:"e672406aa67744f77a4136d7b10c1414"},{url:"/images/icons/white/whatsapp.svg",revision:"e3488807a9b2818d2ba3a55e00c2b392"},{url:"/images/power.webp",revision:"0427d4e442d5650e86b20896df45a7e1"},{url:"/images/profile.webp",revision:"a448d8b12c42547ceddda12ffd1d9dfc"},{url:"/images/projects/alis.webp",revision:"d77395d2026c1aeace46935d258b6c4a"},{url:"/images/projects/qpdftools.webp",revision:"d460a8defa58fa50508c822695d5b731"},{url:"/images/projects/qtotem.webp",revision:"a92bec3d5f668d9dacb70776bb4e9091"},{url:"/images/projects/size.xcf",revision:"35147c86dacaab003e17a6cdb188fb82"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));