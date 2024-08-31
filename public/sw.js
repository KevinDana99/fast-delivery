self.addEventListener("install", (event) => {
  try {
    event.waitUntil(
      caches.open("next-pwa-cache-v1").then((cache) => {
        return cache.addAll([
          "/",
          "/icons/logo-192x192.png",
          "/icons/logo-512x512.png",
        ]);
      })
    );
  } catch (err) {
    console.log(err);
  }
});

self.addEventListener("fetch", (event) => {
  try {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  } catch (err) {
    console.error(err);
  }
});
