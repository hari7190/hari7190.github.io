$(document).ready(function(){
	
	//dropdown code
	try{
	
		oDD = $(".dd").msDropDown({mainCSS : 'dd2'});
			
			
		
	}
	catch (e) {
		// TODO: handle exception
	}
	
	$(".drop-down-wrapper .dd2").each(function(){
		$(this).find('.ddChild').css('width', $(this).width()-30);
	});
	$(".popup-drop-down-wrapper .dd2").each(function(){
		$(this).find('.ddChild').css('width', $(this).width()-28);
	});
	$('.add-case').click(function(){

		//$('.black-overlay').show();
		$(this).addClass('link-btn-active');
		$('.add-wrapper-div').show();
	});
		$('.add-wrapper-div').mouseleave(function(event) {
            $(this).hide();
			$('.add-case').removeClass('link-btn-active');
    }); 
	$('.next-move-arrow-green').click(function(event) {
          $('.button-drop-list').show();
    }); 
	
});