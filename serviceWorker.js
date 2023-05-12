const staticDevDodoland = "Dodoland";
const assets = [
  "/",
  "/index.html",
  "/script.js",
  "/favicon.ico"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevDodoland).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
