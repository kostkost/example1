$(window).scroll(function() {

    if ($(window).scrollTop() >= 50 ) {
        $('.navbar-white').addClass('white');
    } else {
        $('.navbar-white').removeClass('white');
    }
});

$("#services .col-sm-6").hover(
    function(){
        $(this).addClass('shadow-z-1')
    },
    function(){
        $(this).removeClass('shadow-z-1')
    });