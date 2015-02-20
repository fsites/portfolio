$(document).ready(function() {
	$('.projects').hide();
	$('.contact-form').hide();

	$('.portfolio-link').click(function(){
		$('.about').hide(1000);
		$('.contact-form').hide(1000);
		$('.projects').fadeIn(1600);
	});

	$('.about-link').click(function(){
		$('.projects').hide(1000);
		$('.contact-form').hide(1000);
		$('.about').fadeIn(1600);
	});

	$('.contact-link').click(function(){
		$('.projects').hide(1000);
		$('.about').hide(1000);
		$('.contact-form').fadeIn(1600);
	});
});
