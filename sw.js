if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const f=e=>s(e,n),r={module:{uri:n},exports:t,require:f};a[n]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0c035fbd99ba73f5517317e6330085de"},{url:"/_next/static/4EE7PeZ5X5JgxF9clFlO-/_buildManifest.js",revision:"b9e19f8177dba1132a835d5a0c07f5cb"},{url:"/_next/static/4EE7PeZ5X5JgxF9clFlO-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203-8c0ac1afce3b24c8.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/583-8151cd865fa95b8d.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/7e3e0cd5-ea3b421f95255696.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/883-c63277e42ea4f589.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/(curriculum)/curriculo/page-6bb474cf2db23989.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/(curriculum)/curriculum/page-595c0beb6f4d270e.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/(curriculum)/layout-6c6316576c3acc00.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/(main)/contact/page-2a56e2d0c64ef787.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/(main)/layout-f0b11f2b1ea56860.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/(main)/page-ba806bddd6ce0bf1.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/(main)/portfolio/page-ea44d0c37609fdb8.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/(main)/resume/page-6e0c15e71a0dadf0.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/_not-found-5f4836e968e154c5.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/app/layout-efe35a6c785b7aae.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/main-app-875a190093b5243f.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/main-c89c9cb3302429e0.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/pages/_app-f518ba3728996135.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/pages/_error-4b1238d2d7e5e75a.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1de0f6966337d743.js",revision:"4EE7PeZ5X5JgxF9clFlO-"},{url:"/_next/static/css/311fdfc97d80df4e.css",revision:"311fdfc97d80df4e"},{url:"/_next/static/css/49cfbcde982c2574.css",revision:"49cfbcde982c2574"},{url:"/_next/static/css/512265e442081b63.css",revision:"512265e442081b63"},{url:"/_next/static/css/6d5e8f43541cf695.css",revision:"6d5e8f43541cf695"},{url:"/_next/static/css/7e1100a6d50ab38f.css",revision:"7e1100a6d50ab38f"},{url:"/_next/static/css/a5dcf8597dd6dec6.css",revision:"a5dcf8597dd6dec6"},{url:"/_next/static/css/fa9bc0aba1857edf.css",revision:"fa9bc0aba1857edf"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/44c3f6d12248be7f-s.woff2",revision:"705e5297b1a92dac3b13b2705b7156a7"},{url:"/_next/static/media/4a8324e71b197806-s.woff2",revision:"5fba57b10417c946c556545c9f348bbd"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/71ba03c5176fbd9c-s.woff2",revision:"2effa1fe2d0dff3e7b8c35ee120e0d05"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/7d8c9b0ca4a64a5a-s.p.woff2",revision:"0772a436bbaaaf4381e9d87bab168217"},{url:"/_next/static/media/83e4d81063b4b659-s.woff2",revision:"bd30db6b297b76f3a3a76f8d8ec5aac9"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/bd976642b4f7fd99-s.woff2",revision:"cc0ffafe16e997fe75c32c5c6837e781"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/de9eb3a9f0fa9e10-s.woff2",revision:"7155c037c22abdc74e4e6be351c0593c"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/card.png",revision:"3867fa22a30d6d0821b44c4b3a645e97"},{url:"/google0b9f4b250a67ac0e.html",revision:"f1f324a9a4ab6f9503aa4f733ecfaeb6"},{url:"/icons/android-chrome-192x192.png",revision:"f3eca6735dd951738c9356e3b14a7cb0"},{url:"/icons/android-chrome-512x512.png",revision:"75c5caa5b9a2d26ea9b51fd6f44fee34"},{url:"/icons/maskable/maskable_icon_1024x1024.png",revision:"72457c1f80625e978702d1772adb9f81"},{url:"/icons/maskable/maskable_icon_128x128.png",revision:"cd29f7ba52d95e6d8a5b3c0a623987e8"},{url:"/icons/maskable/maskable_icon_192x192.png",revision:"2b176de995b396aa22fdb77003c5c39e"},{url:"/icons/maskable/maskable_icon_384x384.png",revision:"d63a88fad5729d304dac7f670258b661"},{url:"/icons/maskable/maskable_icon_48x48.png",revision:"a2bc725905779fb7be99d163dae8ab0f"},{url:"/icons/maskable/maskable_icon_512x512.png",revision:"d157071be1276e0ced45e64cf15777d1"},{url:"/icons/maskable/maskable_icon_72x72.png",revision:"81b09f050520c2dc17787635199d1005"},{url:"/icons/maskable/maskable_icon_96x96.png",revision:"acecc95eecaf367c655a1bd3ac70daaa"},{url:"/icons/safari-pinned-tab.svg",revision:"39ae517cacca25dd41ba73f7b4b54159"},{url:"/images/icons/black/cake-variant.svg",revision:"2880fa9e28d4fcf75c01213ad9a4532d"},{url:"/images/icons/black/description.svg",revision:"5198d5d81b2c33f9cf258a64b6a03f03"},{url:"/images/icons/black/email.svg",revision:"7a349497aef715910c3813e342e98d2c"},{url:"/images/icons/black/github.svg",revision:"1b1dd03f6e5a992868c812e355bca4f4"},{url:"/images/icons/black/icon.svg",revision:"302cffe9fcb82dbe2148d50154b60bbc"},{url:"/images/icons/black/instagram.svg",revision:"7aa9e8f5d0a6ae6b95e3c1b92a995761"},{url:"/images/icons/black/link.svg",revision:"98f4f6841f3d482b15c3a9d79c8db50f"},{url:"/images/icons/black/map-marker.svg",revision:"6aa36ac6ae2f0d96448e2e476d4272eb"},{url:"/images/icons/black/menu.svg",revision:"c8a278bbdfec39534778da9ae956c83e"},{url:"/images/icons/black/phone.svg",revision:"a33922ae04a06e014a39ea6defdde481"},{url:"/images/icons/black/send.svg",revision:"546bd80fa2cb3a0c48adea035b99e8ad"},{url:"/images/icons/black/twitter.svg",revision:"b6984c16c964495e28af3323565f9ef4"},{url:"/images/icons/black/whatsapp.svg",revision:"22a6b80f12cbf0b7ee8fccbfeb0a3382"},{url:"/images/icons/white/cake-variant.svg",revision:"c61a3e7d9402f3b5fb8c32f272f03df5"},{url:"/images/icons/white/description.svg",revision:"5e14b8cdca7ff498f1da4b528589596b"},{url:"/images/icons/white/email.svg",revision:"1e2517c890452e4f5e100a70edee9e37"},{url:"/images/icons/white/github.svg",revision:"6b1276a07e98e29db80334738b123fc1"},{url:"/images/icons/white/icon.svg",revision:"b38d2a37cefe83679b25f5e4f5585af4"},{url:"/images/icons/white/instagram.svg",revision:"b90c3979e7f2cbb65175205b88135fdd"},{url:"/images/icons/white/link.svg",revision:"2aae185b877fd1675277331663207433"},{url:"/images/icons/white/map-marker.svg",revision:"943608587f522a3955a9a6f20e0841ee"},{url:"/images/icons/white/menu.svg",revision:"63b2558806b2dc66179af1be385c44bc"},{url:"/images/icons/white/phone.svg",revision:"ca1e40edacef5d4bb9479fa048c3a672"},{url:"/images/icons/white/send.svg",revision:"4144c9c35c9dc46a7283b60d34fe9c63"},{url:"/images/icons/white/twitter.svg",revision:"e672406aa67744f77a4136d7b10c1414"},{url:"/images/icons/white/whatsapp.svg",revision:"e3488807a9b2818d2ba3a55e00c2b392"},{url:"/images/power.webp",revision:"0427d4e442d5650e86b20896df45a7e1"},{url:"/images/profile.webp",revision:"a448d8b12c42547ceddda12ffd1d9dfc"},{url:"/images/projects/alis.webp",revision:"d77395d2026c1aeace46935d258b6c4a"},{url:"/images/projects/opensom.webp",revision:"30bbfefc85a73c654c2c521e806a8e7c"},{url:"/images/projects/qpdftools.webp",revision:"d460a8defa58fa50508c822695d5b731"},{url:"/images/projects/qtotem.webp",revision:"a92bec3d5f668d9dacb70776bb4e9091"},{url:"/images/projects/size.xcf",revision:"35147c86dacaab003e17a6cdb188fb82"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
