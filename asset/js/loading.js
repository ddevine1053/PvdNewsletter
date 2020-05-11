// $(document).ready(function() {
	
// 	// Users can skip the loading process if they want.
// 	$('.skip').click(function() {
// 		$('.coverSpread').addClass('loaded');
// 	})

// 	setTimeout(function() {
// 		$('.coverSpread').addClass('loaded');
// 	}, 300000);
// })

setTimeout(function() {
	$('.coverSpread, body')
	  .removeClass('loading')
	  .addClass('loaded');
  }, 3000);