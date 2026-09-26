const CACHE = "4p-cineguide-v1.8";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./vendor/tesseract/tesseract.min.js",
  "./vendor/tesseract/worker.min.js",
  "./vendor/tesseract/lang/eng.traineddata.gz",
  "./vendor/tesseract/core/tesseract-core.wasm.js",
  "./vendor/tesseract/core/tesseract-core-simd.wasm.js",
  "./vendor/tesseract/core/tesseract-core-lstm.wasm.js",
  "./vendor/tesseract/core/tesseract-core-simd-lstm.wasm.js"
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(async cache => {
        for (const url of CORE) {
          try { await cache.add(url); } catch (err) { console.warn("CineGuide precache failed", url, err); }
        }
      })
      .then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy=response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request,copy)).catch(()=>{});
        return response;
      }).catch(() => event.request.mode === "navigate" ? caches.match("./index.html") : undefined);
    })
  );
});
