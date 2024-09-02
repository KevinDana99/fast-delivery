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

// Evento de activación del service worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
});

// Manejo de notificaciones push
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || "¡Tienes una nueva notificación!",
    icon: data.icon || "/images/icon.png",
    badge: data.badge || "/images/badge.png",
  };

  event.waitUntil(
    self.registration.showNotification(data.title || "Notificación", options)
  );
});

// Manejo del clic en la notificación
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("/") // Aquí puedes abrir una URL específica si lo deseas
  );
});
