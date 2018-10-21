const staticCachesName = 'gdk-denny'
const fileToCaches = [
  './index.html',
  './manifest.json',
  './project1/*',
  './project2/*',
  './images/*',
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