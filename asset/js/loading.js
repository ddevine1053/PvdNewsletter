// $(document).ready(function() {
	
// 	// Users can skip the loading process if they want.
// 	$('.skip').click(function() {
// 		$('.coverSpread').addClass('finito');
// 	})

// 	setTimeout(function() {
// 		$('.coverSpread').addClass('loaded');
// 	}, 300000);
// })

setTimeout(function() {
	$('.coverSpread, body')
	//   .removeClass('loading')
	  .addClass('loaded');
	  $('.coverSpread').remove();
  }, 3000);