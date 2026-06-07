// PWA verificada e instalada en dispositivo móvil 
// Service Worker - Corcheteando Ando PWA
const CACHE_NAME = 'corcheteando-ando-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/Corcheteando-ando/',
        '/Corcheteando-ando/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
