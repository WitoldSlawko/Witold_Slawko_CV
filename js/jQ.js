$(document).ready(function() {
	//console.log('jQ dziala');
	
	$('.second').find('.col-8').height($('.second').find('.col-4').height());
	
	$('.main_left').height($('.main_right').height());
	
	$(window).resize(function(){
		if ($(window).width() > 551){
    	$('.main_left').height($('.main_right').height());
		}
    //$('.main_right').height($('.main_left').height());
	});
	
	$('#pl').on('click',function(){
		$('.main_left').height($('.main_right').height());
	});
	
	$('#en').on('click',function(){
		$('.main_left').height($('.main_right').height());
	});
	
});