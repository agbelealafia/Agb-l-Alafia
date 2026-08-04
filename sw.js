/* ==========================================================================
   SERVICE WORKER — Cabinet Agbélé-Alafia
   Rend le site utilisable hors connexion après une première visite réussie.
   Stratégie : "cache d'abord, réseau en secours", avec mise à jour
   automatique du cache à chaque fichier récupéré avec succès sur le réseau.

   Remarque volontaire : les vidéos (~21 Mo au total) ne sont PAS
   pré-téléchargées à la première visite pour ne pas consommer inutilement
   le forfait internet du visiteur. Chaque vidéo devient disponible
   hors-ligne automatiquement dès qu'elle a été regardée une première fois.
   ========================================================================== */

const CACHE_VERSION = 'agbele-alafia-v2';

const CORE_ASSETS = [
  './',
  './index.html',
  './historique.html',
  './galerie.html',
  './styles.css',
  './data.json',
  './manifest.json',
  './favicon.ico',
  './robots.txt',
  './sitemap.xml',
  './logo.jpg',
  './fertilite.jpg',
  './nature.jpg',
  './og-image.jpg',
  './temoignage-jumeaux.jpg',
  './produits-flacons.jpg',
  './poster-prostate-diabete.jpg',
  './poster-degraisseur.jpg',
  './poster-fertilite-femme.jpg',
  './poster-hemophar.jpg',
  './poster-assurance-foyer.jpg',
  './poster-infections-gamme.jpg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './favicon-16.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_VERSION).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
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
