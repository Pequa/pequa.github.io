(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(window).scrollTop() / 100;
        return $('.blur').css('opacity', oVal);
    });
}.call(this));