/* Cabinet app shell. Collection records and photos remain in IndexedDB, never in this cache. */
const CACHE_PREFIX = 'cabinet-shell-';
const CACHE = CACHE_PREFIX + "baddb83c33682c415ff999291c338948747f9fcb4a5ec1b952275c880c645b42";
const ASSETS = [
  "./agent/AGENT-PROMPT.md",
  "./agent/SHA256SUMS",
  "./agent/agent-kit.json",
  "./agent/cabinet-agent-skill-2.3.0.zip",
  "./assets/App-CcFSvqqg.js",
  "./assets/archive.worker-6JBeWVrm.js",
  "./assets/index-AYXKwJGW.js",
  "./assets/index-DPOARjRy.css",
  "./assets/media.worker-Cr1DaScB.js",
  "./icon.svg",
  "./index.html",
  "./manifest.webmanifest"
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key.startsWith(CACHE_PREFIX) && key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || url.pathname.endsWith('/sw.js')) return;
  const exact = ASSETS.some(path => new URL(path, self.registration.scope).pathname === url.pathname);
  if (event.request.mode !== 'navigate' && !exact) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (event.request.mode === 'navigate') {
      return (await cache.match(new URL('./index.html', self.registration.scope).href)) || fetch(event.request);
    }
    return (await cache.match(event.request, {ignoreSearch: true})) || fetch(event.request);
  })());
});
