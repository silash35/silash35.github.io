if(!self.define){let e,c={};const a=(a,i)=>(a=new URL(a+".js",i).href,c[a]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=c,document.head.appendChild(e)}else e=a,importScripts(a),c()})).then((()=>{let e=c[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(c[b])return;let f={};const d=e=>a(e,b),s={module:{uri:b},exports:f,require:d};c[b]=Promise.all(i.map((e=>s[e]||d(e)))).then((e=>(r(...e),f)))}}define(["./workbox-7684b32a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"alis.aff051fb.webp",revision:"0b32a5f1372d48af9c0cec2e79572704"},{url:"cake-variant.93bc292f.svg",revision:"6b05a9293902ca298b4f1c5712e89165"},{url:"cake-variant.93bc292f.svg.br",revision:"902efec77efef137fffcd7ef2fdf7aa6"},{url:"cake-variant.93bc292f.svg.gz",revision:"73600b682b9b676b853f4f840aba289b"},{url:"card.png",revision:"3867fa22a30d6d0821b44c4b3a645e97"},{url:"contact.b4c5c28a.css",revision:"9d4357ddc87eed44dfbc7ac2f49daf7f"},{url:"contact.b4c5c28a.css.br",revision:"f285116e4aac79352b50e7518746b0dc"},{url:"contact.b4c5c28a.css.gz",revision:"f657bc9769d446aafdc35c4aeb001eb0"},{url:"contact.b4c5c28a.css.map",revision:"e181c3a646fd680fa1500756c31f8ddd"},{url:"contact.b4c5c28a.css.map.br",revision:"81a50f3b0f3853d6ef32239380d5c06c"},{url:"contact.b4c5c28a.css.map.gz",revision:"b5a3d5cfbc085d58a853fa5441c457d2"},{url:"contact.ba9352fd.js",revision:"f39a286fc72fc9f6442d79a2077e8976"},{url:"contact.ba9352fd.js.br",revision:"24734cea7df5e5b8a6172a51b07b7e42"},{url:"contact.ba9352fd.js.gz",revision:"23a23359dc97e63b5a13f1501cd16495"},{url:"contact.ba9352fd.js.map",revision:"ff8ec0635933c44bfc4e8267162c3603"},{url:"contact.ba9352fd.js.map.br",revision:"1ac37539e7991845b1ba322f08e2d6a4"},{url:"contact.ba9352fd.js.map.gz",revision:"8545fa8cbd02a1de7a8da586a8e165b5"},{url:"contact.html",revision:"b5569700f15a8961b8b95bb67f458ed9"},{url:"contact.html.br",revision:"306922fc5f880116e780a29e4b26a537"},{url:"contact.html.gz",revision:"6ff2de0e671e08c040f667d91a210a3c"},{url:"contact.uncritical.1eb55bd3.css",revision:"27ba6810fa4dce66eb1bf625f36da851"},{url:"contact.uncritical.1eb55bd3.css.br",revision:"f5c4a2b664d9f7962d40bf4be35d7098"},{url:"contact.uncritical.1eb55bd3.css.gz",revision:"76f9f5c04d4fc06336da8a4e60f76072"},{url:"contact.uncritical.1eb55bd3.css.map",revision:"9933a66266b60a3dd2951092d5baeefa"},{url:"contact.uncritical.1eb55bd3.css.map.br",revision:"09645ab9367b7482901f41f8c9b380a7"},{url:"contact.uncritical.1eb55bd3.css.map.gz",revision:"3a054d1296fca10901002ec50da39ff1"},{url:"curriculo.b9b7a6d5.css",revision:"b4103e57af9bc7ee0614c2f7c125b308"},{url:"curriculo.b9b7a6d5.css.br",revision:"220178d61b8fe3fb0fc401bda4af7385"},{url:"curriculo.b9b7a6d5.css.gz",revision:"d01d099945bf2892d4c8fb6a88bbc4fb"},{url:"curriculo.b9b7a6d5.css.map",revision:"2d20cac5b160077070ca057b40bbd758"},{url:"curriculo.b9b7a6d5.css.map.br",revision:"3a5b3b9c4800f0ae8d97aae6308f998d"},{url:"curriculo.b9b7a6d5.css.map.gz",revision:"f3ba48559e3a9080077ac86f0c401724"},{url:"curriculo.html",revision:"d590a423334e608bd57240dbb794772c"},{url:"curriculo.html.br",revision:"91a9001ab2a52b3e5759fac46f1df43f"},{url:"curriculo.html.gz",revision:"02955d183ab8a78c67dea5f0d9c97eaa"},{url:"curriculum.html",revision:"1d67f0ca4b1f7fc565a251762588c715"},{url:"curriculum.html.br",revision:"467c8a505fd89db1edd323548298120b"},{url:"curriculum.html.gz",revision:"7a4292510c2924dd601afadad6fdb8e9"},{url:"description.d0a0b5bc.svg",revision:"82b2a6b21cecbd27ed0bbc35a62411d1"},{url:"description.d0a0b5bc.svg.br",revision:"2719d86c87afc7cc92139d647a0a5277"},{url:"description.d0a0b5bc.svg.gz",revision:"fa32dfc44fc380f8b4544813ab825f7f"},{url:"email.12b0784b.svg",revision:"747844883945c01e337c7bd5ef88214e"},{url:"email.12b0784b.svg.br",revision:"c83face1246abe3ac6e2f7a970ba455e"},{url:"email.12b0784b.svg.gz",revision:"882b388b3c11254215daae1879b2d5eb"},{url:"favicon.ico",revision:"a553a54baa997dfb9de96a6670a34aae"},{url:"github.f8f67416.svg",revision:"46f9d32ad60796f477b32d29e1c73528"},{url:"github.f8f67416.svg.br",revision:"34313c6b823d8d072da3974b461b4052"},{url:"github.f8f67416.svg.gz",revision:"faa537c6d5ba48f77a484543fc57b79e"},{url:"google0b9f4b250a67ac0e.html",revision:"f1f324a9a4ab6f9503aa4f733ecfaeb6"},{url:"icon.6c93aa38.svg",revision:"3d268bde90a1bb599d1d65bd54a7a475"},{url:"icon.6c93aa38.svg.br",revision:"bfb9664c17d9099b564219fcee48c960"},{url:"icon.6c93aa38.svg.gz",revision:"74510fe1aef6c2a9bfd6db6b2fad9995"},{url:"icons/android-chrome-192x192.png",revision:"f3eca6735dd951738c9356e3b14a7cb0"},{url:"icons/android-chrome-512x512.png",revision:"75c5caa5b9a2d26ea9b51fd6f44fee34"},{url:"icons/apple-touch-icon.png",revision:"7f982b763a837c9eca819e7602c5de25"},{url:"icons/favicon-16x16.png",revision:"c0de141281c912c861c92c6c51ba4908"},{url:"icons/favicon-32x32.png",revision:"129f4363fc48d586e1a5469d120cc9d9"},{url:"icons/favicon.ico",revision:"a553a54baa997dfb9de96a6670a34aae"},{url:"icons/maskable/maskable_icon_x128.png",revision:"cd29f7ba52d95e6d8a5b3c0a623987e8"},{url:"icons/maskable/maskable_icon_x192.png",revision:"2b176de995b396aa22fdb77003c5c39e"},{url:"icons/maskable/maskable_icon_x384.png",revision:"d63a88fad5729d304dac7f670258b661"},{url:"icons/maskable/maskable_icon_x48.png",revision:"a2bc725905779fb7be99d163dae8ab0f"},{url:"icons/maskable/maskable_icon_x512.png",revision:"d157071be1276e0ced45e64cf15777d1"},{url:"icons/maskable/maskable_icon_x72.png",revision:"81b09f050520c2dc17787635199d1005"},{url:"icons/maskable/maskable_icon_x96.png",revision:"acecc95eecaf367c655a1bd3ac70daaa"},{url:"icons/maskable/maskable_icon.png",revision:"72457c1f80625e978702d1772adb9f81"},{url:"icons/mstile-144x144.png",revision:"239c538372a2211c080468d26ad0f9e9"},{url:"icons/mstile-150x150.png",revision:"801e473af5ab4b84dba5847e660fecb4"},{url:"icons/mstile-310x150.png",revision:"0965d17897260e5559b7924cd5d15bdb"},{url:"icons/mstile-310x310.png",revision:"3b1e86752e2ca3ebee50fb46d11e5a4b"},{url:"icons/mstile-70x70.png",revision:"1fca0cf795534f072ceecf6671a35259"},{url:"icons/safari-pinned-tab.svg",revision:"39ae517cacca25dd41ba73f7b4b54159"},{url:"icons/site.webmanifest",revision:"a98294b893919307f25627990b994337"},{url:"index.6dd52938.js",revision:"0c0edef6d5f10f974e9b36f33f8786e3"},{url:"index.6dd52938.js.br",revision:"57fac61fb6c9db14a768dc389a630704"},{url:"index.6dd52938.js.gz",revision:"c35172aa541287a28806e311c17420d7"},{url:"index.6dd52938.js.map",revision:"886400afde51fb1927a6fcefb21628eb"},{url:"index.6dd52938.js.map.br",revision:"eb694910d3c254e0e2e0f06b00d52eeb"},{url:"index.6dd52938.js.map.gz",revision:"557a66cdcdd81a2373f486d8d3f17893"},{url:"index.f8f2fe02.css",revision:"2839ffc6c3ea94c4947229c64bb0ebb5"},{url:"index.f8f2fe02.css.br",revision:"c54b72bf12207fc285c660ac3176ca59"},{url:"index.f8f2fe02.css.gz",revision:"7615d191e18dd0234076dc14f125947c"},{url:"index.f8f2fe02.css.map",revision:"12e1b5eaf503c0090dfeebee6a65a10f"},{url:"index.f8f2fe02.css.map.br",revision:"b09679b47897723826de536c5c0d114e"},{url:"index.f8f2fe02.css.map.gz",revision:"8cd149f3dfda803a91877b5c04eb6660"},{url:"index.html",revision:"41a59989e7af5e5890db707a0dec5d92"},{url:"index.html.br",revision:"565d6f890f675fff536318cc00217c1b"},{url:"index.html.gz",revision:"9928ac6e08f2f6a582f9069592a5d23d"},{url:"index.uncritical.7d25c8b9.css",revision:"f917a6a12a4bfdc26fb20c07d0b0cbff"},{url:"index.uncritical.7d25c8b9.css.br",revision:"716f462920e7f299be12bad2eee7f23e"},{url:"index.uncritical.7d25c8b9.css.gz",revision:"f3dc71bbc8079add3046e238fdb72b71"},{url:"index.uncritical.7d25c8b9.css.map",revision:"10fba6c86bbe75b43890f9ad65663251"},{url:"index.uncritical.7d25c8b9.css.map.br",revision:"32f9994614c6cfebf4fff60d97e02af0"},{url:"index.uncritical.7d25c8b9.css.map.gz",revision:"f7f2be659fb7fdf688b4a24b131257a4"},{url:"instagram.5f125622.svg",revision:"1b0a132d000ba8f6e91a8d21bfcf8b36"},{url:"instagram.5f125622.svg.br",revision:"4d557c585338500ea023f21396d996d0"},{url:"instagram.5f125622.svg.gz",revision:"82029f59d4b65d3acddd6ce46f1407e8"},{url:"link.238e01a3.svg",revision:"6602d676d89f31d7bb42f352dbed0f7b"},{url:"link.238e01a3.svg.br",revision:"23f4be346148a47f6f998cec579b0bf2"},{url:"link.238e01a3.svg.gz",revision:"087f34ffea25d7e9f03ace9fd48ec93c"},{url:"map-marker.42ee1f93.svg",revision:"de30c4e87e1e1fa08b69f2c2a9a2d704"},{url:"map-marker.42ee1f93.svg.br",revision:"17a2232847e3583e5294331978a5e1ab"},{url:"map-marker.42ee1f93.svg.gz",revision:"5c4a88a8cd76e1c0f0cee5fbd34c52e9"},{url:"menu.3364b037.svg",revision:"00b354f5c56ac833076c9bf318b49726"},{url:"menu.3364b037.svg.br",revision:"15a4686712436e80006dde0bcd7a87ec"},{url:"menu.3364b037.svg.gz",revision:"47ae15054cfb8bb0363e0201f3a88c58"},{url:"phone.f1ddca42.svg",revision:"69c8c5c4f3fb2c503a1c13ff6dfd6ea0"},{url:"phone.f1ddca42.svg.br",revision:"2cc3e1847a03360fb8b5e27c7f80ade3"},{url:"phone.f1ddca42.svg.gz",revision:"be1dcf9a3e834256169d7716f9f9a08c"},{url:"portfolio.880f9c5b.css",revision:"365356ac8a6bbc1395d054bfdc45d503"},{url:"portfolio.880f9c5b.css.br",revision:"9c916778d104accfbaf1c779c459dbcf"},{url:"portfolio.880f9c5b.css.gz",revision:"0ec038ed684992639a9e67e466fdbdf1"},{url:"portfolio.880f9c5b.css.map",revision:"2c12fdc70c486ead4864eb3e6ac3f064"},{url:"portfolio.880f9c5b.css.map.br",revision:"f451910fcbcd11774e41094b8793b3c7"},{url:"portfolio.880f9c5b.css.map.gz",revision:"9dfbb51b241286bf9b23f1bbc239a01c"},{url:"portfolio.html",revision:"0f6a85464f6236239065b1f7ec49533f"},{url:"portfolio.html.br",revision:"4a327bed1a407da9514e13102198806c"},{url:"portfolio.html.gz",revision:"8ec46b87f670fb1cb58b6e9fc801dae2"},{url:"portfolio.uncritical.f8d47d26.css",revision:"66bd8ca5dc5738452003213a21c358ec"},{url:"portfolio.uncritical.f8d47d26.css.br",revision:"0fe0229508d502a0b9fd4e1c5b1d31ca"},{url:"portfolio.uncritical.f8d47d26.css.gz",revision:"c4a2dd716c161f97ecd8de518cedcd2f"},{url:"portfolio.uncritical.f8d47d26.css.map",revision:"46f9fc7c9e37fc91b1557f9556312f82"},{url:"portfolio.uncritical.f8d47d26.css.map.br",revision:"5bb16fd62e7e4488deef748c5c850545"},{url:"portfolio.uncritical.f8d47d26.css.map.gz",revision:"da044f7550a98872b40b98bc08ea3733"},{url:"power.e0233140.webp",revision:"0427d4e442d5650e86b20896df45a7e1"},{url:"profile.7369d05d.webp",revision:"a448d8b12c42547ceddda12ffd1d9dfc"},{url:"qpdftools.780c1669.webp",revision:"11fe65f0180bdf005817414e5434a1f1"},{url:"qtotem.40a889a5.webp",revision:"ece1924f06f11a6c4971fee5c1c211d9"},{url:"resume.c6c5a4bb.js",revision:"9f1d0b49c10041674175da20f4cfc221"},{url:"resume.c6c5a4bb.js.br",revision:"b536c13d91b73e92fb572ef4cd7a10a4"},{url:"resume.c6c5a4bb.js.gz",revision:"0dab5ca9d64b540cc2410c458499bc5e"},{url:"resume.c6c5a4bb.js.map",revision:"60034d6ab127ce49e531a78cee9173af"},{url:"resume.c6c5a4bb.js.map.br",revision:"f56824fe2174e80e8842ef8c4ab2fcd5"},{url:"resume.c6c5a4bb.js.map.gz",revision:"e06f2894256f8115d2e350c5d83a8026"},{url:"resume.eea09d16.css",revision:"60bcc692fae240a5056083d8b0a474d6"},{url:"resume.eea09d16.css.br",revision:"7a46343b1aa51e03120575a1477ff3c4"},{url:"resume.eea09d16.css.gz",revision:"1a5599a3703d6b24dd79406493ca63fc"},{url:"resume.eea09d16.css.map",revision:"0803473c1f1b34ebd2b3f60b6d2f2bac"},{url:"resume.eea09d16.css.map.br",revision:"1a0bf8d30115f09b3f04c22e50733569"},{url:"resume.eea09d16.css.map.gz",revision:"23c5fc20279643d682d2a6a083d4706e"},{url:"resume.html",revision:"810c5eff23e3d0304eb58c9ab9f80bbd"},{url:"resume.html.br",revision:"233986c0b10e022203725b6d23d6afd3"},{url:"resume.html.gz",revision:"b7d2f7ba282ff22fda4fba4bdbb1767d"},{url:"resume.uncritical.bb4aabea.css",revision:"aac189aed8aae43942e991d3faa7271a"},{url:"resume.uncritical.bb4aabea.css.br",revision:"48a1f89ebc2fb2a4b854ab55c840fa64"},{url:"resume.uncritical.bb4aabea.css.gz",revision:"739f6f9ea0653cd7fad97f90158bc1f4"},{url:"resume.uncritical.bb4aabea.css.map",revision:"bb28a2bc416211a6052b0a2028770525"},{url:"resume.uncritical.bb4aabea.css.map.br",revision:"104108f03b69fd5e44952008905de5f3"},{url:"resume.uncritical.bb4aabea.css.map.gz",revision:"a79c4f0c61d6ecb505be1dae224d7beb"},{url:"roboto-v29-latin-300.5cfb2c9f.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"roboto-v29-latin-300.dc97820c.woff2",revision:"80fe119e5efa3911b9d61b265f723b3d"},{url:"roboto-v29-latin-500.4bcf99b5.woff2",revision:"f00e7e4432f7c70d8c97efbe2c50d43b"},{url:"roboto-v29-latin-500.b018b63d.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"roboto-v29-latin-700.86adbc06.woff2",revision:"bf28241e67511184c14dbd0ef7d39f91"},{url:"roboto-v29-latin-700.908fc8a1.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"roboto-v29-latin-regular.b21272f7.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"roboto-v29-latin-regular.c737a2de.woff2",revision:"aa23b7b4bcf2b8f0e876106bb3de69c6"},{url:"send.39ee9389.svg",revision:"66890c8992e15aabe31f479a2b5b8aff"},{url:"send.39ee9389.svg.br",revision:"b118018d05ce26e3911e6a9ba55cfd4e"},{url:"send.39ee9389.svg.gz",revision:"53371991191bc1976760ef4a8c5f3094"},{url:"twitter.dcaf2342.svg",revision:"143eb36e6e8fceaf2b79156699181a5d"},{url:"twitter.dcaf2342.svg.br",revision:"d763c251065ca5f8184d1472a42a2dc8"},{url:"twitter.dcaf2342.svg.gz",revision:"574f91f65bdcfdfb5cd62e77552e031f"},{url:"whatsapp.e3317faa.svg",revision:"050ca4af0c001648558d5c7733fdd58d"},{url:"whatsapp.e3317faa.svg.br",revision:"89f32f0de58f148ffe02ca6ae1aa7996"},{url:"whatsapp.e3317faa.svg.gz",revision:"9a3d0c2754fadc365a50309a52a8e25e"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
