const CACHE='wordrobe-v12';
const FILES=["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "privacy.html", "bg/admont.jpg", "bg/alexandria.jpg", "bg/alps.jpg", "bg/aurora.jpg", "bg/cappadocia.jpg", "bg/celsus.jpg", "bg/chichenitza.jpg", "bg/colosseum.jpg", "bg/fuji.jpg", "bg/giza.jpg", "bg/grandcanyon.jpg", "bg/greatwall.jpg", "bg/istanbul.jpg", "bg/lagoon.jpg", "bg/longroom.jpg", "bg/machupicchu.jpg", "bg/pamukkale.jpg", "bg/petra.jpg", "bg/sahara.jpg", "bg/suleymaniye.jpg", "bg/tajmahal.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
