//tutorial from: https://developers.google.com/web/fundamentals/getting-started/primers/service-workers

(function(){
	var CACHE_NAME = 'my-site-cache-v1';
	var urlsToCache = [
		'/',
		'/styles/main.css',
		'main.js'
	];

	self.addEventListener('install', function(event) {
		console.log('install');
		event.waitUntil(
			caches.open(CACHE_NAME)
			.then(function(cache){
				console.log('Opened cache');
				return cache.addAll(urlsToCache);
			})

		)
	});

	self.addEventListener('fetch', function(event) {
		console.log('fetch event');
	  event.respondWith(
	    caches.match(event.request)
	      .then(function(response) {
	        if (response) {
	          return response;
	        }

	        var fetchRequest = event.request.clone();

	        return fetch(fetchRequest).then(
	          function(response) {
	            // Check if we received a valid response
	            if(!response || response.status !== 200 || response.type !== 'basic') {
	              return response;
	            }

	            var responseToCache = response.clone();

	            caches.open(CACHE_NAME)
	              .then(function(cache) {
	                cache.put(event.request, responseToCache);
	              });

	            return response;
	          }
	        );
	      })
	    );
	});

	self.addEventListener('activate', function(event) {

		  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

		  event.waitUntil(
		    caches.keys().then(function(cacheNames) {
		      return Promise.all(
		        cacheNames.map(function(cacheName) {
		          if (cacheWhitelist.indexOf(cacheName) === -1) {
		            return caches.delete(cacheName);
		          }
		        })
		      );
		    })
		  );
		}
	);
})();