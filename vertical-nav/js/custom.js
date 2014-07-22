$(document).ready(function(){


	$('.vertical-nav ul li').click(function(){
		
		$(this).addClass('active');
		$(this).prevAll().removeClass('active');
		$(this).nextAll().removeClass('active');
		$(this).prevAll().find('span').addClass('completed');

	});
	

});
