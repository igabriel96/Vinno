var CACHE_VERSION = 1;
var myCacheStorage = self.caches;
// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/Itachi.png'
      ]);
    })
  );
});