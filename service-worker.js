"use strict";var precacheConfig=[["/star-wars-encyclopedia/index.html","4bd5f0ccf77d6a52a23942034f710c30"],["/star-wars-encyclopedia/static/css/main.d481aaf7.css","0c43cf1055c049598dcc2f7a7df47971"],["/star-wars-encyclopedia/static/js/main.80970707.js","87d2c3063a2e23391505d84c493a8858"],["/star-wars-encyclopedia/static/media/1.e77af2ca.jpeg","e77af2ca6441e99fe29b1e813abd7784"],["/star-wars-encyclopedia/static/media/2.52c6c5a7.jpeg","52c6c5a7f66b9c232e4a4805a12f7100"],["/star-wars-encyclopedia/static/media/3.11588818.jpeg","11588818cb82a220e90650c1318d11ca"],["/star-wars-encyclopedia/static/media/4.6ac33316.jpeg","6ac3331694b383f156647d2f021f7630"],["/star-wars-encyclopedia/static/media/5.e127950c.jpeg","e127950caf574488e467df2135a45b32"],["/star-wars-encyclopedia/static/media/6.42b0848a.jpeg","42b0848acdf13f247a3bb7ea15c14152"],["/star-wars-encyclopedia/static/media/7.f47bcfbb.jpeg","f47bcfbbe02aa78693956d847222c1e7"],["/star-wars-encyclopedia/static/media/beru.a060a3d2.png","a060a3d2b794eea7a08dba8d26bb5bfa"],["/star-wars-encyclopedia/static/media/biggs.3dec48e9.png","3dec48e9599b47a3359d5f2880de9c89"],["/star-wars-encyclopedia/static/media/c-3po.eefae157.png","eefae157a4e381fa0726e98c36c598d2"],["/star-wars-encyclopedia/static/media/distant_galaxy.db8e6558.ttf","db8e65588f4fd8bc58d7337066a51b98"],["/star-wars-encyclopedia/static/media/r2d2.0684ca33.png","0684ca3372b4e78894d945f1e2347cc6"],["/star-wars-encyclopedia/static/media/star.44d8b868.svg","44d8b86851158ad281c7b4af375c082d"],["/star-wars-encyclopedia/static/media/wars.1210fd0f.svg","1210fd0fc7a1cab1d0659d1ee9f44a43"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),a=urlsToCacheKeys.has(t));var n="/star-wars-encyclopedia/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});