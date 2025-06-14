
// self.addEventListener('install', function (event) {
//     event.waitUntil(
//         caches.open('my-cache').then(function (cache) {
//             return cache.addAll([
//                 '../html/offline-data.txt', // The page that contains your offline content
//                 // Add other resources to the cache here
//             ]);
//         })
//     );
// });添加离线数据到缓存
// self.addEventListener('activate', function (event) {
//     event.waitUntil(
//         caches.open('my-cache').then(function (cache) {
//             return cache.put('../html/offline-data.txt', new Response('这是一句离线保存的话'));
//         })
//     );
// });
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

