(function(){
	if('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service.js').then(function(registration){
			console.log('ServiceWorker registration was successful. Scope: ', registration);
		}, function(err){ 
			console.log('ServiceWorker not registered. Reason: ', err);
		})
	}
})();