$(window).scroll(function(){
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100 & $(window).scrollTop() < 5000)
    {
        $('#header').addClass('shrink');
    }
    else
    {
        $('#header').removeClass('shrink');
    }
});
