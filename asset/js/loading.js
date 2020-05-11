$(document).ready(function() {
	
	// Users can skip the loading process if they want.
	$('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})

	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 600000);
})