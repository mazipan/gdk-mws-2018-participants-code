// Install SW
const staticCachesName = 'static-v9'
const fileToCaches = [
  '/index.html',
  '/project1/index.html',
  '/project1/style.css',
  '/project1/add2numbers.js',
  '/images/icons/menu_icon_1.png',
  '/images/profiles/me.png',
  '/project2/index.html',
  '/project2/style.css',
  '/project2/map.js'
]





self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCachesName).then((cache) => {
      return cache.addAll(fileToCaches)
    })
  )
  // console.log('Service Worker Installin', event)
})

self.addEventListener('activate', () => {
  console.log('Active')
})

self.addEventListener('fetch', (event) => {

  console.log('Fetching:', event.request.url)
  // console.log(event.request)
  // console.log(event.request.method)
  // console.log(event.request.headers)
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

// event.respondWith(response);
})
