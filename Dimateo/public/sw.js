const staticCachesName = 'dimateo-mws'
const fileToCaches = [
  './index.html',
  './project1/add2number.html',
  './project1/add2number.js',
  './project2/index.html',
  './images/78ae09b2a2fb505e698ced7332157c47.png',
  './images/IMG_20180817_174915.jpg',
  './css/mystyle.css',
  './manifest.json',
  'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',
]

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCachesName).then((cache) => {
      return cache.addAll(fileToCaches)
    })
  )
})

self.addEventListener('activate', () => {
  console.log('Service Worker Aktif')
})

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if(response) {
          console.log(`Ditemukan halaman ${event.request.url} di dalam cache`)
          return response;
        }
        console.log(`Requesting halaman ${event.request.url}`)
        return fetch(event.request).then(response => {
          return caches.open(staticCachesName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
      .catch(error => {
        console.log(error)
      })
  )
});