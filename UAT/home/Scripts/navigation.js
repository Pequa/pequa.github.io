(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){ 
            
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)  { 

            /** SAFARI **/    
                
            if ($(this).scrollTop() > 200) {
                $('.navigation-expanded').fadeIn(500);
                $('.navigation-expanded').css({width:"-webkit-fill-available"});
            }
            
            else {
                $('.navigation-expanded').fadeOut(500);
            }
            
            }
            
            /** CHROME **/
            
            else {
             
            if ($(this).scrollTop() > 200) {
                $('.navigation-expanded').fadeIn(500);
                $('.navigation-expanded').css({width:"-webkit-fill-available"});
            }
            
            else {
                $('.navigation-expanded').fadeOut(500);
            }
                
            }
            
            
            
            
            /** SMOOTH SCROLL **/
            
            if ($(this).scrollTop() > 3600) {
                $('.navigation-expanded ul li:first-child a').css({color:"#1DD1A1"});
                $('.navigation-expanded li a span').css({color:"#262626"});
            }
            
            else {
                $('.navigation-expanded ul li:first-child a').css({color:"#262626"});
                $('.navigation-expanded li a span').css({color:"#1DD1A1"});
            }
        });
    });
})(jQuery);

$(document).ready(function(){
  $("a").on('click', function(event) {
      
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});