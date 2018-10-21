const staticCachesName = 'static-v9'
const fileToCaches = [
  '/index.html',
  '/calculator/index.html',
  '/calculator/app.css',
  '/calculator/app.js',
  '/images/logo-MF.png',
  '/images/muslimalfatih-af.jpg',
  '/mapbox/index.html',
  '/mapbox/app.css'
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
  console.log('Active')
})

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if(response) {
          console.log(`Found ${event.request.url} in cache`)
          return response;
        }
        console.log(`Network request for ${event.request.url}`)
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
})

