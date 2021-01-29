jQuery(document).ready(function($){
	

	
	
	
  $(".dtooltip").tooltip();
  $('span.menu-toggle').click(function(){
    $('body').toggleClass('menu-open');
  });
  $('.region-navigation').click(function(e){
     if($(e.target).hasClass('region-navigation')){
       $('body').removeClass('menu-open');
     }
  });
 /* $('.region-top').hide();*/
  $('.search-toggle').click(function(){
    $('.region-top').show().find('input[type=text]').focus();
    return false;
  });
  $('.search-close').click(function(){
    $('.region-top').hide();
    return false;
  });
  $('.dexp-fading').each(function(){
    var $this = $(this);
    var $slides = [];
    $this.find('> *').each(function(index){
      $(this).wrap('<div>');
      $slides[index] = $(this).parent().html();
      $(this).remove();
    });
    var counter = 1;
    $this.html($slides[0]).removeClass('fadeout');
    setInterval(function(){
      $this.addClass('fadeout');
      setTimeout(function(){
        $this.html($slides[counter=(counter+1)%$slides.length]).removeClass('fadeout');
      },500);
    },5000);
  });
  
  var $myDiv = $('#layout_image.featured_image');

    if ( $myDiv.length){
        $('div.radix-layouts-header').css('margin','0');
		$('div.radix-layouts-header').css('padding','0');
		$('div.region-content').css('margin','0');
		$('div.region-content').css('padding','0');
    }
  
  
});

