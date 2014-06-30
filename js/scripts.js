$(document).ready(function() {

	/*
		Sliding nav
	*/

	function getActivePosition(element) {
		var $element = element;
		var activePos = $element.parents('li').position().left;
		$element.closest('.select-bar-nav').find('.current').css({'left': activePos});
	}

	$('.select-bar-nav a').hover(function(){
		var $link = $(this);
		var newPos = $link.parents('li').position().left;
		$link.closest('.select-bar-nav').find('.current').css({'left': newPos});
	}, function(){
		getActivePosition($(this).closest('.select-bar-nav').find('.active'));
	});

	$(window).on('resize', function() {
		$('.select-bar-nav .active').each(function() {
			getActivePosition($(this));
		});
	});

	// Remove code below if links link to another page
	$('.select-bar-nav a').on('click', function(e) {
		e.preventDefault();

		var $link = $(this);
		$link.closest('.select-bar-nav').find('a').removeClass('active');
		$link.addClass('active');
	});

});
