/* ==========================================================================
   SERVICE WORKER — Cabinet Agbélé-Alafia
   Rend le site utilisable hors connexion après une première visite réussie.
   Stratégie : "cache d'abord, réseau en secours", avec mise à jour
   automatique du cache à chaque fichier récupéré avec succès sur le réseau.
   ========================================================================== */

const CACHE_VERSION = 'agbele-alafia-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './data.json',
  './manifest.json',
  './favicon.ico',
  './images/logo.jpg',
  './images/fertilite.jpg',
  './images/nature.jpg',
  './images/og-image.jpg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/favicon-16.png'
];

// --- Installation : on met en cache tout ce qu'il faut pour fonctionner hors-ligne
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// --- Activation : on supprime les anciennes versions du cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_VERSION).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// --- Récupération : cache d'abord, réseau en secours, mise à jour silencieuse du cache
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // On ne gère que les requêtes GET de notre propre origine (jamais les vidéos/iframes Facebook)
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
