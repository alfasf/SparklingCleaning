$(document).ready(function(){
	
	$('.NavLogo').slideDown('slow');

	$('h2').click(function(){
		$(this).toggleClass('SecondH2');
	});
	
	$('p').first().css('color', 'green');

	$('.NavLogo').siblings().css("border", "2px solid red");
	
	$('div~img').fadeOut(3000);
	
});