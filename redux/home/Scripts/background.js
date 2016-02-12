(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(window).scrollTop() / 440;
        return $('.blur').css('opacity', oVal);
    });
}.call(this));