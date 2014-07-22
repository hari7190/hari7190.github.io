$(document).ready(function(){
	
	$('body').on('click','.ms-choice',function(){

		if(!drop_down_selected){
			$('.ms-drop').find('input[type="checkbox"]').addClass('styled custom-check');
			$("<span ></span>").insertBefore('input[type="checkbox"]').addClass('chk-normal styled-span');
		}
		
		drop_down_selected = 1;
		
	});
		$('body').on('click','.custom-check',function(){
		if($(this).parent().parent().hasClass('ms-select-all') ){
			$.each($(this).parent().parent().parent().children(),function(key,value){
			if($(this).parent().find('input[type="checkbox"]').is(":checked"))
			{
				$(value).find('span.styled-span').addClass('chk-checked').removeClass("chk-normal");
				$(this).parent().find('.option-label').addClass('font-bold');
				}
			else
			{
				$(value).find('span.styled-span').addClass('chk-normal').removeClass("chk-checked");
				$(this).parent().find('.option-label').removeClass('font-bold');
				}
			});
		}
		if($(this).parent().find('input[type="checkbox"]').is(":checked"))
		{
			$(this).prev().addClass("chk-checked").removeClass("chk-normal");
			$(this).parent().find('.option-label').addClass('font-bold');
		  
		} 
		else 
		{
			$(this).prev().addClass("chk-normal").removeClass("chk-checked");
			$(this).parent().find('.option-label').removeClass('font-bold');
		} 
		
	});
	
   
	$("document").click
(
  function(e)
  {
    if(e.target.className !== "ms-drop")
    {
      $(".ms-drop").hide();
    }
  }
);

});