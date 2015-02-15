$(document).ready(function() {
	$('.projects').hide();

	$('#portfolio-link').click(function(){
		$('.about').hide();
		$('.projects').fadeIn(800);
	});

	$('#about-link').click(function(){
		$('.projects').hide();
		$('.about').fadeIn(800);
	});
});
