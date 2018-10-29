workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.setConfig({
  debug: false
});
workbox.core.setCacheNameDetails({
  prefix: 'gdk-mws-'
});

const getHourFromDay = hour => {
  return hour * 24;
};

const cacheableConfig = (name, maxEntry, maxHour) => {
  return {
    cacheName: name,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxEntries: maxEntry,
        maxAgeSeconds: maxHour * 60 * 60,
        purgeOnQuotaError: true
      })
    ]
  };
};

// cache third party
workbox.routing.registerRoute(
  new RegExp('https://(?:fonts|storage).(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst(
    cacheableConfig('gfonts', 10, getHourFromDay(30))
  )
);

// cache image
workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js)/,
  workbox.strategies.cacheFirst(
    cacheableConfig('images-cache', 50, getHourFromDay(30))
  )
);

// cache json
workbox.routing.registerRoute(
  /.*\.(?:json|xml)/,
  workbox.strategies.staleWhileRevalidate(
    cacheableConfig('json-cache', 50, getHourFromDay(30))
  )
);

// cache html
workbox.routing.registerRoute(
  /.*\.(?:html|htm)/,
  workbox.strategies.networkFirst(
    cacheableConfig('html-cache', 50, getHourFromDay(30))
  )
);