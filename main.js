$(document).on('click', 'a', function(event){
    //animate scroll at 800 ms
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});

$(document).ready(function () {
    $("#dot1").addClass('selected');
    var main = main = $('#dotstyle');

    $(window).scroll(function (event) {
        if ($("#page1").offset().top < $(window).scrollTop() + $(window).outerHeight() - 470) {
            $("#dot1").addClass('selected');
            $("#dot2").removeClass('selected');
            $("#dot3").removeClass('selected');
            $("#dot4").removeClass('selected');
            $("#dot5").removeClass('selected');
            $('.dot a').css('box-shadow','inset 0 0 0 2px #000');
        }
        if ($("#page2").offset().top < $(window).scrollTop() + $(window).outerHeight() - 470) {
            $("#dot1").removeClass('selected');
            $("#dot2").addClass('selected');
            $("#dot3").removeClass('selected');
            $("#dot4").removeClass('selected');
            $("#dot5").removeClass('selected');
            $('.dot a').css('box-shadow','inset 0 0 0 2px #000');
        }
        if ($("#page3").offset().top < $(window).scrollTop() + $(window).outerHeight() - 470) {
            $("#dot1").removeClass('selected');
            $("#dot2").removeClass('selected');
            $("#dot3").addClass('selected');
            $("#dot4").removeClass('selected');
            $("#dot5").removeClass('selected');
            $('.dot a').css('box-shadow','inset 0 0 0 2px #000');
        }
        if ($("#page4").offset().top < $(window).scrollTop() + $(window).outerHeight() - 470) {
            $("#dot1").removeClass('selected');
            $("#dot2").removeClass('selected');
            $("#dot3").removeClass('selected');
            $("#dot4").addClass('selected');
            $("#dot5").removeClass('selected');
            $('.dot a').css('box-shadow','inset 0 0 0 2px #000');
        }
        if ($("#page5").offset().top < $(window).scrollTop() + $(window).outerHeight() - 470) {
            $("#dot1").removeClass('selected');
            $("#dot2").removeClass('selected');
            $("#dot3").removeClass('selected');
            $("#dot4").removeClass('selected');
            $("#dot5").addClass('selected');
            $('.dot a').css('box-shadow','inset 0 0 0 2px #fff');
        }
    });

});
