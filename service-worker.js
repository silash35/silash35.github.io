if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,a,r)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const f={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return c;case"module":return f;default:return e(i)}}))).then((e=>{const i=r(...e);return c.default||(c.default=i),c}))})))}}define("./service-worker.js",["./workbox-224ec2e5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"alis.79572704.webp",revision:"0b32a5f1372d48af9c0cec2e79572704"},{url:"cake-variant.72f03df5.svg",revision:"c61a3e7d9402f3b5fb8c32f272f03df5"},{url:"card.png",revision:"3867fa22a30d6d0821b44c4b3a645e97"},{url:"contact.3eec8220.js",revision:"a90849533f7ae2efbcbc1f5dfe470b5d"},{url:"contact.3eec8220.js.map",revision:"e083e339f10708d473611d0f828abbec"},{url:"contact.cf06a477.css",revision:"92efc5e9f5db27db4f40adb8b93679cc"},{url:"contact.cf06a477.css.map",revision:"1311d49011e51f8aa7063cc6af42874e"},{url:"contact.html",revision:"5e3961bbb7556ba0b14b251b7a55e2df"},{url:"curriculo.ef4faedf.css",revision:"00b8574f426c97e97ec950842b09feb6"},{url:"curriculo.ef4faedf.css.map",revision:"5031846faacd229ac81dfb00b10436a5"},{url:"curriculo.html",revision:"4ba2b2a2adfc132192a4d6bc5e55e885"},{url:"curriculum.html",revision:"0eacf452863f4901794816f96f674d19"},{url:"description.8589596b.svg",revision:"5e14b8cdca7ff498f1da4b528589596b"},{url:"email.edee9e37.svg",revision:"1e2517c890452e4f5e100a70edee9e37"},{url:"favicon.ico",revision:"a553a54baa997dfb9de96a6670a34aae"},{url:"github.8b123fc1.svg",revision:"6b1276a07e98e29db80334738b123fc1"},{url:"google0b9f4b250a67ac0e.html",revision:"f1f324a9a4ab6f9503aa4f733ecfaeb6"},{url:"icon.b74266d1.svg",revision:"891840cf37fd67d97f0aa2dbb74266d1"},{url:"icons/android-chrome-192x192.png",revision:"f3eca6735dd951738c9356e3b14a7cb0"},{url:"icons/android-chrome-512x512.png",revision:"75c5caa5b9a2d26ea9b51fd6f44fee34"},{url:"icons/apple-touch-icon.png",revision:"7f982b763a837c9eca819e7602c5de25"},{url:"icons/favicon-16x16.png",revision:"c0de141281c912c861c92c6c51ba4908"},{url:"icons/favicon-32x32.png",revision:"129f4363fc48d586e1a5469d120cc9d9"},{url:"icons/favicon.ico",revision:"a553a54baa997dfb9de96a6670a34aae"},{url:"icons/maskable_icon.png",revision:"5cd8ae1921559da3a928c840d0e6435b"},{url:"icons/mstile-144x144.png",revision:"239c538372a2211c080468d26ad0f9e9"},{url:"icons/mstile-150x150.png",revision:"801e473af5ab4b84dba5847e660fecb4"},{url:"icons/mstile-310x150.png",revision:"0965d17897260e5559b7924cd5d15bdb"},{url:"icons/mstile-310x310.png",revision:"3b1e86752e2ca3ebee50fb46d11e5a4b"},{url:"icons/mstile-70x70.png",revision:"1fca0cf795534f072ceecf6671a35259"},{url:"icons/safari-pinned-tab.svg",revision:"39ae517cacca25dd41ba73f7b4b54159"},{url:"icons/site.webmanifest",revision:"5e4e08f10fdbeaf262daef024704f39c"},{url:"index.52545d2a.css",revision:"8757216ec8b02c9a02330eb24b5568c9"},{url:"index.52545d2a.css.map",revision:"b1e1ef1389595f97b6bd7a495687ae94"},{url:"index.867b98d8.js",revision:"4d010a78f15a2b61d887faecf165c882"},{url:"index.867b98d8.js.map",revision:"ea120ec4aca0ebdc6a4d3ad1de967d25"},{url:"index.html",revision:"b817dbf98aaa7da5ded8d5b4bcb04abd"},{url:"instagram.88135fdd.svg",revision:"b90c3979e7f2cbb65175205b88135fdd"},{url:"link.63207433.svg",revision:"2aae185b877fd1675277331663207433"},{url:"map-marker.0e0841ee.svg",revision:"943608587f522a3955a9a6f20e0841ee"},{url:"menu.385c44bc.svg",revision:"63b2558806b2dc66179af1be385c44bc"},{url:"phone.48c3a672.svg",revision:"ca1e40edacef5d4bb9479fa048c3a672"},{url:"portfolio.c7630f46.css",revision:"00d5cef8efd774932b0738da120e8a7d"},{url:"portfolio.c7630f46.css.map",revision:"c63dade27b3986a5cbc61368c9beb8d0"},{url:"portfolio.html",revision:"cef49792097769175ca9507685d23a33"},{url:"power.df45a7e1.webp",revision:"0427d4e442d5650e86b20896df45a7e1"},{url:"profile.fd1d9dfc.webp",revision:"a448d8b12c42547ceddda12ffd1d9dfc"},{url:"qpdftools.5434a1f1.webp",revision:"11fe65f0180bdf005817414e5434a1f1"},{url:"qtotem.c1c211d9.webp",revision:"ece1924f06f11a6c4971fee5c1c211d9"},{url:"resume.bece3360.css",revision:"e603617ddb3371f5e83d177e756e0858"},{url:"resume.bece3360.css.map",revision:"e1371ff62f7941f391ad0356261d4cef"},{url:"resume.da6b51fc.js",revision:"7efd80b4284f500520dc81b39d723c67"},{url:"resume.da6b51fc.js.map",revision:"303a602f4646f4d688f98cf5561bd6b8"},{url:"resume.html",revision:"6a75ecc6d82b9244d23cb40820921e4c"},{url:"roboto-v20-latin-300.44a6720b.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"roboto-v20-latin-300.b57a7f6a.woff2",revision:"ef7c6637c68f269a882e73bcb57a7f6a"},{url:"roboto-v20-latin-500.29bb0c69.woff2",revision:"020c97dc8e0463259c2f9df929bb0c69"},{url:"roboto-v20-latin-500.8ff6decc.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"roboto-v20-latin-700.16373da3.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"roboto-v20-latin-700.5bdf552e.woff2",revision:"2735a3a69b509faf3577afd25bdf552e"},{url:"roboto-v20-latin-regular.44c21540.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"roboto-v20-latin-regular.d9e317fe.woff2",revision:"479970ffb74f2117317f9d24d9e317fe"},{url:"send.5b99e8ad.svg",revision:"546bd80fa2cb3a0c48adea035b99e8ad"},{url:"twitter.b10c1414.svg",revision:"e672406aa67744f77a4136d7b10c1414"},{url:"whatsapp.00c2b392.svg",revision:"e3488807a9b2818d2ba3a55e00c2b392"}],{})}));
//# sourceMappingURL=service-worker.js.map
