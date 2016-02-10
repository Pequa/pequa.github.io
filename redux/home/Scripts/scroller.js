$(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
    $('.text0').css({'top': .6*scrollVar });
    $('.text0').css({'opacity':( scrollVar -400 )/100});
    //$('.text0').css({'padding-top':500-scrollVar});
    $('.text2').css({'top': .6*scrollVar });
    $('.text2').css({'opacity':( scrollVar -900 )/100});
    //$('.text2').css({'padding-top':1000-scrollVar});
    var scrollVar = $(window).scrollTop();
    $('.text1').css({'top': .6*scrollVar });
    $('.text1').css({'opacity':( scrollVar -1600 )/100});
    //$('.text1').css({'padding-top':1600-scrollVar});
})