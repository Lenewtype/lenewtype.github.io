(function(){
	var CACHE_NAME = 'my-site-cache-v1';
	var urlsToCache = [
		'/',
		'/styles/main.css',
		'/script/main.js'
	];

	self.addEventListener('install', function(event) {
		event.waitUntil(
			catches.open(CACHE_NAME)
			.then(function(cache){
				console.log('Opened cache');
				return cache.addAll(urlsToCache);
			})
		);
	});
})();