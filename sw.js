/* Cabinet app shell. Collection records and photos remain in IndexedDB, never in this cache. */
const CACHE_PREFIX = 'cabinet-shell-';
const CACHE = CACHE_PREFIX + "f1fc1cba7e3cfa185140f17fee0bdac716ca438bfdd308aef1bc556610b0e73b";
const ASSETS = [
  "./agent/AGENT-PROMPT.md",
  "./agent/SHA256SUMS",
  "./agent/agent-kit.json",
  "./agent/cabinet-agent-skill-2.5.0.zip",
  "./assets/App-BnPI1CUg.js",
  "./assets/archive.worker-BFKgrDfS.js",
  "./assets/cutout-cpu.worker-BGm8R-Jg.js",
  "./assets/cutout.worker-TxruYLzz.js",
  "./assets/index-D5iyt3_K.css",
  "./assets/index-DwwCUYOP.js",
  "./assets/media.worker-VxbA1fKU.js",
  "./assets/portfolio.worker-Djm1kKv4.js",
  "./icon.svg",
  "./index.html",
  "./manifest.webmanifest"
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
// A new shell normally waits until no tab uses the old one (protects open drafts from version mixing).
// The app's "Update now" asks it to take over immediately; the page then reloads.
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'cabinet-skip-waiting') self.skipWaiting();
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
