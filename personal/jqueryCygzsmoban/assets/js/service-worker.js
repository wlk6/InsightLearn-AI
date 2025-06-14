self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('offline-cache')
            .then(cache => cache.addAll(['work-detail1.html']))
    );
});
// service-worker.js
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('offline-cache').then((cache) => {
//             return cache.addAll([
            
//                 '../../work-detail1.html',
//                 // 其他需要缓存的资源文件
//             ]);
//         })
//     );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then((response) => {
//             return response || fetch(event.request);
//         })
//     );
// });
