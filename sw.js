importScripts("/gdk-mws-2018-participants-code/precache-manifest.631453ac28995fac08beef8e0c553521.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

workbox.setConfig({
  debug: false
});
workbox.core.setCacheNameDetails({
  prefix: 'gdk-mws-'
});

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

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
  new RegExp('https://fonts.googleapis.com/(.*)'),
  workbox.strategies.cacheFirst(
    cacheableConfig('gfonts', 10, getHourFromDay(30))
  )
);
workbox.routing.registerRoute(
  new RegExp('https://cdnjs.cloudflare.com/(.*)'),
  workbox.strategies.cacheFirst(
    cacheableConfig('cloudfrlare', 10, getHourFromDay(30))
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
